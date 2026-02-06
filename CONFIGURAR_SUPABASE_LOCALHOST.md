# Configurar Supabase para Localhost

Para que a recuperação de senha funcione no localhost, você precisa adicionar a URL do localhost nas configurações do Supabase:

## Passo a Passo:

### 1. Acesse o Dashboard do Supabase
- Vá para: https://supabase.com/dashboard
- Selecione seu projeto

### 2. Configure os Redirect URLs
1. No menu lateral, clique em **Authentication**
2. Clique em **URL Configuration**
3. Na seção **Redirect URLs**, adicione:
   ```
   http://localhost:5500
   http://localhost:5500/
   http://localhost:3000
   http://localhost:3000/
   http://127.0.0.1:5500
   http://127.0.0.1:5500/
   ```
   (Adicione a porta que você está usando no Live Server ou servidor local)

### 3. Configure o Site URL
- Na mesma página, em **Site URL**, coloque:
  - Para desenvolvimento: `http://localhost:5500`
  - Para produção: sua URL real quando hospedar

### 4. Salve as Alterações
- Clique em **Save** no final da página

## Testando a Recuperação de Senha:

### Opção 1: Testar localmente
1. Execute o app no Live Server (VS Code)
2. Faça logout se estiver logado
3. Clique em "Esqueceu sua senha?"
4. Digite seu e-mail
5. Verifique sua caixa de entrada
6. Clique no link do e-mail
7. Você será redirecionado para `http://localhost:PORTA/#access_token=...&type=recovery`
8. A tela de "Nova Senha" deve aparecer automaticamente
9. Digite a nova senha e confirme

### Opção 2: Testar em produção
Se você já hospedou o app (Netlify, Vercel, GitHub Pages):
1. Configure o Site URL com sua URL de produção
2. Adicione a URL de produção nos Redirect URLs
3. Teste o fluxo completo

## Verificando se funcionou:

✅ **Sinais de sucesso:**
- E-mail recebido com link de recuperação
- Link redireciona para seu app
- Tela "Nova Senha" aparece automaticamente
- Senha é alterada com sucesso

❌ **Problemas comuns:**
- **"Invalid redirect URL"**: Adicione sua URL nos Redirect URLs do Supabase
- **Link não funciona**: Verifique se o Site URL está correto
- **Tela não aparece**: Limpe o cache do navegador (Ctrl+Shift+R)

## Dica Extra:

Para desenvolvimento, você pode desabilitar a confirmação de e-mail:
1. Vá em **Authentication > Providers**
2. Clique em **Email**
3. Desmarque **"Enable email confirmations"**
4. Isso permite registrar sem confirmar e-mail (apenas para dev!)

## URLs Importantes:

- Dashboard: https://supabase.com/dashboard/project/nromzokjnzzuwhalulut
- Configuração Auth: https://supabase.com/dashboard/project/nromzokjnzzuwhalulut/auth/url-configuration
