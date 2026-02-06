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
  }
};
