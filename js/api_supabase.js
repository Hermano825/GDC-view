// Lightweight Supabase helpers. Safe to include even if Supabase isn't configured.
// Não tenta recriar o cliente - ele já foi criado no index.html

// Expor uma API global segura: window.SB
window.SB = {
  isReady: () => {
    const ready = !!window.supabaseClient;
    console.log('🔍 SB.isReady():', ready);
    if (!ready) {
      console.error('❌ window.supabaseClient não existe!');
      console.log('window.SUPABASE_URL:', window.SUPABASE_URL);
      console.log('window.SUPABASE_ANON:', window.SUPABASE_ANON ? '(chave presente)' : '(chave ausente)');
      console.log('window.supabase:', typeof window.supabase);
    }
    return ready;
  },
  async register(email, password, name) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data, error } = await window.supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { name } }
    });
    if (error) throw error;
    return data;
  },
  async login(email, password) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data, error } = await window.supabaseClient.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },
  async logout() {
    if (!window.supabaseClient) return;
    await window.supabaseClient.auth.signOut();
  },
  async getUser() {
    if (!window.supabaseClient) return null;
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    return user || null;
  },
  async addStat({ category, score, total }) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('Não autenticado');
    const { error } = await window.supabaseClient
      .from('stats')
      .insert({ user_id: user.id, category, score, total });
    if (error) throw error;
  },
  async listStats() {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('Não autenticado');
    const { data, error } = await window.supabaseClient
      .from('stats')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },
  async sendPasswordReset(email) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    // Detectar URL base correta (localhost ou produção)
    const redirectUrl = `${window.location.origin}${window.location.pathname}`;
    const { error } = await window.supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl
    });
    if (error) throw error;
  },
  async updatePassword(newPassword) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { error } = await window.supabaseClient.auth.updateUser({
      password: newPassword
    });
    if (error) throw error;
  },
  async createFlashDeck({ subjectName, subsubjectName, deckName, description = '' }) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('Não autenticado');

    const subject = (subjectName || '').trim();
    const subsubject = (subsubjectName || '').trim();
    const deck = (deckName || '').trim();
    if (!subject || !deck) throw new Error('Assunto e nome do deck são obrigatórios');

    let subjectId;
    {
      const { data, error } = await window.supabaseClient
        .from('flash_subjects')
        .select('id')
        .eq('user_id', user.id)
        .eq('name', subject)
        .maybeSingle();
      if (error) throw error;
      if (data?.id) {
        subjectId = data.id;
      } else {
        const { data: inserted, error: insertError } = await window.supabaseClient
          .from('flash_subjects')
          .insert({ user_id: user.id, name: subject })
          .select('id')
          .single();
        if (insertError) throw insertError;
        subjectId = inserted.id;
      }
    }

    let subsubjectId = null;
    if (subsubject) {
      const { data, error } = await window.supabaseClient
        .from('flash_subsubjects')
        .select('id')
        .eq('user_id', user.id)
        .eq('subject_id', subjectId)
        .eq('name', subsubject)
        .maybeSingle();
      if (error) throw error;
      if (data?.id) {
        subsubjectId = data.id;
      } else {
        const { data: inserted, error: insertError } = await window.supabaseClient
          .from('flash_subsubjects')
          .insert({ user_id: user.id, subject_id: subjectId, name: subsubject })
          .select('id')
          .single();
        if (insertError) throw insertError;
        subsubjectId = inserted.id;
      }
    }

    const { data: createdDeck, error: deckError } = await window.supabaseClient
      .from('flash_decks')
      .insert({
        user_id: user.id,
        subject_id: subjectId,
        subsubject_id: subsubjectId,
        name: deck,
        description,
      })
      .select('*')
      .single();

    if (deckError) throw deckError;
    return createdDeck;
  },
  async listFlashDecks() {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('Não autenticado');

    const [{ data: decks, error: decksError }, { data: subjects, error: subjectsError }, { data: subsubjects, error: subsubjectsError }] = await Promise.all([
      window.supabaseClient
        .from('flash_decks')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_archived', false)
        .order('created_at', { ascending: true }),
      window.supabaseClient
        .from('flash_subjects')
        .select('id,name')
        .eq('user_id', user.id),
      window.supabaseClient
        .from('flash_subsubjects')
        .select('id,name,subject_id')
        .eq('user_id', user.id),
    ]);

    if (decksError) throw decksError;
    if (subjectsError) throw subjectsError;
    if (subsubjectsError) throw subsubjectsError;

    const subjectById = new Map((subjects || []).map(s => [s.id, s.name]));
    const subById = new Map((subsubjects || []).map(s => [s.id, s.name]));

    return (decks || []).map(deck => ({
      ...deck,
      subject_name: subjectById.get(deck.subject_id) || 'Sem assunto',
      subsubject_name: deck.subsubject_id ? (subById.get(deck.subsubject_id) || null) : null,
    }));
  },
  async listFlashDeckStudyStats() {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const decks = await window.SB.listFlashDecks();
    if (decks.length === 0) return [];

    const deckIds = decks.map(d => d.id);
    const { data: cards, error: cardsError } = await window.supabaseClient
      .from('flash_cards')
      .select('id,deck_id,is_suspended')
      .in('deck_id', deckIds);

    if (cardsError) throw cardsError;

    const cardIds = (cards || []).map(c => c.id);
    let states = [];

    if (cardIds.length > 0) {
      const { data: stateData, error: stateErr } = await window.supabaseClient
        .from('flash_review_state')
        .select('card_id,due_at,total_reviews')
        .in('card_id', cardIds);
      if (stateErr) throw stateErr;
      states = stateData || [];
    }

    const stateByCard = new Map(states.map(s => [s.card_id, s]));
    const now = Date.now();

    return decks.map(deck => {
      let newCount = 0;
      let dueCount = 0;
      let learnedCount = 0;

      for (const card of (cards || [])) {
        if (card.deck_id !== deck.id || card.is_suspended) continue;
        const rs = stateByCard.get(card.id);
        if (!rs || (rs.total_reviews || 0) === 0) {
          newCount += 1;
          continue;
        }
        if (new Date(rs.due_at).getTime() <= now) {
          dueCount += 1;
        } else {
          learnedCount += 1;
        }
      }

      return {
        ...deck,
        new_count: newCount,
        due_count: dueCount,
        learned_count: learnedCount,
      };
    });
  },
  async createFlashcard({
    deckId,
    frontMd,
    backMd,
    tags = [],
    imageUrl = null,
    frontImageUrl = null,
    backImageUrl = null,
    imageMeta = {}
  }) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('Não autenticado');

    const front = (frontMd || '').trim();
    const back = (backMd || '').trim();
    if (!deckId || !front || !back) throw new Error('Deck, frente e verso são obrigatórios');

    const mergedImageMeta = {
      ...(imageMeta || {}),
      ...(frontImageUrl ? { front_image_url: frontImageUrl } : {}),
      ...(backImageUrl ? { back_image_url: backImageUrl } : {}),
    };

    const { data: createdCard, error: cardError } = await window.supabaseClient
      .from('flash_cards')
      .insert({
        user_id: user.id,
        deck_id: deckId,
        front_md: front,
        back_md: back,
        // image_url remains as the canonical back image for compatibility.
        image_url: backImageUrl || imageUrl,
        image_meta: mergedImageMeta,
      })
      .select('*')
      .single();
    if (cardError) throw cardError;

    const initialState = window.FlashSRS?.createInitialReviewState?.() || {
      dueAt: new Date().toISOString(),
      lastReviewedAt: null,
      intervalDays: 0,
      repetitions: 0,
      easeFactor: 2.5,
      lapses: 0,
      totalReviews: 0,
      lastGrade: null,
    };

    const { error: reviewError } = await window.supabaseClient
      .from('flash_review_state')
      .insert({
        card_id: createdCard.id,
        user_id: user.id,
        due_at: initialState.dueAt,
        last_reviewed_at: initialState.lastReviewedAt,
        interval_days: initialState.intervalDays,
        repetitions: initialState.repetitions,
        ease_factor: initialState.easeFactor,
        lapses: initialState.lapses,
        total_reviews: initialState.totalReviews,
        last_grade: initialState.lastGrade,
      });
    if (reviewError) throw reviewError;

    const normalizedTags = (tags || [])
      .map(tag => String(tag || '').trim().toLowerCase())
      .filter(Boolean);

    if (normalizedTags.length > 0) {
      const upsertRows = normalizedTags.map(name => ({ user_id: user.id, name }));
      const { error: upsertError } = await window.supabaseClient
        .from('flash_tags')
        .upsert(upsertRows, { onConflict: 'user_id,name' });
      if (upsertError) throw upsertError;

      const { data: dbTags, error: tagsError } = await window.supabaseClient
        .from('flash_tags')
        .select('id,name')
        .eq('user_id', user.id)
        .in('name', normalizedTags);
      if (tagsError) throw tagsError;

      const linkRows = (dbTags || []).map(tag => ({
        card_id: createdCard.id,
        tag_id: tag.id,
        user_id: user.id,
      }));

      if (linkRows.length > 0) {
        const { error: linkError } = await window.supabaseClient
          .from('flash_card_tags')
          .upsert(linkRows, { onConflict: 'card_id,tag_id' });
        if (linkError) throw linkError;
      }
    }

    return createdCard;
  },
  async listFlashcardsForStudy({ deckId, limit = 20 }) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('Não autenticado');

    const maxItems = Math.max(1, Math.min(100, Number(limit || 20)));

    const { data: cards, error: cardsError } = await window.supabaseClient
      .from('flash_cards')
      .select('id,deck_id,front_md,back_md,image_url,image_meta,is_suspended')
      .eq('deck_id', deckId)
      .eq('user_id', user.id)
      .eq('is_suspended', false);
    if (cardsError) throw cardsError;

    if (!cards || cards.length === 0) return [];

    const cardIds = cards.map(c => c.id);
    let states = [];
    if (cardIds.length > 0) {
      const { data: st, error: stError } = await window.supabaseClient
        .from('flash_review_state')
        .select('card_id,due_at,interval_days,repetitions,ease_factor,lapses,total_reviews,last_grade,last_reviewed_at')
        .in('card_id', cardIds);
      if (stError) throw stError;
      states = st || [];
    }

    const now = Date.now();
    const stateById = new Map(states.map(s => [s.card_id, s]));

    const due = [];
    const learned = [];
    const fresh = [];

    for (const c of cards) {
      const rs = stateById.get(c.id);
      const normalized = {
        id: c.id,
        deck_id: c.deck_id,
        front_md: c.front_md,
        back_md: c.back_md,
        front_image_url: c.image_meta?.front_image_url || null,
        back_image_url: c.image_meta?.back_image_url || c.image_url || null,
        image_url: c.image_url,
        image_meta: c.image_meta || {},
        review_state: rs || null,
      };

      if (!rs || Number(rs.total_reviews || 0) === 0) {
        fresh.push(normalized);
        continue;
      }

      if (new Date(rs.due_at).getTime() <= now) {
        due.push(normalized);
      } else {
        learned.push(normalized);
      }
    }

    due.sort((a, b) => new Date(a.review_state.due_at) - new Date(b.review_state.due_at));
    fresh.sort((a, b) => a.id.localeCompare(b.id));
    learned.sort((a, b) => new Date(a.review_state.due_at) - new Date(b.review_state.due_at));

    return [...due, ...fresh, ...learned].slice(0, maxItems);
  },
  async submitFlashReview({ cardId, rating }) {
    if (!window.supabaseClient) throw new Error('Supabase não configurado');
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) throw new Error('Não autenticado');

    const { data: existing, error: stateError } = await window.supabaseClient
      .from('flash_review_state')
      .select('*')
      .eq('card_id', cardId)
      .maybeSingle();
    if (stateError) throw stateError;

    const prevState = existing ? {
      dueAt: existing.due_at,
      lastReviewedAt: existing.last_reviewed_at,
      intervalDays: Number(existing.interval_days || 0),
      repetitions: Number(existing.repetitions || 0),
      easeFactor: Number(existing.ease_factor || 2.5),
      lapses: Number(existing.lapses || 0),
      totalReviews: Number(existing.total_reviews || 0),
      lastGrade: existing.last_grade,
    } : window.FlashSRS.createInitialReviewState();

    const nextState = window.FlashSRS.calculateNextReview(prevState, rating);
    const quality = window.FlashSRS.normalizeQuality(rating);

    const { error: upsertError } = await window.supabaseClient
      .from('flash_review_state')
      .upsert({
        card_id: cardId,
        user_id: user.id,
        due_at: nextState.dueAt,
        last_reviewed_at: nextState.lastReviewedAt,
        interval_days: nextState.intervalDays,
        repetitions: nextState.repetitions,
        ease_factor: nextState.easeFactor,
        lapses: nextState.lapses,
        total_reviews: nextState.totalReviews,
        last_grade: nextState.lastGrade,
      }, { onConflict: 'card_id' });
    if (upsertError) throw upsertError;

    const { error: logError } = await window.supabaseClient
      .from('flash_review_log')
      .insert({
        card_id: cardId,
        user_id: user.id,
        grade: quality,
        prev_interval_days: Number(prevState.intervalDays || 0),
        next_interval_days: Number(nextState.intervalDays || 0),
        prev_ease_factor: Number(prevState.easeFactor || 2.5),
        next_ease_factor: Number(nextState.easeFactor || 2.5),
      });
    if (logError) throw logError;

    return nextState;
  }
};
