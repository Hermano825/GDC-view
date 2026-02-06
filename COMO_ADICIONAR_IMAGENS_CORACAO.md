# 🫀 Como Adicionar Imagens da Categoria Coração

## ✅ Estrutura Criada

A categoria **Coração** já está completamente integrada ao sistema:

- ✅ 10 questões criadas em `js/quiz_data.js`
- ✅ Card de "Coração" adicionado no menu de categorias
- ✅ Event listeners configurados
- ✅ Filtros de estatísticas atualizados
- ✅ Tutorial atualizado

## 📁 Estrutura de Arquivos

```
imagens/
└── Coração/
    ├── image1.png   → Átrio Direito
    ├── image2.png   → Ventrículo Esquerdo
    ├── image3.png   → Válvula Mitral
    ├── image4.png   → Artéria Coronária Esquerda
    ├── image5.png   → Septo Interventricular
    ├── image6.png   → Nó Sinoatrial (SA)
    ├── image7.png   → Pericárdio Seroso Visceral (Epicárdio)
    ├── image8.png   → Válvula Aórtica
    ├── image9.png   → Músculo Papilar
    └── image10.png  → Artéria Descendente Anterior
```

## 🎯 Passos para Adicionar Imagens

### 1. Prepare as Imagens

- **Formato recomendado:** PNG ou JPG
- **Resolução:** 800x600px a 1200x900px (boa qualidade sem arquivo muito grande)
- **Tamanho do arquivo:** Idealmente < 500KB por imagem
- **Conteúdo:** Cada imagem deve destacar claramente a estrutura cardíaca correspondente

### 2. Nomeie as Imagens

Renomeie seus arquivos exatamente como:
- `image1.png` → `image10.png`

**Importante:** Os números devem corresponder às questões:

| Arquivo | Estrutura | Dificuldade |
|---------|-----------|-------------|
| image1.png | Átrio Direito | Fácil |
| image2.png | Ventrículo Esquerdo | Fácil |
| image3.png | Válvula Mitral | Médio |
| image4.png | Artéria Coronária Esquerda | Médio |
| image5.png | Septo Interventricular | Médio |
| image6.png | Nó Sinoatrial (SA) | Difícil |
| image7.png | Pericárdio Seroso Visceral | Médio |
| image8.png | Válvula Aórtica | Fácil |
| image9.png | Músculo Papilar | Médio |
| image10.png | Artéria Descendente Anterior | Médio |

### 3. Cole na Pasta

Copie todas as imagens para:
```
c:\Users\JoseH\OneDrive\Desktop\GDC\imagens\Coração\
```

### 4. Teste o Quiz

1. Abra `index.html` no navegador
2. Faça login
3. Clique em "Iniciar Quiz"
4. Selecione "Coração"
5. Escolha a quantidade de questões
6. Verifique se todas as imagens carregam corretamente

## 🔧 Personalização das Questões

Se quiser editar as questões, abra `js/quiz_data.js` e localize:

```javascript
// ========================================
// CATEGORIA: CORAÇÃO (NOVA)
// ========================================

quizData.coracao = [
    {
        image: 'imagens/Coração/image1.png',
        question: 'Identifique a estrutura cardíaca apontada na imagem:',
        options: ['Átrio Direito', 'Ventrículo Direito', 'Átrio Esquerdo', 'Ventrículo Esquerdo'],
        answer: 0,  // Índice da resposta correta (0 = primeira opção)
        correctAnswer: 'Átrio Direito',
        explanation: `...`,
        difficulty: 'fácil'  // fácil, médio ou difícil
    },
    // ... mais questões
];
```

### Para Adicionar Mais Questões:

```javascript
{
    image: 'imagens/Coração/image11.png',
    question: 'Identifique a estrutura cardíaca apontada na imagem:',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    answer: 2,  // Índice 2 = terceira opção
    correctAnswer: 'Opção 3',
    explanation: `
<strong>Estrutura:</strong> Nome da estrutura<br>
<strong>Função:</strong> Descrição da função<br>
<strong>Características:</strong> Características importantes<br>
<strong>Comunicação:</strong> Como se conecta a outras estruturas
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Informações clínicas relevantes sobre a estrutura
</p>
</details>
    `,
    difficulty: 'médio'
}
```

## 🎨 Dicas para Boas Imagens Anatômicas

1. **Destaque Claro:** Use setas ou marcações para indicar a estrutura
2. **Contraste:** Estrutura deve se destacar do fundo
3. **Ângulo:** Prefira vistas anatômicas clássicas (anterior, posterior, lateral)
4. **Qualidade:** Imagens nítidas e bem iluminadas
5. **Contexto:** Mostre estruturas vizinhas para orientação espacial

## 📊 Estatísticas

Após adicionar as imagens e testar:
- Os estudantes verão "Coração" no menu com "10 perguntas"
- As estatísticas de desempenho serão salvas por categoria
- O gráfico de evolução mostrará progresso separado para Coração

## ❓ Problemas Comuns

### Imagem não aparece
- ✅ Verifique o nome do arquivo (exatamente `image1.png`, não `Image1.PNG`)
- ✅ Confirme que está na pasta correta (`imagens/Coração/`)
- ✅ Verifique o console do navegador (F12) para erros

### Questão com alternativas erradas
- ✅ Verifique o valor de `answer` (começa do 0)
- ✅ Confirme que `correctAnswer` corresponde a `options[answer]`

### Categoria não aparece
- ✅ Recarregue a página com Ctrl+F5
- ✅ Limpe o cache do navegador
- ✅ Verifique se `quizData.coracao` existe no console

## 🚀 Próximos Passos

Depois de adicionar as imagens de Coração, você pode:

1. **Adicionar mais categorias** (Sistema Nervoso, Sistema Respiratório, etc.)
2. **Expandir Membros Superiores** (remover o aviso "em desenvolvimento")
3. **Criar subcategorias** (Coração: Válvulas, Artérias, Câmaras, etc.)
4. **Adicionar vídeos explicativos** nas explicações

---

**Precisa de ajuda?** Me avise quando adicionar as imagens para testarmos juntos! 🫀✨
