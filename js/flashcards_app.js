(function () {
  const state = {
    selectedImageBlob: null,
    selectedImageMeta: null,
  };

  function notify(msg, color = '#388e3c') {
    if (typeof showMessage === 'function') {
      showMessage(msg, color);
      return;
    }
    console.log(msg);
  }

  function getEls() {
    return {
      createDeckForm: document.getElementById('createDeckForm'),
      flashSubjectInput: document.getElementById('flashSubjectInput'),
      flashSubsubjectInput: document.getElementById('flashSubsubjectInput'),
      flashDeckNameInput: document.getElementById('flashDeckNameInput'),
      flashDeckSelect: document.getElementById('flashDeckSelect'),
      createFlashcardForm: document.getElementById('createFlashcardForm'),
      cardFrontInput: document.getElementById('cardFrontInput'),
      cardBackInput: document.getElementById('cardBackInput'),
      cardTagsInput: document.getElementById('cardTagsInput'),
      cardImageInput: document.getElementById('cardImageInput'),
      imageDropzone: document.getElementById('imageDropzone'),
      imagePreview: document.getElementById('imagePreview'),
      refreshFlashcardsBtn: document.getElementById('refreshFlashcardsBtn'),
      flashDeckList: document.getElementById('flashDeckList'),
      flashStatNew: document.getElementById('flashStatNew'),
      flashStatDue: document.getElementById('flashStatDue'),
      flashStatLearned: document.getElementById('flashStatLearned'),
    };
  }

  async function blobToDataUrl(blob) {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('Falha ao converter imagem'));
      reader.readAsDataURL(blob);
    });
  }

  async function compressImage(file, maxWidth = 1600, quality = 0.82) {
    const imageBitmap = await createImageBitmap(file);
    let { width, height } = imageBitmap;
    if (width > maxWidth) {
      const ratio = maxWidth / width;
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageBitmap, 0, 0, width, height);

    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve, 'image/jpeg', quality);
    });

    if (!blob) {
      throw new Error('Falha na compressão da imagem');
    }

    return {
      blob,
      meta: {
        original_name: file.name,
        mime_type: blob.type || 'image/jpeg',
        width,
        height,
        size_bytes: blob.size,
      },
    };
  }

  async function uploadCompressedImage(blob) {
    if (!(window.SB && window.SB.isReady())) {
      return null;
    }

    const user = await window.SB.getUser();
    if (!user) return null;

    const filePath = `${user.id}/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`;
    const { error } = await window.supabaseClient
      .storage
      .from('flashcards-images')
      .upload(filePath, blob, { contentType: 'image/jpeg', upsert: false });

    if (error) {
      return null;
    }

    const { data } = window.supabaseClient
      .storage
      .from('flashcards-images')
      .getPublicUrl(filePath);

    return data?.publicUrl || null;
  }

  function fillDeckSelect(flashDeckSelect, decks) {
    const prev = flashDeckSelect.value;
    flashDeckSelect.innerHTML = '<option value="">Selecione um deck</option>';

    for (const deck of decks) {
      const opt = document.createElement('option');
      opt.value = deck.id;
      opt.textContent = `${deck.subject_name}${deck.subsubject_name ? ' > ' + deck.subsubject_name : ''} > ${deck.name}`;
      flashDeckSelect.appendChild(opt);
    }

    if (prev && decks.some(d => d.id === prev)) {
      flashDeckSelect.value = prev;
    }
  }

  function renderDeckList(flashDeckList, decks) {
    if (!decks.length) {
      flashDeckList.innerHTML = '<p class="flash-empty">Nenhum deck criado ainda.</p>';
      return;
    }

    flashDeckList.innerHTML = decks.map(deck => `
      <div class="flash-deck-item">
        <div class="flash-deck-top">
          <strong>${deck.name}</strong>
          <span>${deck.subject_name}${deck.subsubject_name ? ' > ' + deck.subsubject_name : ''}</span>
        </div>
        <div class="flash-deck-metrics">
          <span>Novo: ${deck.new_count}</span>
          <span>Revisão: ${deck.due_count}</span>
          <span>Aprendido: ${deck.learned_count}</span>
        </div>
      </div>
    `).join('');
  }

  function setOverviewStats(els, decks) {
    let newTotal = 0;
    let dueTotal = 0;
    let learnedTotal = 0;

    for (const deck of decks) {
      newTotal += Number(deck.new_count || 0);
      dueTotal += Number(deck.due_count || 0);
      learnedTotal += Number(deck.learned_count || 0);
    }

    els.flashStatNew.textContent = String(newTotal);
    els.flashStatDue.textContent = String(dueTotal);
    els.flashStatLearned.textContent = String(learnedTotal);
  }

  async function refresh() {
    const els = getEls();
    if (!els.flashDeckSelect || !els.flashDeckList) return;

    if (!(window.SB && window.SB.isReady())) {
      notify('Supabase não está configurado.', '#d32f2f');
      return;
    }

    try {
      const decks = await window.SB.listFlashDeckStudyStats();
      fillDeckSelect(els.flashDeckSelect, decks);
      renderDeckList(els.flashDeckList, decks);
      setOverviewStats(els, decks);
    } catch (err) {
      console.error('Erro ao carregar flashcards:', err);
      notify('Aplique o schema de flashcards no Supabase para habilitar esta área.', '#d32f2f');
    }
  }

  async function handleCreateDeck(e) {
    e.preventDefault();
    const els = getEls();

    const payload = {
      subjectName: els.flashSubjectInput.value,
      subsubjectName: els.flashSubsubjectInput.value,
      deckName: els.flashDeckNameInput.value,
    };

    try {
      await window.SB.createFlashDeck(payload);
      els.createDeckForm.reset();
      notify('Deck criado com sucesso!');
      await refresh();
    } catch (err) {
      console.error('Falha ao criar deck:', err);
      notify('Falha ao criar deck: ' + (err.message || 'tente novamente'), '#d32f2f');
    }
  }

  function parseTags(raw) {
    return String(raw || '')
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);
  }

  async function handleCreateFlashcard(e) {
    e.preventDefault();
    const els = getEls();

    try {
      let imageUrl = null;
      let imageMeta = {};

      if (state.selectedImageBlob) {
        imageMeta = state.selectedImageMeta || {};
        imageUrl = await uploadCompressedImage(state.selectedImageBlob);

        if (!imageUrl) {
          imageUrl = await blobToDataUrl(state.selectedImageBlob);
          imageMeta.storage = 'inline-data-url';
        } else {
          imageMeta.storage = 'supabase-storage';
        }
      }

      await window.SB.createFlashcard({
        deckId: els.flashDeckSelect.value,
        frontMd: els.cardFrontInput.value,
        backMd: els.cardBackInput.value,
        tags: parseTags(els.cardTagsInput.value),
        imageUrl,
        imageMeta,
      });

      els.createFlashcardForm.reset();
      state.selectedImageBlob = null;
      state.selectedImageMeta = null;
      els.imagePreview.src = '';
      els.imagePreview.style.display = 'none';

      notify('Flashcard salvo com sucesso!');
      await refresh();
    } catch (err) {
      console.error('Falha ao salvar flashcard:', err);
      notify('Falha ao salvar flashcard: ' + (err.message || 'tente novamente'), '#d32f2f');
    }
  }

  async function setImage(file) {
    const els = getEls();
    if (!file) return;

    try {
      const { blob, meta } = await compressImage(file);
      state.selectedImageBlob = blob;
      state.selectedImageMeta = meta;

      const dataUrl = await blobToDataUrl(blob);
      els.imagePreview.src = dataUrl;
      els.imagePreview.style.display = 'block';
      notify('Imagem pronta (' + Math.round(blob.size / 1024) + ' KB).');
    } catch (err) {
      console.error('Erro de imagem:', err);
      notify('Não foi possível processar a imagem.', '#d32f2f');
    }
  }

  function bindImageDropzone() {
    const els = getEls();
    if (!els.imageDropzone || !els.cardImageInput) return;

    els.imageDropzone.addEventListener('click', () => els.cardImageInput.click());
    els.imageDropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        els.cardImageInput.click();
      }
    });

    els.cardImageInput.addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) await setImage(file);
    });

    els.imageDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      els.imageDropzone.classList.add('dragover');
    });

    els.imageDropzone.addEventListener('dragleave', () => {
      els.imageDropzone.classList.remove('dragover');
    });

    els.imageDropzone.addEventListener('drop', async (e) => {
      e.preventDefault();
      els.imageDropzone.classList.remove('dragover');
      const file = e.dataTransfer?.files?.[0];
      if (file) await setImage(file);
    });
  }

  function init() {
    const els = getEls();
    if (!els.createDeckForm || !els.createFlashcardForm) return;

    els.createDeckForm.addEventListener('submit', handleCreateDeck);
    els.createFlashcardForm.addEventListener('submit', handleCreateFlashcard);
    if (els.refreshFlashcardsBtn) {
      els.refreshFlashcardsBtn.addEventListener('click', refresh);
    }

    bindImageDropzone();
  }

  document.addEventListener('DOMContentLoaded', init);
  window.FlashcardsApp = { refresh };
})();
