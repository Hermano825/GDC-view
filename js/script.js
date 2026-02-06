// Detecção de dispositivo móvel e otimizações
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Configurações específicas para mobile
const mobileConfig = {
    enableVibration: isMobile && 'vibrate' in navigator,
    enableSound: true,
    enableHapticFeedback: isMobile,
    touchDelay: 300, // Delay para evitar toques acidentais
    swipeThreshold: 50, // Distância mínima para swipe
    longPressDelay: 500 // Delay para long press
};

// Variáveis para gestos touch
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
let lastTouchTime = 0;
let isLongPress = false;
let longPressTimer = null;

// ========================================
// FUNÇÕES DE FEEDBACK HÁPTICO
// ========================================

// Função para vibração com padrões diferentes
function vibrate(pattern = 10) {
    if (mobileConfig.enableVibration && navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

// Padrões de vibração
const vibrationPatterns = {
    tap: 10,           // Toque leve
    success: [20, 50, 20],  // Padrão de sucesso
    error: [50, 100, 50],   // Padrão de erro
    warning: [30, 50, 30, 50, 30],  // Padrão de aviso
    longPress: 50      // Pressão longa
};

// Adicionar feedback háptico aos cards
function addHapticFeedback() {
    if (!mobileConfig.enableHapticFeedback) return;
    
    // Cards do menu
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('touchstart', () => vibrate(vibrationPatterns.tap), { passive: true });
    });
    
    // Cards de categoria
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('touchstart', () => vibrate(vibrationPatterns.tap), { passive: true });
    });
    
    // Cards de quantidade
    document.querySelectorAll('.quantity-card').forEach(card => {
        card.addEventListener('touchstart', () => vibrate(vibrationPatterns.tap), { passive: true });
    });
    
    // Botões gerais
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('touchstart', () => vibrate(vibrationPatterns.tap), { passive: true });
    });
}

// Seletores únicos para containers e botões
const homeContainer = document.getElementById('homeContainer');
const loginContainer = document.getElementById('loginContainer');
const registerContainer = document.getElementById('registerContainer');
const forgotPasswordContainer = document.getElementById('forgotPasswordContainer');
const resetPasswordContainer = document.getElementById('resetPasswordContainer');
const menuContainer = document.getElementById('menuContainer');
const categoryContainer = document.getElementById('categoryContainer');
const typeContainer = document.getElementById('typeContainer');
const quantityContainer = document.getElementById('quantityContainer');
const quizContainer = document.getElementById('quizContainer');
const statsContainer = document.getElementById('statsContainer');
const messageContainer = document.getElementById('messageContainer');
const adminPanelContainer = document.getElementById('adminPanelContainer');

// Header/nav
const homeBtn = document.getElementById('homeBtn');
const statsBtn = document.getElementById('statsBtn');
const logoutBtn = document.getElementById('logoutBtn');
const adminPanelBtn = document.getElementById('adminPanelBtn');

// Home
const startBtn = document.getElementById('startBtn');
const loginShowBtn = document.getElementById('loginShowBtn');
const registerShowBtn = document.getElementById('registerShowBtn');

// Login/Cadastro
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const resetPasswordForm = document.getElementById('resetPasswordForm');
const toRegisterBtn = document.getElementById('toRegisterBtn');
const toLoginBtn = document.getElementById('toLoginBtn');
const toForgotPasswordBtn = document.getElementById('toForgotPasswordBtn');
const backToLoginBtn = document.getElementById('backToLoginBtn');
const backHomeFromLogin = document.getElementById('backHomeFromLogin');
const backHomeFromRegister = document.getElementById('backHomeFromRegister');

// Menu
const quizMenuBtn = document.getElementById('quizMenuBtn');
const statsMenuBtn = document.getElementById('statsMenuBtn');
const logoutMenuBtn = document.getElementById('logoutMenuBtn');
const settingsMenuBtn = document.getElementById('settingsMenuBtn');
const userGreeting = document.getElementById('userGreeting');
const totalAttempts = document.getElementById('totalAttempts');
const bestScore = document.getElementById('bestScore');
const avgScore = document.getElementById('avgScore');

// Categorias
const superioresBtn = document.getElementById('superioresBtn');
const inferioresBtn = document.getElementById('inferioresBtn');
const coracaoBtn = document.getElementById('coracaoBtn');
// mediastinoBtn removido: mediastino fica dentro de Coração
const imagemBtn = document.getElementById('imagemBtn');
const teoricaBtn = document.getElementById('teoricaBtn');
const backToCategoryFromTypeBtn = document.getElementById('backToCategoryFromTypeBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const backToCategoryBtn = document.getElementById('backToCategoryBtn');
const backToMenuFromAdmin = document.getElementById('backToMenuFromAdmin');

// Quiz
const quizTitle = document.getElementById('quizTitle');
const currentQuestion = document.getElementById('currentQuestion');
const totalQuestions = document.getElementById('totalQuestions');
const quizImage = document.getElementById('quizImage');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const backMenuBtn = document.getElementById('backMenuBtn');

// Progresso
const progressFill = document.getElementById('progressFill');
const progressPercentage = document.getElementById('progressPercentage');

// Modal
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Modal de Aviso
const warningModal = document.getElementById('warningModal');
const warningMessage = document.getElementById('warningMessage');
const closeWarningBtn = document.getElementById('closeWarningBtn');

// Estatísticas
const statsContent = document.getElementById('statsContent');
const backStatsBtn = document.getElementById('backStatsBtn');
const statsCategoryFilter = document.getElementById('statsCategoryFilter');
const statsTimeFilter = document.getElementById('statsTimeFilter');
const evolutionCanvas = document.getElementById('evolutionChart');
let evolutionChart = null;

// Estado do usuário e quiz
let currentUser = null;
let quizIndex = 0;
let quizScore = 0;
let currentCategory = '';
let currentType = ''; // 'imagem' ou 'teorica'
let selectedQuestions = []; // Array com as questões selecionadas aleatoriamente
let questionQuantity = 0; // Quantidade de questões escolhida pelo usuário
let isQuizActive = false;
let userStats = {};

const ADMIN_EMAIL = 'jose.hermano@hotmail.com';

// Funções do Quiz
function selectCategory(category) {
    currentCategory = category;
    
    // Verificar se é membros superiores (em desenvolvimento)
    if (category === 'superiores') {
        showWarningModal('Membros Superiores em Desenvolvimento', 
            'As questões de membros superiores com imagens estão sendo preparadas e estarão disponíveis em breve. Agradecemos sua compreensão! 🚧');
        return;
    }
    
    // Verificar se quizData existe e tem a categoria
    if (typeof quizData === 'undefined' || !quizData[category]) {
        console.error('[ERROR] selectCategory: quizData or category not found', { quizDataDefined: typeof quizData !== 'undefined', category });
        showMessage('Erro: dados do quiz indisponíveis. Veja o console para detalhes.', '#d32f2f');
        return;
    }
    
    // Filtrar questões desabilitadas
    // Atualizar título do tipo de questão
    const typeTitle = document.getElementById('typeTitle');
    if (typeTitle) {
        const categoryNames = {
            'superiores': 'Membros Superiores',
            'inferiores': 'Membros Inferiores',
            'coracao': 'Coração'
        };
        typeTitle.textContent = categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
    }
    
    // Contar questões com imagens
    const imagemData = quizData[category].filter(question => !question.disabled);
    const imagemCount = document.getElementById('imagemCount');
    if (imagemCount) {
        imagemCount.textContent = imagemData.length;
    }
    
    // Contar questões teóricas
    const teoricaKey = category + 'Teorico';
    const teoricaData = quizData[teoricaKey] ? quizData[teoricaKey].filter(question => !question.disabled) : [];
    const teoricaCount = document.getElementById('teoricaCount');
    if (teoricaCount) {
        teoricaCount.textContent = teoricaData.length;
    }
    
    showOnly(typeContainer);
}

function selectType(type) {
    console.log('[DEBUG] selectType chamado com:', type);
    console.log('[DEBUG] currentCategory:', currentCategory);
    
    currentType = type;
    
    // Determinar chave de dados
    const dataKey = type === 'teorica' ? currentCategory + 'Teorico' : currentCategory;
    console.log('[DEBUG] dataKey:', dataKey);
    console.log('[DEBUG] quizData[dataKey] existe?', !!quizData[dataKey]);
    
    // Validar se os dados existem
    if (!quizData[dataKey]) {
        console.error(`Dados não encontrados para ${dataKey}`);
        alert(`Ainda não há questões ${type === 'teorica' ? 'teóricas' : 'com imagens'} disponíveis para esta categoria.`);
        return;
    }
    
    // Filtrar questões desabilitadas
    const categoryData = quizData[dataKey].filter(question => !question.disabled);
    
    // Atualizar contador de "todas" as questões
    const allQuestionsCount = document.getElementById('allQuestionsCount');
    if (allQuestionsCount) {
        allQuestionsCount.textContent = `${categoryData.length} questões`;
    }
    
    showOnly(quantityContainer);
}

function selectQuantity(quantity) {
    // Determinar chave de dados baseada no tipo
    const dataKey = currentType === 'teorica' ? currentCategory + 'Teorico' : currentCategory;
    
    // Filtrar questões desabilitadas
    const categoryData = quizData[dataKey].filter(question => !question.disabled);
    
    // Determinar quantidade de questões
    if (quantity === 'all') {
        questionQuantity = categoryData.length;
    } else {
        questionQuantity = Math.min(quantity, categoryData.length);
    }
    
    // Embaralhar e selecionar questões aleatoriamente
    selectedQuestions = shuffleArray([...categoryData]).slice(0, questionQuantity);
    
    // Iniciar quiz com as questões selecionadas
    startQuiz();
}

function shuffleArray(array) {
    // Algoritmo Fisher-Yates para embaralhar
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    quizIndex = 0;
    quizScore = 0;
    isQuizActive = true;
    
    if (totalQuestions) totalQuestions.textContent = selectedQuestions.length;
    
    const categoryNames = {
        'superiores': 'Membros Superiores',
        'inferiores': 'Membros Inferiores',
        'coracao': 'Coração'
    };
    
    if (quizTitle) quizTitle.textContent = 'Quiz: ' + categoryNames[currentCategory];
    
    // Resetar barra de progresso
    if (progressFill) progressFill.style.width = '0%';
    if (progressPercentage) progressPercentage.textContent = '0%';
    
    // Limpar elementos do quiz
    if (quizImage) {
        quizImage.src = '';
        quizImage.style.display = 'none';
    }
    if (quizFeedback) quizFeedback.textContent = '';
    if (quizOptions) quizOptions.innerHTML = '';
    if (quizQuestion) quizQuestion.innerHTML = '';
    
    showOnly(quizContainer);
    renderQuizQuestion();
}

function renderQuizQuestion() {
    // Resetar explicação da questão anterior
    const explanationBoxInit = document.getElementById('quizExplanation');
    if (explanationBoxInit) {
        explanationBoxInit.innerHTML = '';
        explanationBoxInit.style.display = 'none';
    }
    
    // Resetar feedback da questão anterior
    if (quizFeedback) {
        quizFeedback.textContent = '';
        quizFeedback.classList.remove('success', 'error');
        quizFeedback.style.display = 'none';
    }

    // Usar selectedQuestions em vez de categoryData
    if (!selectedQuestions || selectedQuestions.length === 0) {
        console.warn('[WARN] renderQuizQuestion: nenhuma questão selecionada');
        showMessage('Nenhuma questão disponível.', '#1976d2');
        showOnly(menuContainer);
        return;
    }
    const q = selectedQuestions[quizIndex];
    
    if (currentQuestion) currentQuestion.textContent = quizIndex + 1;
    
    // Atualizar barra de progresso
    updateProgress();
    
    // Gerenciar container de imagem
    const quizImageContainer = document.querySelector('.quiz-image-container');
    
    if (quizImage) {
        // Verificar se a questão tem imagem
        if (q.image) {
            if (quizImageContainer) quizImageContainer.style.display = 'block';
            quizImage.src = q.image;
            quizImage.style.display = 'block';
            quizImage.onload = () => {
                // Imagem carregada com sucesso
                const placeholder = document.querySelector('.image-placeholder');
                if (placeholder) {
                    placeholder.remove();
                }
            };
            quizImage.onerror = () => {
                console.error('[DEBUG] quizImage.onerror, src=', quizImage.src, 'expected=', q.image);
                quizImage.style.display = 'none';
                showMessage('Imagem não encontrada: ' + q.image, '#d32f2f');
                
                // Criar placeholder informativo
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.style.cssText = `
                    border-radius: 12px;
                    margin: 1rem 0;
                    color: #6c757d;
                    padding: 2rem;
                    text-align: center;
                    background: #f8f9fa;
                    border: 2px dashed #dee2e6;
                `;
                placeholder.innerHTML = `
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🖼️</div>
                    <h3 style="color: #495057; margin-bottom: 0.5rem;">Imagem não disponível</h3>
                    <p style="margin-bottom: 1rem;"><strong>Questão:</strong> ${q.question}</p>
                    <p style="margin-bottom: 0.5rem;"><strong>Músculo/Estrutura:</strong> <span style="color: #1976d2; font-weight: bold;">${q.correctAnswer}</span></p>
                    <p style="font-size: 0.9rem; opacity: 0.8;">Adicione a imagem em: <code>${q.image}</code></p>
                `;
                quizImage.parentNode.insertBefore(placeholder, quizImage);
            };
        } else {
            // Questão teórica sem imagem - ocultar container inteiro
            if (quizImageContainer) quizImageContainer.style.display = 'none';
            quizImage.style.display = 'none';
            const placeholder = document.querySelector('.image-placeholder');
            if (placeholder) {
                placeholder.remove();
            }
        }
    }
    
    // Adicionar badge de dificuldade
    const difficultyBadge = `<span class="difficulty-badge difficulty-${q.difficulty}">${q.difficulty}</span>`;
    
    if (quizQuestion) {
        // Adicionar classe especial para questões teóricas
        if (!q.image) {
            quizQuestion.classList.add('theoretical-question');
        } else {
            quizQuestion.classList.remove('theoretical-question');
        }
        quizQuestion.innerHTML = q.question + difficultyBadge;
    }
    
    if (quizOptions) {
        quizOptions.innerHTML = '';
        if (quizFeedback) quizFeedback.textContent = '';
        nextQuestionBtn.style.display = 'none';
        
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.onclick = () => selectQuizOption(idx);
            quizOptions.appendChild(btn);
        });
    }
}

function selectQuizOption(idx) {
    // Usar selectedQuestions
    const q = selectedQuestions[quizIndex];
    const buttons = quizOptions.querySelectorAll('button');
    const selectedButton = buttons[idx];
    
    // Desabilitar todos os botões
    buttons.forEach((b, i) => {
        b.classList.toggle('selected', i === idx);
        b.disabled = true;
    });
    
    const isCorrect = (idx === q.answer);
    
    if (isCorrect) {
        // ✅ RESPOSTA CORRETA
        quizScore++;
        
        // Adicionar classe verde ao botão
        selectedButton.classList.add('button-correct');
        
        // Mostrar feedback de sucesso
        if (quizFeedback) {
            quizFeedback.textContent = '✅ Correto! Parabéns!';
            quizFeedback.classList.remove('error');
            quizFeedback.classList.add('success');
            quizFeedback.style.display = 'flex';
        }
        
        // Som de acerto (se configurado)
        const settings = loadSettings();
        if (settings && settings.sounds) {
            playCorrectSound();
        }
        
        // Vibração no mobile - padrão de sucesso
        vibrate(vibrationPatterns.success);
        
    } else {
        // ❌ RESPOSTA INCORRETA
        
        // Botão errado fica vermelho
        selectedButton.classList.add('button-incorrect');
        
        // Botão correto fica verde (mostrar gabarito)
        buttons[q.answer].classList.add('button-correct');
        
        // Mostrar feedback de erro
        if (quizFeedback) {
            quizFeedback.textContent = `❌ Errado! Resposta certa: ${q.correctAnswer}`;
            quizFeedback.classList.remove('success');
            quizFeedback.classList.add('error');
            quizFeedback.style.display = 'flex';
        }
        
        // Som de erro (se configurado)
        const settings = loadSettings();
        if (settings && settings.sounds) {
            playIncorrectSound();
        }
        
        // Vibração no mobile - padrão de erro
        vibrate(vibrationPatterns.error);
    }
    
    // Mostrar explicação
    const explanationBox = document.getElementById('quizExplanation');
    if (explanationBox && q.explanation) {
        explanationBox.innerHTML = q.explanation;
        explanationBox.style.display = 'block';
        
        // Scroll suave até a explicação
        setTimeout(() => {
            explanationBox.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest'
            });
        }, 400);
    }
    
    if (nextQuestionBtn) nextQuestionBtn.style.display = 'inline-block';
}

function nextQuizQuestion() {
    quizIndex++;
    // Usar selectedQuestions
    if (quizIndex < selectedQuestions.length) {
        renderQuizQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    // Usar selectedQuestions em vez de categoryData
    const totalQuestions = selectedQuestions.length;
    
    // Salvar estatísticas APENAS no Supabase (não mais no localStorage)
    (async () => {
        try {
            if (window.SB && window.SB.isReady()) {
                await window.SB.addStat({ category: currentCategory, score: quizScore, total: totalQuestions });
                console.log('✅ Estatística salva no Supabase');
            } else {
                console.warn('⚠️ Supabase não configurado - estatística não foi salva');
            }
        } catch (e) {
            console.error('❌ Não foi possível salvar no Supabase:', e?.message || e);
        }
    })();
    updateQuickStats();
    
    // Feedback final
    const percentScore = Math.round((quizScore / totalQuestions) * 100);
    showMessage(`Quiz finalizado! Pontuação: ${quizScore}/${totalQuestions} (${percentScore}%)`, '#388e3c');
    
    // Resetar estado do quiz
    quizIndex = 0;
    quizScore = 0;
    currentCategory = '';
    selectedQuestions = [];
    questionQuantity = 0;
    isQuizActive = false;
    
    showOnly(menuContainer);
}

function updateProgress() {
    // Usar selectedQuestions
    const total = selectedQuestions.length;
    const current = quizIndex + 1;
    const percentage = Math.round((current / total) * 100);
    
    if (progressFill) progressFill.style.width = percentage + '%';
    if (progressPercentage) progressPercentage.textContent = percentage + '%';
}

// Modal de Imagem
function openImageModal() {
    if (quizImage && quizImage.src) {
        if (modalImage) modalImage.src = quizImage.src;
        if (imageModal) {
            imageModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
}

function closeImageModal() {
    if (imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Modal de Aviso
function showWarningModal(title, message) {
    if (warningModal) {
        const titleElement = warningModal.querySelector('h3');
        if (titleElement) titleElement.textContent = title;
        if (warningMessage) warningMessage.textContent = message;
        warningModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeWarningModal() {
    if (warningModal) {
        warningModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Utilitários de navegação
function showOnly(container) {
    [homeContainer, loginContainer, registerContainer, forgotPasswordContainer, resetPasswordContainer, menuContainer, categoryContainer, typeContainer, quantityContainer, quizContainer, statsContainer, adminPanelContainer].forEach(c => {
        if (c) c.style.display = 'none';
    });
    if (container) container.style.display = 'flex';
    messageContainer.textContent = '';
}

// Feedback visual
function showMessage(msg, color = '#388e3c') {
    if (!messageContainer) return;
    messageContainer.textContent = msg;
    messageContainer.style.color = color;
    messageContainer.classList.add('show');
    setTimeout(() => {
        messageContainer.classList.remove('show');
        messageContainer.textContent = '';
    }, 3000);
}

// Feedback sonoro - Som de acerto
function playCorrectSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Sequência alegre: C5 -> E5 -> G5
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.4);
    } catch (error) {
        console.log('Áudio não suportado');
    }
}

// Feedback sonoro - Som de erro
function playIncorrectSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Notas descendentes: F4 -> C4
        oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(261.63, audioContext.currentTime + 0.15);
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Áudio não suportado');
    }
}

// Simulação de "banco de dados" local
function saveUser(user) {
    localStorage.setItem('anatomia_user', JSON.stringify(user));
}

function loadUser() {
    const u = localStorage.getItem('anatomia_user');
    return u ? JSON.parse(u) : null;
}

function saveStats(stats) {
    localStorage.setItem('anatomia_stats', JSON.stringify(stats));
}

function loadStats() {
    const s = localStorage.getItem('anatomia_stats');
    return s ? JSON.parse(s) : {};
}

// Função de logout
function logout() {
    currentUser = null;
    localStorage.removeItem('anatomia_user');
    showOnly(homeContainer);
    if (logoutBtn) logoutBtn.style.display = 'none';
    showMessage('Logout realizado com sucesso!');
}

// Funções de visibilidade e acesso ao painel admin
function isAdminUser() {
    return currentUser && currentUser.email && currentUser.email.toLowerCase() === ADMIN_EMAIL;
}

function updateAdminMenuVisibility() {
    if (adminPanelBtn) {
        adminPanelBtn.style.display = isAdminUser() ? '' : 'none';
    }
}

function renderAdminPanel() {
    const el = document.getElementById('adminPanelContent');
    if (!isAdminUser()) {
        el.innerHTML = '<p style="color:#d32f2f">Acesso restrito ao administrador.</p>';
        return;
    }
    el.innerHTML = '<p>Bem-vindo ao painel admin! (CRUD em breve)</p>';
}

// Após login/logout, atualizar visibilidade do menu admin
function afterAuthUpdate() {
    updateAdminMenuVisibility();
    // ...outros updates se necessário
}

// Chamar afterAuthUpdate nos pontos de login/logout/cadastro
// ...existing code...
if (loginForm) {
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Requer Supabase configurado para autenticar (evitar "login local" indevido)
        if (!(window.SB && window.SB.isReady())) {
            showMessage('Configure o Supabase nas Configurações para fazer login.', '#d32f2f');
            return;
        }
        try {
            const { user } = await window.SB.login(email, password);
            const name = (user?.user_metadata?.name) || email.split('@')[0];
            currentUser = { email: user.email, name };
            saveUser(currentUser);
            updateGreeting();
            showMessage('Login realizado com sucesso!');
            showOnly(menuContainer);
            if (logoutBtn) logoutBtn.style.display = 'inline-block';
            afterAuthUpdate();
        } catch (err) {
            console.error('Falha no login:', err);
            showMessage('Falha no login: ' + (err.message || 'verifique suas credenciais'), '#d32f2f');
        }
    };
}

if (registerForm) {
    registerForm.onsubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Requer Supabase configurado para cadastro (evitar criar usuário "local")
        if (!(window.SB && window.SB.isReady())) {
            showMessage('Configure o Supabase nas Configurações para cadastrar.', '#d32f2f');
            return;
        }
        try {
            await window.SB.register(email, password, name);
            // Dependendo da configuração, pode exigir confirmação por e-mail antes de existir sessão
            const user = await (window.SB.getUser?.());
            if (user && user.email) {
                const finalName = name || email.split('@')[0];
                currentUser = { email: user.email, name: finalName };
                saveUser(currentUser);
                updateGreeting();
                showMessage('Cadastro realizado com sucesso!');
                showOnly(menuContainer);
                if (logoutBtn) logoutBtn.style.display = 'inline-block';
            } else {
                showMessage('Cadastro realizado! Verifique seu e-mail para confirmar e depois faça login.', '#1976d2');
                showOnly(loginContainer);
            }
            afterAuthUpdate();
        } catch (err) {
            console.error('Falha no cadastro:', err);
            showMessage('Falha no cadastro: ' + (err.message || 'tente novamente'), '#d32f2f');
        }
    };
}

// Formulário de recuperação de senha
if (forgotPasswordForm) {
    forgotPasswordForm.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('forgotEmail').value;

        if (!(window.SB && window.SB.isReady())) {
            showMessage('Configure o Supabase nas Configurações.', '#d32f2f');
            return;
        }
        try {
            await window.SB.sendPasswordReset(email);
            showMessage('E-mail de recuperação enviado! Verifique sua caixa de entrada.', '#388e3c');
            setTimeout(() => {
                showOnly(loginContainer);
            }, 3000);
        } catch (err) {
            console.error('Falha ao enviar e-mail:', err);
            showMessage('Erro: ' + (err.message || 'tente novamente'), '#d32f2f');
        }
    };
}

// Formulário de nova senha
if (resetPasswordForm) {
    resetPasswordForm.onsubmit = async (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            showMessage('As senhas não coincidem.', '#d32f2f');
            return;
        }

        if (!(window.SB && window.SB.isReady())) {
            showMessage('Configure o Supabase nas Configurações.', '#d32f2f');
            return;
        }
        try {
            await window.SB.updatePassword(newPassword);
            showMessage('Senha alterada com sucesso!', '#388e3c');
            setTimeout(() => {
                showOnly(loginContainer);
            }, 2000);
        } catch (err) {
            console.error('Falha ao alterar senha:', err);
            showMessage('Erro: ' + (err.message || 'tente novamente'), '#d32f2f');
        }
    };
}

// Header/nav
if (homeBtn) homeBtn.onclick = () => { showOnly(homeContainer); };
if (statsBtn) statsBtn.onclick = () => { renderStats(); showOnly(statsContainer); };
if (logoutBtn) logoutBtn.onclick = async () => { try { if (window.SB && window.SB.isReady()) { await window.SB.logout(); } } catch(_){} logout(); afterAuthUpdate(); };

// Home
if (startBtn) startBtn.onclick = () => {
    if (currentUser) {
        showOnly(menuContainer);
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        showOnly(loginContainer);
        showMessage('Por favor, faça login para continuar', '#1976d2');
    }
};
if (loginShowBtn) loginShowBtn.onclick = () => { showOnly(loginContainer); };
if (registerShowBtn) registerShowBtn.onclick = () => { showOnly(registerContainer); };
if (toRegisterBtn) toRegisterBtn.onclick = () => { showOnly(registerContainer); };
if (toLoginBtn) toLoginBtn.onclick = () => { showOnly(loginContainer); };
if (toForgotPasswordBtn) toForgotPasswordBtn.onclick = () => { showOnly(forgotPasswordContainer); };
if (backToLoginBtn) backToLoginBtn.onclick = () => { showOnly(loginContainer); };
if (backHomeFromLogin) backHomeFromLogin.onclick = () => { showOnly(homeContainer); };
if (backHomeFromRegister) backHomeFromRegister.onclick = () => { showOnly(homeContainer); };

// Menu
if (quizMenuBtn) quizMenuBtn.onclick = () => { updateCategoryCounts(); showOnly(categoryContainer); };
if (statsMenuBtn) statsMenuBtn.onclick = () => { renderStats(); showOnly(statsContainer); };
if (settingsMenuBtn) settingsMenuBtn.onclick = () => { 
    openSettingsModal(); 
};
if (logoutMenuBtn) logoutMenuBtn.onclick = () => { logout(); };

// Configurações Modal
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) {
        // Carregar configurações salvas
        loadSettings();
        modal.style.display = 'block';
    }
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) {
        // Reverter visual para as configurações salvas caso o usuário tenha apenas pré-visualizado
        try { loadSettings(); } catch (e) {}
        modal.style.display = 'none';
    }
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('quizSettings')) || {
        theme: 'light',
        fontSize: 'medium',
        autoExplanation: false,
        soundEffects: false
    };
    
    document.getElementById('themeSelect').value = settings.theme;
    document.getElementById('fontSizeSelect').value = settings.fontSize;
    document.getElementById('autoExplanation').checked = settings.autoExplanation;
    document.getElementById('soundEffects').checked = settings.soundEffects;
    
    applyTheme(settings.theme);
    applyFontSize(settings.fontSize);
}

function saveSettings() {
    const settings = {
        theme: document.getElementById('themeSelect').value,
        fontSize: document.getElementById('fontSizeSelect').value,
        autoExplanation: document.getElementById('autoExplanation').checked,
        soundEffects: document.getElementById('soundEffects').checked
    };
    
    localStorage.setItem('quizSettings', JSON.stringify(settings));
    applyTheme(settings.theme);
    applyFontSize(settings.fontSize);
    
    showMessage('✓ Configurações salvas com sucesso!', '#43a047');
    closeSettingsModal();
}

function applyTheme(theme) {
    const root = document.documentElement;
    const body = document.body;
    
    // Adiciona classe theme-override para sobrescrever preferência do sistema
    body.classList.add('theme-override');
    root.classList.add('theme-override');
    
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        root.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        root.classList.remove('dark-theme');
    }
}

function applyFontSize(size) {
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add('font-' + size);
}

function resetProgress() {
    if (confirm('Tem certeza que deseja resetar todo o seu progresso? Esta ação não pode ser desfeita.')) {
        if (currentUser) {
            const stats = loadStats();
            stats[currentUser.email] = [];
            localStorage.setItem('userStats', JSON.stringify(stats));
            updateQuickStats();
            showMessage('🔄 Progresso resetado com sucesso!', '#d32f2f');
            closeSettingsModal();
        }
    }
}

// Event listeners para configurações
document.getElementById('closeSettingsModal')?.addEventListener('click', closeSettingsModal);
document.getElementById('settingsOverlay')?.addEventListener('click', closeSettingsModal);
document.getElementById('confirmSettingsBtn')?.addEventListener('click', saveSettings);
document.getElementById('resetProgressBtn')?.addEventListener('click', resetProgress);
document.getElementById('reviewTutorialBtn')?.addEventListener('click', () => {
    closeSettingsModal();
    localStorage.removeItem('tutorialCompleted');
    setTimeout(() => {
        if (window.startTutorialManually) {
            window.startTutorialManually();
        }
    }, 300);
});

// Pré-visualização imediata (não persiste até confirmar)
document.getElementById('themeSelect')?.addEventListener('change', (e) => {
    const value = e.target?.value || 'light';
    applyTheme(value);
});

document.getElementById('fontSizeSelect')?.addEventListener('change', (e) => {
    const value = e.target?.value || 'medium';
    applyFontSize(value);
});

// Categorias
if (superioresBtn) superioresBtn.onclick = () => { selectCategory('superiores'); };
if (inferioresBtn) inferioresBtn.onclick = () => { selectCategory('inferiores'); };
if (coracaoBtn) coracaoBtn.onclick = () => { selectCategory('coracao'); };
// mediastinoBtn removido: usar categoria 'coracao' com teóricas
if (backToMenuBtn) backToMenuBtn.onclick = () => { showOnly(menuContainer); };
if (backToCategoryBtn) backToCategoryBtn.onclick = () => { showOnly(typeContainer); };
if (backToCategoryFromTypeBtn) backToCategoryFromTypeBtn.onclick = () => { showOnly(categoryContainer); };

// Tipo de questão (imagem ou teórica)
if (imagemBtn) {
    console.log('[DEBUG] imagemBtn encontrado e event listener adicionado');
    imagemBtn.onclick = () => { 
        console.log('[DEBUG] imagemBtn clicado!');
        selectType('imagem'); 
    };
}
if (teoricaBtn) {
    console.log('[DEBUG] teoricaBtn encontrado e event listener adicionado');
    teoricaBtn.onclick = () => { 
        console.log('[DEBUG] teoricaBtn clicado!');
        selectType('teorica'); 
    };
}

// Quantity selection
document.querySelectorAll('.quantity-card').forEach(card => {
    card.addEventListener('click', function() {
        const quantity = this.getAttribute('data-quantity');
        if (quantity === 'all') {
            selectQuantity('all');
        } else {
            selectQuantity(parseInt(quantity));
        }
    });
});

// Funções de atualização da UI
function updateGreeting() {
    if (currentUser && userGreeting) {
        userGreeting.textContent = 'Olá, ' + currentUser.name + '!';
        updateQuickStats();
    }
}

function updateQuickStats() {
    if (!currentUser) return;
    
    // Quick stats agora também vêm do Supabase
    (async () => {
        try {
            if (window.SB && window.SB.isReady()) {
                const rows = await window.SB.listStats();
                
                if (totalAttempts) totalAttempts.textContent = rows.length;
                
                if (bestScore) {
                    // Melhor porcentagem de acerto
                    const bestPercent = rows.length > 0 ? 
                        Math.max(...rows.map(r => Math.round((r.score / r.total) * 100))) : 0;
                    bestScore.textContent = bestPercent + '%';
                }
                
                if (avgScore) {
                    // Média de porcentagem de acerto
                    if (rows.length > 0) {
                        const totalPercent = rows.reduce((sum, r) => sum + ((r.score / r.total) * 100), 0);
                        const avgPercent = Math.round(totalPercent / rows.length);
                        avgScore.textContent = avgPercent + '%';
                    } else {
                        avgScore.textContent = '0%';
                    }
                }
            } else {
                // Se Supabase não estiver pronto, zera os stats
                if (totalAttempts) totalAttempts.textContent = 0;
                if (bestScore) bestScore.textContent = '0%';
                if (avgScore) avgScore.textContent = '0%';
            }
        } catch (e) {
            console.error('Erro ao atualizar quick stats:', e);
        }
    })();
}

// Funções auxiliares faltantes (implementações leves para evitar ReferenceError)
function setupMobileOptimizations() {
    // Placeholder: ajustes simples para dispositivos móveis
    if (isMobile) {
        document.documentElement.classList.add('is-mobile');
    }
}

function setupMobileAccessibility() {
    // Placeholder: configurações de acessibilidade simples
    if (isTouchDevice) {
        document.body.setAttribute('data-touch', 'true');
    }
}

function setupMobilePerformance() {
    // Placeholder: otimizações de desempenho leves
    // (ex: reduzir animações em dispositivos lentos) - sem efeito por enquanto
}

function optimizeImageLoading() {
    // Placeholder: garantir que imagens tenham loading=lazy onde aplicável
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    });
}

function handleOrientationChange() {
    // Ajustes mínimos ao mudar orientação/tamanho
    // Atualmente apenas atualiza uma classe para CSS responsivo, se necessário
    if (window.innerWidth <= 768) document.documentElement.classList.add('portrait-mode');
    else document.documentElement.classList.remove('portrait-mode');
}

function setupEventListeners() {
    // Registrar listeners que o app utiliza (ex: nextQuestionBtn, backMenuBtn)
    if (nextQuestionBtn) nextQuestionBtn.onclick = nextQuizQuestion;
    if (backMenuBtn) backMenuBtn.onclick = () => { showOnly(menuContainer); };
    if (backStatsBtn) backStatsBtn.onclick = () => { showOnly(menuContainer); };
    if (statsCategoryFilter) statsCategoryFilter.onchange = () => renderStats();
    if (statsTimeFilter) statsTimeFilter.onchange = () => renderStats();
}

function renderStats() {
    (async () => {
        if (!currentUser) {
            if (statsContent) statsContent.innerHTML = '<p>Faça login para ver suas estatísticas.</p>';
            if (evolutionChart) { evolutionChart.destroy(); evolutionChart = null; }
            return;
        }

        // Verificar dependência do Chart.js
        if (typeof Chart === 'undefined') {
            if (statsContent) statsContent.innerHTML = '<p>Biblioteca de gráficos não carregada.</p>';
            return;
        }

        try {
            let rows = [];
            if (window.SB && window.SB.isReady()) {
                rows = await window.SB.listStats();
            }
            if (!rows || rows.length === 0) {
                if (statsContent) statsContent.innerHTML = '<p>Nenhuma estatística registrada ainda. Faça um quiz para ver seu progresso aqui.</p>';
                if (evolutionChart) { evolutionChart.destroy(); evolutionChart = null; }
                return;
            }

            // Aplicar filtro por categoria
            const filter = (statsCategoryFilter && statsCategoryFilter.value) || 'all';
            const filtered = rows.filter(r => filter === 'all' ? true : r.category === filter);

            // Aplicar filtro por tempo
            const timeFilter = (statsTimeFilter && statsTimeFilter.value) || 'all';
            let timeFiltered = filtered;
            if (timeFilter !== 'all') {
                const days = parseInt(timeFilter);
                const cutoffDate = new Date();
                cutoffDate.setDate(cutoffDate.getDate() - days);
                timeFiltered = filtered.filter(r => new Date(r.created_at) >= cutoffDate);
            }

            // Verificar se há dados após filtros
            if (timeFiltered.length === 0) {
                if (statsContent) statsContent.innerHTML = '<p>Nenhum dado encontrado para os filtros selecionados.</p>';
                if (evolutionChart) { evolutionChart.destroy(); evolutionChart = null; }
                return;
            }

            // Ordenar por data ascendente
            timeFiltered.sort((a,b) => new Date(a.created_at) - new Date(b.created_at));

            // Preparar dados
            const labels = timeFiltered.map(r => new Date(r.created_at)).map(d => {
                const dt = new Date(d);
                return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
            });
            const dataPct = timeFiltered.map(r => Math.round((r.score / r.total) * 100));

            // Calcular média móvel simples (opcional)
            const movingAvg = dataPct.map((_, i, arr) => {
                const start = Math.max(0, i - 2);
                const slice = arr.slice(start, i + 1);
                return Math.round(slice.reduce((s, v) => s + v, 0) / slice.length);
            });

            // Atualizar sumário em HTML
            const attempts = timeFiltered.length;
            const best = Math.max(...dataPct);
            const avg = Math.round(dataPct.reduce((s,v)=>s+v,0)/dataPct.length);
            const summary = `<div class="stats-summary">
                <div class="stat-chip">Tentativas: <strong>${attempts}</strong></div>
                <div class="stat-chip">Melhor: <strong>${best}%</strong></div>
                <div class="stat-chip">Média: <strong>${avg}%</strong></div>
            </div>`;
            if (statsContent) statsContent.innerHTML = summary;

            // Renderizar gráfico
            const ctx = evolutionCanvas?.getContext('2d');
            if (!ctx) return;
            if (evolutionChart) { evolutionChart.destroy(); }
            evolutionChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Acertos (%)',
                            data: dataPct,
                            borderColor: '#667eea',
                            backgroundColor: 'rgba(102, 126, 234, 0.15)',
                            tension: 0.3,
                            pointRadius: 3,
                            fill: true
                        },
                        {
                            label: 'Média móvel',
                            data: movingAvg,
                            borderColor: '#764ba2',
                            backgroundColor: 'transparent',
                            tension: 0.3,
                            pointRadius: 0,
                            borderDash: [6,4]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: true },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%`
                            }
                        }
                    },
                    scales: {
                        y: { min: 0, max: 100, ticks: { callback: (v)=> v + '%' } }
                    }
                }
            });
        } catch (e) {
            console.error('Falha ao carregar estatísticas:', e?.message || e);
            if (statsContent) statsContent.innerHTML = '<p>Erro ao carregar estatísticas. Tente novamente mais tarde.</p>';
        }
    })();
}

// Atualiza dinamicamente o número de perguntas por categoria no card
function updateCategoryCounts() {
    if (typeof quizData === 'undefined') return;
    const format = (n) => `${n} ${n === 1 ? 'pergunta' : 'perguntas'}`;
    const supCard = document.getElementById('superioresBtn');
    const infCard = document.getElementById('inferioresBtn');
    const coracaoCard = document.getElementById('coracaoBtn');
    // sem card de mediastino separado
    
    if (supCard) {
        const stat = supCard.querySelector('.category-stats .stat');
        if (stat) {
            const count = (quizData.superiores || []).filter(q => !q.disabled).length;
            stat.textContent = format(count);
        }
    }
    if (infCard) {
        const stat = infCard.querySelector('.category-stats .stat');
        if (stat) {
            const count = (quizData.inferiores || []).filter(q => !q.disabled).length;
            stat.textContent = format(count);
        }
    }
    if (coracaoCard) {
        const stat = coracaoCard.querySelector('.category-stats .stat');
        if (stat) {
            const count = (quizData.coracao || []).filter(q => !q.disabled).length;
            stat.textContent = format(count);
        }
    }
    // nenhuma atualização para mediastino (conteúdo integrado ao coração)
}

// Inicialização
(function init() {
    // Configurar otimizações mobile
    setupMobileOptimizations();
    setupMobileAccessibility();
    setupMobilePerformance();
    optimizeImageLoading();
    
    // Adicionar feedback háptico
    addHapticFeedback();
    
    // Carregar configurações salvas
    loadSettings();
    
    // Detectar mudanças de orientação
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
    
    // Verificar se há token de reset de senha na URL
    // Supabase usa hash fragments (#) para tokens de autenticação
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(window.location.search);
    
    // Detectar diversos formatos de reset token
    const hasAccessToken = hash.includes('access_token');
    const hasType = hash.includes('type=recovery') || hash.includes('type=signup');
    const isPasswordReset = urlParams.get('reset') === 'true' || (hasAccessToken && hash.includes('type=recovery'));
    
    if (isPasswordReset || hasAccessToken) {
        // Usuário clicou no link de recuperação, mostrar tela de nova senha
        showOnly(resetPasswordContainer);
        showMessage('Digite sua nova senha abaixo.', '#1976d2');
        // Limpar o parâmetro da URL mas manter o hash para o Supabase processar
        if (urlParams.get('reset')) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
        }
        return;
    }
    
    // Carregar usuário salvo
    currentUser = loadUser();
    if (currentUser) {
        updateGreeting();
        updateQuickStats();
        showOnly(menuContainer);
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
    } else {
        showOnly(homeContainer);
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
    
    // Event listeners
    setupEventListeners();
    
    // Atualizar contadores de perguntas nos cards já na inicialização
    try { updateCategoryCounts(); } catch (e) { /* ignora se quizData ainda não carregou */ }
    
    // Configurar modal de imagem
    if (quizImage) {
        quizImage.addEventListener('click', openImageModal);
    }
    if (closeModal) {
        closeModal.addEventListener('click', closeImageModal);
    }
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }
    
    // Event listeners para modal de aviso
    if (closeWarningBtn) {
        closeWarningBtn.addEventListener('click', closeWarningModal);
    }
    if (warningModal) {
        warningModal.addEventListener('click', (e) => {
            if (e.target === warningModal) {
                closeWarningModal();
            }
        });
    }
    
    // Configurar gestos touch para modal
    if (imageModal && isMobile) {
        imageModal.addEventListener('touchstart', (e) => {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }
    
    // ========================================
    // TUTORIAL INTERATIVO
    // ========================================
    setupTutorial();
})();

// ========================================
// SISTEMA DE TUTORIAL INTERATIVO
// ========================================

function setupTutorial() {
    // Elementos do tutorial
    const tutorialModal = document.getElementById('tutorialModal');
    const tutorialIcon = document.getElementById('tutorialIcon');
    const tutorialTitle = document.getElementById('tutorialTitle');
    const tutorialDescription = document.getElementById('tutorialDescription');
    const tutorialStepIndicator = document.getElementById('tutorialStepIndicator');
    const tutorialNextBtn = document.getElementById('tutorialNextBtn');
    const tutorialPrevBtn = document.getElementById('tutorialPrevBtn');
    const tutorialSkipBtn = document.getElementById('tutorialSkipBtn');
    const tutorialDots = document.querySelectorAll('.tutorial-dots .dot');
    
    // Verificar se já completou o tutorial
    const hasCompletedTutorial = localStorage.getItem('tutorialCompleted') === 'true';
    
    // Passos do tutorial
    const tutorialSteps = [
        {
            icon: '👋',
            title: 'Bem-vindo ao Anatomia Online!',
            description: 'Vamos fazer um tour rápido para você conhecer o aplicativo. Este tutorial levará apenas 1 minuto!'
        },
        {
            icon: '📚',
            title: 'Escolha uma Categoria',
            description: 'Selecione entre Membros Superiores, Membros Inferiores ou Coração. Cada categoria contém questões específicas sobre anatomia.',
            highlight: '.category-card'
        },
        {
            icon: '🎯',
            title: 'Defina a Quantidade',
            description: 'Escolha quantas questões deseja responder: 5, 10, 20, 30 ou todas disponíveis. Perfeito para estudos rápidos ou revisão completa!',
            highlight: '.quantity-card'
        },
        {
            icon: '✅',
            title: 'Responda as Questões',
            description: 'Leia cada questão com atenção e selecione a resposta correta. Você receberá feedback imediato e explicações detalhadas!',
            highlight: '#quizOptions'
        },
        {
            icon: '📊',
            title: 'Acompanhe seu Progresso',
            description: 'Veja suas estatísticas, média de acertos e evolução ao longo do tempo. Pronto para começar? Boa sorte! 🚀'
        }
    ];
    
    let currentTutorialStep = 0;
    
    // Função para mostrar o tutorial
    function showTutorial() {
        if (!tutorialModal) return;
        
        currentTutorialStep = 0;
        tutorialModal.style.display = 'flex';
        
        // Vibração de início
        vibrate(vibrationPatterns.tap);
        
        updateTutorialStep();
    }
    
    // Função para atualizar o passo do tutorial
    function updateTutorialStep() {
        const step = tutorialSteps[currentTutorialStep];
        
        if (tutorialIcon) tutorialIcon.textContent = step.icon;
        if (tutorialTitle) tutorialTitle.textContent = step.title;
        if (tutorialDescription) tutorialDescription.textContent = step.description;
        if (tutorialStepIndicator) tutorialStepIndicator.textContent = `${currentTutorialStep + 1} / ${tutorialSteps.length}`;
        
        // Atualizar dots
        tutorialDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTutorialStep);
        });
        
        // Mostrar/ocultar botão anterior
        if (tutorialPrevBtn) {
            tutorialPrevBtn.style.display = currentTutorialStep === 0 ? 'none' : 'inline-block';
        }
        
        // Mudar texto do botão próximo no último passo
        if (tutorialNextBtn) {
            tutorialNextBtn.textContent = currentTutorialStep === tutorialSteps.length - 1 ? 'Finalizar! 🎉' : 'Próximo →';
        }
        
        // Remover highlight anterior
        document.querySelectorAll('.tutorial-highlight-active').forEach(el => {
            el.classList.remove('tutorial-highlight-active');
        });
        
        // Adicionar highlight ao elemento atual
        if (step.highlight) {
            const element = document.querySelector(step.highlight);
            if (element) {
                element.classList.add('tutorial-highlight-active');
                // Scroll suave até o elemento
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
    
    // Próximo passo
    function nextTutorialStep() {
        vibrate(vibrationPatterns.tap);
        
        if (currentTutorialStep < tutorialSteps.length - 1) {
            currentTutorialStep++;
            updateTutorialStep();
        } else {
            finishTutorial();
        }
    }
    
    // Passo anterior
    function prevTutorialStep() {
        vibrate(vibrationPatterns.tap);
        
        if (currentTutorialStep > 0) {
            currentTutorialStep--;
            updateTutorialStep();
        }
    }
    
    // Pular tutorial
    function skipTutorial() {
        vibrate(vibrationPatterns.tap);
        finishTutorial();
    }
    
    // Finalizar tutorial
    function finishTutorial() {
        vibrate(vibrationPatterns.success);
        
        if (tutorialModal) {
            tutorialModal.style.display = 'none';
        }
        
        // Remover todos os highlights
        document.querySelectorAll('.tutorial-highlight-active').forEach(el => {
            el.classList.remove('tutorial-highlight-active');
        });
        
        // Marcar como completado
        localStorage.setItem('tutorialCompleted', 'true');
        
        // Mostrar mensagem de conclusão
        showMessage('🎉 Tutorial concluído! Boa sorte nos seus estudos!', '#4caf50');
    }
    
    // Event listeners do tutorial
    if (tutorialNextBtn) {
        tutorialNextBtn.addEventListener('click', nextTutorialStep);
    }
    
    if (tutorialPrevBtn) {
        tutorialPrevBtn.addEventListener('click', prevTutorialStep);
    }
    
    if (tutorialSkipBtn) {
        tutorialSkipBtn.addEventListener('click', skipTutorial);
    }
    
    // Navegação pelos dots
    tutorialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            vibrate(vibrationPatterns.tap);
            currentTutorialStep = index;
            updateTutorialStep();
        });
    });
    
    // Mostrar tutorial na primeira vez que o usuário acessa o menu
    if (!hasCompletedTutorial && menuContainer) {
        // Observar quando o menu for exibido
        const menuObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.target === menuContainer && 
                    menuContainer.style.display !== 'none' &&
                    !localStorage.getItem('tutorialCompleted')) {
                    setTimeout(() => {
                        showTutorial();
                    }, 500); // Pequeno delay para melhor experiência
                    menuObserver.disconnect();
                }
            });
        });
        
        menuObserver.observe(menuContainer, {
            attributes: true,
            attributeFilter: ['style']
        });
    }
    
    // Função global para reiniciar tutorial
    window.resetTutorial = function() {
        localStorage.removeItem('tutorialCompleted');
        showMessage('Tutorial resetado! Faça login novamente para vê-lo.', '#1976d2');
    };
    
    // Função global para iniciar tutorial manualmente
    window.startTutorialManually = function() {
        showTutorial();
    };
}