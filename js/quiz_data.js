// Função auxiliar para criar questões rapidamente
function createQuestion(imageNumber, muscle, options, correctIndex, difficulty = 'médio', extraInfo = '') {
    return {
        image: `imagens/membros_inferiores/image${imageNumber}.png`,
        question: `Identifique o músculo apontado na imagem:`,
        options: options,
        answer: correctIndex,
        correctAnswer: options[correctIndex],
        explanation: `
<strong>Músculo:</strong> ${muscle}
${extraInfo}
        `,
        difficulty: difficulty
    };
}

// Dados organizados por região
const quizData = {
    inferiores: [
        // Mapeamento corrigido para as imagens disponíveis
        createQuestion(18, "Obturador Externo",
            ["Obturador Externo", "Adutor Curto", "Adutor Longo", "Reto Femoral"],
            0,
            'fácil',
            `
<strong>Origem:</strong> Margem externa do forame obturado e membrana obturatória<br>
<strong>Inserção:</strong> Fossa trocantérica do fêmur<br>
<strong>Ação:</strong> Rotação lateral da coxa<br>
<strong>Inervação:</strong> Nervo obturador (L3-L4)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Músculo profundo da região glútea; raramente lesionado isoladamente
</p>
</details>
            `
        ),
        createQuestion(19, "Adutor Curto",
            ["Adutor Curto", "Adutor Longo", "Pectíneo", "Obturador Externo"],
            0,
            'médio',
            `
<strong>Origem:</strong> Corpo e ramo inferior do púbis<br>
<strong>Inserção:</strong> Linha áspera do fêmur<br>
<strong>Ação:</strong> Adução da coxa<br>
<strong>Inervação:</strong> Nervo obturador (L2-L4)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Parte do grupo adutor da coxa; lesões podem ocorrer em atividades esportivas
</p>
</details>
            `
        ),
        createQuestion(20, "Adutor Longo",
            ["Adutor Longo", "Adutor Curto", "Pectíneo", "Grácil"],
            0,
            'médio',
            `
<strong>Origem:</strong> Corpo do púbis<br>
<strong>Inserção:</strong> Linha áspera do fêmur<br>
<strong>Ação:</strong> Adução e flexão leve da coxa<br>
<strong>Inervação:</strong> Nervo obturador (L2-L4)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Músculo mais superficial do grupo adutor; frequentemente envolvido em distensões da virilha
</p>
</details>
            `
        ),
        // Novos quizzes da pasta 'novos_quizzes' (randomizados e com explicações)
        // Sartório
        (function () {
            const opts = ['Sartório', 'Grácil', 'Pectíneo', 'Reto Femoral'];
            const correct = 'Sartório';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa1.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Espinha ilíaca ântero-superior<br>
<strong>Inserção:</strong> Face medial da tíbia (pata de ganso)<br>
<strong>Ação:</strong> Flexiona, abduz e rotaciona lateralmente a coxa; flexiona o joelho<br>
<strong>Inervação:</strong> Nervo femoral (L2-L3)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Pode ser envolvido em dor medial do joelho e síndrome da pata de ganso
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Reto Femoral
        (function () {
            const opts = ['Reto Femoral', 'Vasto lateral', 'Vasto medial', 'Vasto intermédio'];
            const correct = 'Reto Femoral';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa2.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Espinha ilíaca ântero-inferior (EIAI)<br>
<strong>Inserção:</strong> Base da patela e tuberosidade da tíbia (via ligamento patelar)<br>
<strong>Ação:</strong> Extensão do joelho e flexão da coxa<br>
<strong>Inervação:</strong> Nervo femoral (L2-L4)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Único músculo do quadríceps que cruza duas articulações (quadril e joelho); comum em lesões de chute e corrida
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Vasto lateral
        (function () {
            const opts = ['Vasto lateral', 'Vasto intermédio', 'Vasto medial', 'Reto Femoral'];
            const correct = 'Vasto lateral';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa3.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Trocânter maior e linha áspera do fêmur<br>
<strong>Inserção:</strong> Base da patela<br>
<strong>Ação:</strong> Extensão do joelho<br>
<strong>Inervação:</strong> Nervo femoral (L2-L4)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Importante para estabilidade lateral do joelho
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Pectíneo
        (function () {
            const opts = ['Pectíneo', 'Adutor longo', 'Adutor curto', 'Grácil'];
            const correct = 'Pectíneo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa4.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Ramo superior do púbis<br>
<strong>Inserção:</strong> Linha pectínea do fêmur<br>
<strong>Ação:</strong> Adução e flexão da coxa<br>
<strong>Inervação:</strong> Nervo femoral e obturador (L2-L3)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Pode ser envolvido em lesões de virilha (pubalgia)
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Tensor da fascia lata
        (function () {
            const opts = ['Tensor da fascia lata', 'Glúteo máximo', 'Glúteo médio', 'Sartório'];
            const correct = 'Tensor da fascia lata';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa5.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Espinha ilíaca ântero-superior e crista ilíaca<br>
<strong>Inserção:</strong> Trato iliotibial<br>
<strong>Ação:</strong> Abdução, flexão e rotação medial da coxa; estabiliza o joelho em extensão<br>
<strong>Inervação:</strong> Nervo glúteo superior (L4-S1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Síndrome do trato iliotibial é comum em corredores de longa distância
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Ilíaco
        (function () {
            const opts = ['Ilíaco', 'Psoas maior', 'Reto Femoral', 'Sartório'];
            const correct = 'Ilíaco';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa6.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Fossa ilíaca<br>
<strong>Inserção:</strong> Trocanter menor do fêmur (junto ao psoas maior)<br>
<strong>Ação:</strong> Flexão da coxa; rotação lateral<br>
<strong>Inervação:</strong> Nervo femoral (L2-L3)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Bursite iliopectínea pode causar dor anterior no quadril
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Psoas maior
        // Psoas maior
        (function () {
            const opts = ['Psoas maior', 'Ilíaco', 'Reto Femoral', 'Sartório'];
            const correct = 'Psoas maior';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa7.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Corpos vertebrais e discos de T12-L5<br>
<strong>Inserção:</strong> Trocanter menor do fêmur<br>
<strong>Ação:</strong> Flexão da coxa e do tronco; rotação lateral da coxa<br>
<strong>Inervação:</strong> Ramos do plexo lombar (L1-L3)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Contratura pode causar lordose lombar e dor lombar baixa
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Adutor magno
        // Adutor magno
        (function () {
            const opts = ['Adutor magno', 'Adutor longo', 'Adutor curto', 'Grácil'];
            const correct = 'Adutor magno';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa8.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Ramo inferior do púbis e tuberosidade isquiática<br>
<strong>Inserção:</strong> Linha áspera e tubérculo adutor do fêmur<br>
<strong>Ação:</strong> Adução da coxa; parte anterior flexiona, parte posterior estende<br>
<strong>Inervação:</strong> Nervo obturador e nervo tibial (L2-L4)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesões causam dor medial na coxa; comum em atletas
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Grácil
        (function () {
            const opts = ['Grácil', 'Adutor longo', 'Adutor magno', 'Pectíneo'];
            const correct = 'Grácil';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa9.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Ramo inferior do púbis<br>
<strong>Inserção:</strong> Face medial da tíbia (pata de ganso)<br>
<strong>Ação:</strong> Adução da coxa; flexão e rotação medial da perna<br>
<strong>Inervação:</strong> Nervo obturador (L2-L3)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Parte da pata de ganso; lesões causam dor medial no joelho
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Glúteo máximo
        (function () {
            const opts = ['Glúteo máximo', 'Glúteo médio', 'Glúteo mínimo', 'Tensor da fascia lata'];
            const correct = 'Glúteo máximo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa10.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Face glútea do ílio, sacro e cóccix<br>
<strong>Inserção:</strong> Trato iliotibial e tuberosidade glútea do fêmur<br>
<strong>Ação:</strong> Extensão e rotação lateral da coxa; estabiliza o tronco<br>
<strong>Inervação:</strong> Nervo glúteo inferior (L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fraqueza causa dificuldade para levantar-se e subir escadas
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Glúteo médio
        (function () {
            const opts = ['Glúteo médio', 'Glúteo máximo', 'Glúteo mínimo', 'Tensor da fascia lata'];
            const correct = 'Glúteo médio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa11.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Face glútea do ílio<br>
<strong>Inserção:</strong> Trocanter maior do fêmur<br>
<strong>Ação:</strong> Abdução da coxa; estabiliza a pelve durante a marcha<br>
<strong>Inervação:</strong> Nervo glúteo superior (L4-S1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão causa marcha de Trendelenburg (pelve cai do lado oposto)
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Glúteo mínimo
        // Glúteo mínimo
        (function () {
            const opts = ['Glúteo mínimo', 'Glúteo médio', 'Glúteo máximo', 'Tensor da fascia lata'];
            const correct = 'Glúteo mínimo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa12.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Face glútea do ílio (profundamente ao glúteo médio)<br>
<strong>Inserção:</strong> Trocanter maior do fêmur<br>
<strong>Ação:</strong> Abdução e rotação medial da coxa; estabiliza a pelve<br>
<strong>Inervação:</strong> Nervo glúteo superior (L4-S1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão pode contribuir para marcha de Trendelenburg
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Piriforme
        (function () {
            const opts = ['Piriforme', 'Glúteo mínimo', 'Glúteo médio', 'Obturador interno'];
            const correct = 'Piriforme';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa13.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Face anterior do sacro<br>
<strong>Inserção:</strong> Trocanter maior do fêmur<br>
<strong>Ação:</strong> Rotação lateral da coxa; abdução quando o quadril está fletido<br>
<strong>Inervação:</strong> Ramos do plexo sacral (S1-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Síndrome do piriforme pode causar compressão do nervo ciático, resultando em dor tipo ciática
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Vasto medial
        (function () {
            const opts = ['Vasto medial', 'Vasto lateral', 'Vasto intermédio', 'Reto femoral'];
            const correct = 'Vasto medial';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa14.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Linha áspera do fêmur (lábio medial) e linha intertrocantérica<br>
<strong>Inserção:</strong> Base da patela e tuberosidade da tíbia (via ligamento patelar)<br>
<strong>Ação:</strong> Extensão do joelho; estabiliza a patela medialmente<br>
<strong>Inervação:</strong> Nervo femoral (L2-L4)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Importante para estabilização da patela; sua fraqueza ou atrofia pode levar à síndrome patelofemoral e luxação patelar lateral
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Gêmeos superior e inferior
        (function () {
            const opts = ['Gêmeos superior e inferior', 'Obturador interno', 'Piriforme', 'Quadrado femoral'];
            const correct = 'Gêmeos superior e inferior';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa15.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Gêmeo superior: espinha isquiática; Gêmeo inferior: tuberosidade isquiática<br>
<strong>Inserção:</strong> Trocanter maior do fêmur (junto com o tendão do obturador interno)<br>
<strong>Ação:</strong> Rotação lateral da coxa; abdução da coxa fletida<br>
<strong>Inervação:</strong> Nervo para o obturador interno (L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Músculos acessórios do obturador interno; fazem parte do grupo dos rotadores laterais profundos do quadril
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),
        // Obturador interno
        (function () {
            const opts = ['Obturador interno', 'Obturador externo', 'Piriforme', 'Gêmeos'];
            const correct = 'Obturador interno';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa16.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Face interna da membrana obturatória e bordas do forame obturado<br>
<strong>Inserção:</strong> Trocanter maior do fêmur (fossa trocantérica)<br>
<strong>Ação:</strong> Rotação lateral da coxa; abdução da coxa fletida<br>
<strong>Inervação:</strong> Nervo para o obturador interno (L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Importante rotador lateral profundo do quadril; seu tendão é ladeado pelos músculos gêmeos superior e inferior
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),
        // Quadrado femoral
        (function () {
            const opts = ['Quadrado femoral', 'Obturador interno', 'Piriforme', 'Gêmeo inferior'];
            const correct = 'Quadrado femoral';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa17.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Borda lateral da tuberosidade isquiática<br>
<strong>Inserção:</strong> Crista intertrocantérica do fêmur<br>
<strong>Ação:</strong> Rotação lateral da coxa<br>
<strong>Inervação:</strong> Nervo para o quadrado femoral (L4-S1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Músculo plano e retangular; potente rotador lateral do quadril; síndrome do quadrado femoral causa dor glútea profunda
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),
        // Semitendíneo
        (function () {
            const opts = ['Semitendíneo', 'Semimembranáceo', 'Bíceps femoral', 'Grácil'];
            const correct = 'Semitendíneo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa18.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Tuberosidade isquiática<br>
<strong>Inserção:</strong> Face medial da tíbia (pata de ganso - pes anserinus)<br>
<strong>Ação:</strong> Extensão da coxa e flexão do joelho; rotação medial da perna<br>
<strong>Inervação:</strong> Nervo tibial, divisão do nervo isquiático (L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Parte dos isquiotibiais mediais; lesões comuns em atletas; seu tendão pode ser usado para reconstrução do ligamento cruzado anterior (LCA)
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Semimembranáceo
        (function () {
            const opts = ['Semimembranáceo', 'Semitendíneo', 'Bíceps femoral', 'Adutor magno'];
            const correct = 'Semimembranáceo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa19.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Tuberosidade isquiática<br>
<strong>Inserção:</strong> Côndilo medial da tíbia (face posterior)<br>
<strong>Ação:</strong> Extensão da coxa e flexão do joelho; rotação medial da perna<br>
<strong>Inervação:</strong> Nervo tibial, divisão do nervo isquiático (L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Mais profundo dos isquiotibiais mediais; possui longo tendão proximal membranáceo; importante para estabilidade posterior do joelho
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Bíceps femoral
        (function () {
            const opts = ['Bíceps femoral', 'Semitendíneo', 'Semimembranáceo', 'Sóleo'];
            const correct = 'Bíceps femoral';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa20.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Cabeça longa: tuberosidade isquiática; Cabeça curta: linha áspera do fêmur<br>
<strong>Inserção:</strong> Cabeça da fíbula<br>
<strong>Ação:</strong> Extensão do quadril e flexão do joelho; a cabeça longa realiza rotação lateral do joelho<br>
<strong>Inervação:</strong> Nervo isquiático (cabeça longa: divisão tibial L5-S2; cabeça curta: divisão fibular comum L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Lesão dos Isquiotibiais:</strong> O bíceps femoral é comumente lesionado em atividades que envolvem aceleração súbita ou chute (ex: futebol, corrida). A lesão geralmente ocorre na junção miotendínea. <strong>Avulsão da tuberosidade isquiática</strong> pode ocorrer em adolescentes durante atividades que exigem flexão do quadril com extensão simultânea do joelho.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Fibular longo
        (function () {
            const opts = ['Fibular longo', 'Fibular curto', 'Tibial anterior', 'Gastrocnêmio'];
            const correct = 'Fibular longo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa21.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Cabeça e dois terços proximais da face lateral da fíbula<br>
<strong>Inserção:</strong> Base do 1º metatarso e cuneiforme medial<br>
<strong>Ação:</strong> Eversão e flexão plantar do pé; suporte do arco longitudinal<br>
<strong>Inervação:</strong> Nervo fibular superficial (L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Lesão do nervo fibular comum:</strong> Pode resultar em fraqueza na eversão do pé, levando a entorse lateral recorrente. <strong>Tendinite fibular:</strong> Comum em corredores e bailarinos, causando dor lateral no tornozelo. O tendão do fibular longo também pode sofrer <strong>subluxação ou luxação</strong> ao redor do maléolo lateral em traumas esportivos.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Fibular curto
        (function () {
            const opts = ['Fibular curto', 'Fibular longo', 'Tibial anterior', 'Gastrocnêmio'];
            const correct = 'Fibular curto';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa22.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Dois terços distais da face lateral da fíbula<br>
<strong>Inserção:</strong> Tuberosidade do 5º metatarso<br>
<strong>Ação:</strong> Eversão e flexão plantar do pé<br>
<strong>Inervação:</strong> Nervo fibular superficial (L5-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Fratura por avulsão da tuberosidade do 5º metatarso (Fratura de Jones):</strong> Ocorre comumente durante inversão forçada do pé. <strong>Tendinite do fibular curto:</strong> Pode resultar de uso excessivo, especialmente em atividades que envolvem mudanças rápidas de direção. Instabilidade crônica do tornozelo pode levar à hipertrofia compensatória deste músculo.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Tibial anterior
        (function () {
            const opts = ['Tibial anterior', 'Fibular longo', 'Fibular curto', 'Extensor longo do hálux'];
            const correct = 'Tibial anterior';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa23.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Côndilo lateral da tíbia, membrana interóssea e dois terços superiores da face lateral da tíbia<br>
<strong>Inserção:</strong> Cuneiforme medial e base do 1º metatarso<br>
<strong>Ação:</strong> Dorsiflexão e inversão do pé; suporte do arco longitudinal medial<br>
<strong>Inervação:</strong> Nervo fibular profundo (L4-S1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Pé caído (drop foot):</strong> Lesão do nervo fibular profundo ou comum resulta em incapacidade de dorsiflexão, causando marcha em "steppage" (pé arrastado). <strong>Síndrome compartimental anterior:</strong> Edema no compartimento anterior da perna pode comprimir o nervo e vasos, levando à necrose muscular. <strong>Tendinite do tibial anterior:</strong> Comum em corredores e bailarinos.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Extensor longo do hálux
        (function () {
            const opts = ['Extensor longo do hálux', 'Extensor longo dos dedos', 'Tibial anterior', 'Fibular longo'];
            const correct = 'Extensor longo do hálux';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa24.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Dois terços médios da face medial da fíbula e membrana interóssea<br>
<strong>Inserção:</strong> Base da falange distal do hálux<br>
<strong>Ação:</strong> Extensão do hálux e dorsiflexão do pé<br>
<strong>Inervação:</strong> Nervo fibular profundo (L4-S1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Hálux rígido (hallux rigidus):</strong> Artrose da articulação metatarsofalângica do hálux pode limitar a extensão ativa. <strong>Tendinite do extensor longo do hálux:</strong> Pode ocorrer em corredores de longa distância. <strong>Pé caído:</strong> Lesão do nervo fibular profundo afeta este músculo, dificultando a marcha e a extensão do hálux.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Extensor longo dos dedos
        (function () {
            const opts = ['Extensor longo dos dedos', 'Extensor longo do hálux', 'Tibial anterior', 'Fibular curto'];
            const correct = 'Extensor longo dos dedos';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa25.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Côndilo lateral da tíbia, três quartos superiores da face medial da fíbula e membrana interóssea<br>
<strong>Inserção:</strong> Falanges médias e distais dos dedos laterais (2º ao 5º)<br>
<strong>Ação:</strong> Extensão dos dedos laterais e dorsiflexão do pé<br>
<strong>Inervação:</strong> Nervo fibular profundo (L4-S1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Pé caído:</strong> Lesão do nervo fibular profundo ou comum resulta em incapacidade de extensão dos dedos, causando dedos "em garra" durante a marcha. <strong>Síndrome compartimental anterior:</strong> Edema no compartimento anterior pode comprometer o músculo. <strong>Tendinite:</strong> Comum em corredores, especialmente após aumento súbito de intensidade de treino.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Gastrocnêmio
        (function () {
            const opts = ['Gastrocnêmio', 'Sóleo', 'Plantar', 'Fibular longo'];
            const correct = 'Gastrocnêmio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa26.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Cabeça medial: côndilo medial do fêmur; Cabeça lateral: côndilo lateral do fêmur<br>
<strong>Inserção:</strong> Calcâneo via tendão calcâneo (Aquiles)<br>
<strong>Ação:</strong> Flexão plantar do pé e flexão do joelho<br>
<strong>Inervação:</strong> Nervo tibial (S1-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Ruptura do tendão calcâneo (Aquiles):</strong> Comum em atividades que envolvem aceleração súbita ou saltos (ex: basquete, tênis). Teste de Thompson positivo (sem flexão plantar ao comprimir a panturrilha). <strong>Trombose venosa profunda (TVP):</strong> O músculo da panturrilha atua como bomba venosa; imobilização prolongada aumenta o risco de TVP. <strong>Lesão do músculo (estiramento):</strong> Comum em corredores e atletas.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Sóleo
        (function () {
            const opts = ['Sóleo', 'Gastrocnêmio', 'Plantar', 'Tibial posterior'];
            const correct = 'Sóleo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa27.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Cabeça e quarto proximal da face posterior da fíbula, linha do sóleo e terço médio da borda medial da tíbia<br>
<strong>Inserção:</strong> Calcâneo via tendão calcâneo (Aquiles)<br>
<strong>Ação:</strong> Flexão plantar do pé<br>
<strong>Inervação:</strong> Nervo tibial (S1-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Síndrome compartimental profunda posterior:</strong> Edema pode comprimir o nervo tibial e os vasos, levando a dor intensa e possível necrose. <strong>Ruptura do tendão calcâneo:</strong> O sóleo contribui significativamente para a força do tendão de Aquiles. <strong>Bomba venosa:</strong> O sóleo é crucial para o retorno venoso dos membros inferiores; fraqueza pode contribuir para insuficiência venosa crônica.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // Plantar
        (function () {
            const opts = ['Plantar', 'Gastrocnêmio', 'Sóleo', 'Poplíteo'];
            const correct = 'Plantar';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_inferiores/novos_quizzes/musculos da coxa28.png',
                question: 'Identifique o músculo apontado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Origem:</strong> Linha supracondilar lateral do fêmur e ligamento poplíteo oblíquo<br>
<strong>Inserção:</strong> Calcâneo via tendão calcâneo (Aquiles), medialmente ao tendão do gastrocnêmio<br>
<strong>Ação:</strong> Flexão plantar fraca do pé e flexão do joelho<br>
<strong>Inervação:</strong> Nervo tibial (S1-S2)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Variação anatômica:</strong> O músculo plantar está ausente em aproximadamente 7-10% da população. Devido à sua função mínima, sua ausência geralmente não causa déficit funcional significativo. <strong>Ruptura do plantar:</strong> Pode ocorrer durante atividade física intensa, causando dor súbita na panturrilha (frequentemente confundida com ruptura do gastrocnêmio). É comumente chamado de "lesão do tenista".
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        // ...existing code...
    ],

    superiores: [
        createQuestion(1, "Músculo Bíceps Braquial",
            ["Bíceps Braquial", "Tríceps Braquial", "Braquial", "Coracobraquial"],
            0,
            'fácil',
            `
<strong>Origem:</strong> Cabeça longa: tubérculo supraglenoidal da escápula; Cabeça curta: processo coracóide da escápula
<strong>Inserção:</strong> Tuberosidade do rádio
<strong>Ação:</strong> Flexão do cotovelo e supinação do antebraço
<strong>Inervação:</strong> Nervo musculocutâneo (C5-C6)
            `
        ),
        createQuestion(2, "Músculo Tríceps Braquial",
            ["Tríceps Braquial", "Bíceps Braquial", "Braquial", "Ancôneo"],
            0,
            'médio',
            `
<strong>Origem:</strong> Cabeça longa: tubérculo infraglenoidal da escápula; Cabeça lateral e medial: face posterior do úmero
<strong>Inserção:</strong> Olécrano da ulna
<strong>Ação:</strong> Extensão do cotovelo
<strong>Inervação:</strong> Nervo radial (C6-C8)
            `
        ),
    ],

    coxaAnterior: [
        // Quadríceps femoral
    ],

    coxaPosterior: [
        // Isquiotibiais
    ],

    coxaMedial: [
        // Adutores
    ],

    joelho: [
        // Articulação do joelho
    ],

    pernaAnterior: [
        // Músculos anteriores da perna
    ],

    pernaPosterior: [
        // Músculos posteriores da perna
    ],

    pernaLateral: [
        // Músculos fibulares
    ],

    tornozelo: [
        // Articulação do tornozelo
    ],

    pe: [
        // Músculos do pé
    ]
};

// Checklist de conteúdo a ser coberto
const contentChecklist = {
    quadrilPelve: {
        ossos: ['Ílio', 'Ísquio', 'Púbis', 'Sacro'],
        musculos: ['Glúteo máximo', 'Glúteo médio', 'Glúteo mínimo', 'Piriforme'],
        articulacoes: ['Sacroilíaca', 'Coxofemoral'],
        nervos: ['Ciático', 'Femoral', 'Obturador'],
        vasos: ['Artéria femoral', 'Veia femoral']
    },
    coxa: {
        anterior: ['Reto femoral', 'Vasto lateral', 'Vasto medial', 'Vasto intermédio'],
        posterior: ['Bíceps femoral', 'Semitendíneo', 'Semimembranoso'],
        medial: ['Adutor longo', 'Adutor curto', 'Adutor magno', 'Grácil']
    },
    perna: {
        anterior: ['Tibial anterior', 'Extensor longo dos dedos', 'Extensor longo do hálux'],
        posterior: ['Gastrocnêmio', 'Sóleo', 'Plantar', 'Tibial posterior'],
        lateral: ['Fibular longo', 'Fibular curto']
    }
};

// ========================================
// CATEGORIA: CORAÇÃO (NOVA)
// ========================================

// Adicionar novas questões sobre coração aqui
quizData.coracao = [
    // QUESTÕES DA IMAGEM Coração1.png (MÚLTIPLAS SETAS)
    // TODO: Preencher com o gabarito fornecido pelo usuário
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 1:',
        options: ['Valva Mitral', 'Valva Tricúspide', 'Valva Aórtica', 'Valva Pulmonar'],
        answer: 1,
        correctAnswer: 'Valva Tricúspide',
        explanation: `
<strong>Estrutura:</strong> Valva Tricúspide<br>
<strong>Localização:</strong> Entre átrio direito e ventrículo direito<br>
<strong>Estrutura:</strong> Três cúspides (anterior, posterior e septal) conectadas a cordas tendíneas<br>
<strong>Função:</strong> Impede o refluxo de sangue do ventrículo direito para o átrio direito durante a sístole ventricular<br>
<strong>Inervação:</strong> Plexo cardíaco (simpático e parassimpático)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Insuficiência Tricúspide:</strong> Pode ocorrer por dilatação do ventrículo direito, endocardite, trauma torácico ou uso de drogas intravenosas. Causa regurgitação sistólica e congestão venosa sistêmica.<br>
<strong>Estenose Tricúspide:</strong> Rara, geralmente causada por febre reumática. Dificulta o enchimento ventricular direito.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 2:',
        options: ['Músculos Papilares', 'Trabéculas Cárneas', 'Cordas Tendíneas', 'Válvulas Semilunares'],
        answer: 2,
        correctAnswer: 'Cordas Tendíneas',
        explanation: `
<strong>Estrutura:</strong> Cordas Tendíneas (Chordae Tendineae)<br>
<strong>Composição:</strong> Feixes fibrosos de colágeno tipo I e III<br>
<strong>Conexões:</strong> Ligam as bordas das cúspides valvares aos músculos papilares<br>
<strong>Função:</strong> Previnem a eversão (prolapso) das válvulas atrioventriculares durante a contração ventricular, mantendo as cúspides fechadas<br>
<strong>Classificação:</strong> Primárias (bordas livres), secundárias (superfície ventricular) e terciárias (base das cúspides)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Ruptura de Cordas Tendíneas:</strong> Pode ocorrer por trauma, endocardite, infarto agudo do miocárdio ou degeneração mixomatosa. Causa insuficiência valvar aguda grave com regurgitação importante.<br>
<strong>Prolapso Valvar Mitral:</strong> Alongamento ou ruptura parcial das cordas pode causar prolapso, afetando 2-3% da população, mais comum em mulheres jovens.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 3:',
        options: ['Músculo Papilar Posterior', 'Trabéculas Cárneas', 'Cordas Tendíneas', 'Músculo Papilar Anterior'],
        answer: 3,
        correctAnswer: 'Músculo Papilar Anterior',
        explanation: `
<strong>Estrutura:</strong> Músculo Papilar Anterior do Ventrículo Direito<br>
<strong>Localização:</strong> Parede anterior do ventrículo direito<br>
<strong>Composição:</strong> Projeções cônicas de músculo cardíaco revestidas por endocárdio<br>
<strong>Função:</strong> Contraem-se durante a sístole ventricular para tensionar as cordas tendíneas, impedindo prolapso das cúspides da valva tricúspide<br>
<strong>Irrigação:</strong> Artéria coronária descendente anterior (ramo da coronária esquerda)<br>
<strong>Músculos Papilares do VD:</strong> Anterior (maior), posterior e septal
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Ruptura de Músculo Papilar:</strong> Complicação rara mas grave do infarto agudo do miocárdio. Causa insuficiência tricúspide aguda severa com choque cardiogênico.<br>
<strong>Disfunção Papilar:</strong> Isquemia pode causar disfunção sem ruptura, levando a regurgitação valvar funcional reversível após revascularização.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 4:',
        options: ['Músculos Papilares', 'Trabéculas Cárneas', 'Cordas Tendíneas', 'Músculos Pectíneos'],
        answer: 1,
        correctAnswer: 'Trabéculas Cárneas',
        explanation: `
<strong>Estrutura:</strong> Trabéculas Cárneas (Trabeculae Carneae)<br>
<strong>Localização:</strong> Parede interna dos ventrículos (direito e esquerdo)<br>
<strong>Composição:</strong> Elevações irregulares de músculo cardíaco revestidas por endocárdio<br>
<strong>Tipos:</strong> Três categorias - simples cristas (aderidas), pontes (fixadas em ambas extremidades) e músculos papilares (projetam cordas tendíneas)<br>
<strong>Função:</strong> Aumentam a área de superfície ventricular, auxiliam na contração e previnem aderência das paredes ventriculares durante a sístole<br>
<strong>Diferença VD/VE:</strong> Mais proeminentes no ventrículo direito
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Hipertrofia Ventricular:</strong> Trabéculas tornam-se mais proeminentes na hipertrofia, visíveis em ecocardiograma e ressonância magnética.<br>
<strong>Não-Compactação Ventricular:</strong> Cardiomiopatia rara caracterizada por trabéculas excessivamente proeminentes com recessos profundos, predispondo a arritmias, tromboembolismo e insuficiência cardíaca.<br>
<strong>Confusão Diagnóstica:</strong> Podem ser confundidas com trombos intracavitários em exames de imagem.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 5:',
        options: ['Trabéculas Cárneas', 'Músculo Papilar', 'Trabécula Septomarginal', 'Septo Interventricular'],
        answer: 2,
        correctAnswer: 'Trabécula Septomarginal',
        explanation: `
<strong>Estrutura:</strong> Trabécula Septomarginal (Banda Moderadora)<br>
<strong>Localização:</strong> Exclusiva do ventrículo direito, estende-se do septo interventricular até a base do músculo papilar anterior<br>
<strong>Composição:</strong> Feixe muscular curvo e proeminente revestido por endocárdio<br>
<strong>Função:</strong> Conduz o ramo direito do feixe atrioventricular (sistema de condução elétrica) até a parede anterior do VD, permitindo contração coordenada<br>
<strong>Importância Anatômica:</strong> Característica distintiva do ventrículo direito, auxilia na identificação em exames de imagem<br>
<strong>Sinônimos:</strong> Banda moderadora, feixe septomarginal
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Identificação em Imagem:</strong> Estrutura-chave para diferenciar ventrículo direito do esquerdo em ecocardiograma e ressonância magnética, especialmente em cardiopatias congênitas complexas.<br>
<strong>Hipertrofia do VD:</strong> Torna-se mais evidente em condições como hipertensão pulmonar, estenose pulmonar ou tetralogia de Fallot.<br>
<strong>Sistema de Condução:</strong> Conduz parte do ramo direito do feixe de His; lesão pode causar bloqueio de ramo direito.
</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 6:',
        options: ['Septo Interatrial', 'Parede Livre do VD', 'Cone Arterial', 'Septo Interventricular (Parte Muscular)'],
        answer: 3,
        correctAnswer: 'Septo Interventricular (Parte Muscular)',
        explanation: `
<strong>Estrutura:</strong> Septo Interventricular - Parte Muscular<br>
<strong>Localização:</strong> Parede divisória entre os ventrículos direito e esquerdo<br>
<strong>Composição:</strong> Maior parte é muscular (porção inferior, apical e média); pequena porção membranácea (superior, próxima às válvulas)<br>
<strong>Função:</strong> Separa os ventrículos, participa da contração ventricular e contém parte do sistema de condução (feixe de His)<br>
<strong>Espessura:</strong> 10-12mm na base, mais fina no ápice; similar à parede livre do ventrículo esquerdo<br>
<strong>Irrigação:</strong> Artérias descendente anterior (2/3 anteriores) e descendente posterior (1/3 posterior)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Comunicação Interventricular (CIV):</strong> Defeito congênito mais comum (30-40% das cardiopatias); pode ocorrer na porção muscular ou membranácea. Causa shunt esquerda-direita.<br>
<strong>Ruptura Septal Pós-IAM:</strong> Complicação rara (1-2%) mas grave do infarto, ocorre 3-5 dias após. Alta mortalidade, requer cirurgia de emergência.<br>
<strong>Hipertrofia Septal:</strong> Característica da cardiomiopatia hipertrófica; pode obstruir via de saída do VE (hipertrofia septal assimétrica).
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 7:',
        options: ['Tronco Pulmonar', 'Cone Arterial', 'Aorta Ascendente', 'Septo Interventricular'],
        answer: 1,
        correctAnswer: 'Cone Arterial',
        explanation: `
<strong>Estrutura:</strong> Cone Arterial (Infundíbulo ou Via de Saída do VD)<br>
<strong>Localização:</strong> Porção superior e anterior do ventrículo direito, logo abaixo da valva pulmonar<br>
<strong>Composição:</strong> Parede muscular lisa (sem trabéculas), em forma de funil, que se estende até o tronco pulmonar<br>
<strong>Função:</strong> Direciona o fluxo sanguíneo do ventrículo direito para o tronco pulmonar durante a sístole ventricular<br>
<strong>Características:</strong> Única via de saída no coração sem trabéculas; parede lisa facilita fluxo laminar<br>
<strong>Sinônimos:</strong> Infundíbulo pulmonar, conus arteriosus, via de saída do ventrículo direito (VSVD)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Estenose Infundibular:</strong> Obstrução muscular da via de saída do VD, comum na tetralogia de Fallot. Causa hipertrofia do VD e cianose.<br>
<strong>Taquicardia Ventricular da VSVD:</strong> Arritmia originada no cone arterial; geralmente benigna, responde bem a ablação por cateter.<br>
<strong>Dupla Via de Saída do VD:</strong> Cardiopatia congênita onde tanto aorta quanto tronco pulmonar se originam do VD; o cone arterial está frequentemente malformado.
</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        image: 'imagens/Coração/Coração1.png',
        question: 'Identifique a estrutura apontada pela SETA 8:',
        options: ['Valva Aórtica', 'Valva Tricúspide', 'Valva do Tronco Pulmonar', 'Valva Mitral'],
        answer: 2,
        correctAnswer: 'Valva do Tronco Pulmonar',
        explanation: `
<strong>Estrutura:</strong> Valva do Tronco Pulmonar (Válvula Pulmonar)<br>
<strong>Localização:</strong> Entre o ventrículo direito (cone arterial) e o tronco pulmonar<br>
<strong>Estrutura:</strong> Três válvulas semilunares (anterior, direita e esquerda) dispostas em formato de meia-lua<br>
<strong>Função:</strong> Impede o refluxo de sangue do tronco pulmonar para o ventrículo direito durante a diástole ventricular<br>
<strong>Características:</strong> Não possui cordas tendíneas (diferente das valvas AV); abre-se passivamente pela pressão da sístole do VD<br>
<strong>Anatomia:</strong> Cada válvula tem uma lunula central e nódulo de Morgagni nas margens livres
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Estenose Pulmonar:</strong> Congênita (mais comum) ou adquirida (rara). Causa sobrecarga do VD, hipertrofia e eventual insuficiência cardíaca direita. Tratamento: valvoplastia por balão.<br>
<strong>Insuficiência Pulmonar:</strong> Geralmente bem tolerada; pode ser secundária a hipertensão pulmonar, endocardite ou pós-correção de tetralogia de Fallot.<br>
<strong>Endocardite:</strong> Rara na valva pulmonar nativa; mais comum em usuários de drogas intravenosas.<br>
<strong>Atresia Pulmonar:</strong> Cardiopatia congênita grave onde a valva não se desenvolve; incompatível com a vida sem comunicações (CIA, PCA).
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },

    // DISTRIBUIÇÃO CORRIGIDA DAS SETAS ENTRE coração2.png E coração3.png
    // IMAGEM coração2.png -> SETAS: 1, 2, 7, 8, 9, 10
    {
        image: 'imagens/Coração/coração2.png',
        question: 'Identifique a estrutura apontada pela SETA 1:',
        options: ['Artéria coronária esquerda', 'Artéria coronária direita', 'Ramo interventricular anterior', 'Ramo circunflexo'],
        answer: 1,
        correctAnswer: 'Artéria coronária direita',
        explanation: `
<strong>Estrutura:</strong> Artéria coronária direita (ACD)<br>
<strong>Origem:</strong> Seio aórtico direito<br>
<strong>Trajeto:</strong> Sulco coronário direito em direção à crux cordis<br>
<strong>Ramos principais:</strong> Nodal SA (≈60%), ventricular direito, marginal direita, nó AV (≈80%), ramo interventricular posterior (se dominância direita)<br>
<strong>Área irrigada:</strong> Parede livre do VD, parte do átrio direito, nó AV e 1/3 posterior do septo
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Oclusões proximais podem causar bradiarritmia por isquemia do nó AV; dominância coronária é definida pela origem do ramo interventricular posterior.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração2.png',
        question: 'Identifique a estrutura apontada pela SETA 2:',
        options: ['Veia cardíaca média', 'Veia cardíaca magna', 'Seio coronário', 'Veia cardíaca parva'],
        answer: 3,
        correctAnswer: 'Veia cardíaca parva',
        explanation: `
<strong>Estrutura:</strong> Veia cardíaca parva<br>
<strong>Trajeto:</strong> Segue a artéria marginal direita na margem aguda do coração<br>
<strong>Drenagem:</strong> Deságua no seio coronário
<strong>Função:</strong> Coleta sangue venoso da parede anterior/inferior do VD
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Importante via de drenagem acessada indiretamente em procedimentos de marca-passo por via do seio coronário; anatomia variável.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração2.png',
        question: 'Identifique a estrutura apontada pela SETA 7:',
        options: ['Ramo interventricular anterior (DA/LAD)', 'Ramo interventricular posterior', 'Ramo circunflexo', 'Artéria coronária direita'],
        answer: 0,
        correctAnswer: 'Ramo interventricular anterior da artéria coronária esquerda',
        explanation: `
<strong>Estrutura:</strong> Ramo interventricular anterior (DA/LAD)<br>
<strong>Trajeto:</strong> Sulco interventricular anterior até o ápice (frequentemente o contorna)<br>
<strong>Ramos:</strong> Septais anteriores e diagonais<br>
<strong>Irrigação:</strong> Parede anterior do VE, ápice e 2/3 anteriores do septo
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Lesão proximal é o clássico "widow maker" pela grande massa miocárdica irrigada; identifica-se acompanhada da veia cardíaca magna.</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração2.png',
        question: 'Identifique a estrutura apontada pela SETA 8:',
        options: ['Veia cardíaca média', 'Seio coronário', 'Veia cardíaca magna', 'Veia cardíaca parva'],
        answer: 2,
        correctAnswer: 'Veia cardíaca magna (interventricular anterior)',
        explanation: `
<strong>Estrutura:</strong> Veia cardíaca magna (grande)<br>
<strong>Trajeto:</strong> Sulco interventricular anterior junto à DA; continua no sulco coronário para o seio coronário<br>
<strong>Drenagem:</strong> Grande parte do VE e septo anterior
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Utilizada como referência anatômica em ecocardiografia e como via para eletrodos de ressincronização cardíaca.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração2.png',
        question: 'Identifique a estrutura apontada pela SETA 9:',
        options: ['Ramo interventricular anterior', 'Ramo circunflexo da ACE', 'Artéria coronária direita', 'Ramo marginal direito'],
        answer: 1,
        correctAnswer: 'Ramo circunflexo da artéria coronária esquerda',
        explanation: `
<strong>Estrutura:</strong> Ramo circunflexo (Cx) da coronária esquerda<br>
<strong>Trajeto:</strong> Sulco atrioventricular esquerdo em direção à face lateral/posterior do VE<br>
<strong>Ramos:</strong> Marginais obtusos; em dominância esquerda pode emitir o ramo interventricular posterior
<strong>Irrigação:</strong> Parede lateral do VE e átrio esquerdo (variável)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Infartos da Cx podem não gerar alterações claras em derivações precordiais anteriores – atenção à clínica e imagem.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração2.png',
        question: 'Identifique a estrutura apontada pela SETA 10:',
        options: ['Artéria coronária direita', 'Ramo circunflexo', 'Ramo interventricular anterior', 'Artéria coronária esquerda'],
        answer: 3,
        correctAnswer: 'Artéria coronária esquerda',
        explanation: `
<strong>Estrutura:</strong> Tronco da artéria coronária esquerda<br>
<strong>Origem:</strong> Seio aórtico esquerdo<br>
<strong>Divisão:</strong> Bifurca em DA e Cx (eventualmente trifurca com ramo intermédio)<br>
<strong>Importância:</strong> Principal suprimento do VE e septo anterior
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Estenose significativa do tronco comum é crítica e geralmente indica revascularização urgente (angioplastia ou cirurgia).</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    // IMAGEM coração3.png -> SETAS: 3, 4, 5, 6
    {
        image: 'imagens/Coração/coração3.png',
        question: 'Identifique a estrutura apontada pela SETA 3:',
        options: ['Ramo interventricular anterior', 'Artéria coronária direita', 'Ramo circunflexo da ACE', 'Ramo marginal direito'],
        answer: 2,
        correctAnswer: 'Ramo circunflexo da artéria coronária esquerda',
        explanation: `
<strong>Estrutura:</strong> Ramo circunflexo (Cx) da ACE<br>
<strong>Trajeto:</strong> Sulco atrioventricular esquerdo abraçando a face lateral do VE<br>
<strong>Ramos:</strong> Marginais obtusos
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Duas setas (3 e 9 em imagens distintas) podem apontar para segmentos diferentes da Cx – proximal vs. mais distal.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração3.png',
        question: 'Identifique a estrutura apontada pela SETA 4:',
        options: ['Seio coronário', 'Veia cava superior', 'Aurícula direita', 'Veia cardíaca magna'],
        answer: 0,
        correctAnswer: 'Seio coronário',
        explanation: `
<strong>Estrutura:</strong> Seio coronário – principal coletor venoso cardíaco
<strong>Localização:</strong> Sulco atrioventricular posterior desembocando no átrio direito
<strong>Associados:</strong> Recebe veia magna, média, parva e veias oblíquas
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Fundamental para acesso de eletrodos de ressincronização (VE); dilatação pode refletir hipertensão venosa.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração3.png',
        question: 'Identifique a estrutura apontada pela SETA 5:',
        options: ['Veia cardíaca magna', 'Veia cardíaca média', 'Veia cardíaca parva', 'Seio coronário'],
        answer: 1,
        correctAnswer: 'Veia cardíaca média (interventricular posterior)',
        explanation: `
<strong>Estrutura:</strong> Veia cardíaca média (interventricular posterior)<br>
<strong>Trajeto:</strong> Sulco interventricular posterior até o seio coronário<br>
<strong>Pareamento:</strong> Segue o ramo interventricular posterior
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Identificação facilita orientação espacial em cirurgias e estudos angiográficos posteriores.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração3.png',
        question: 'Identifique a estrutura apontada pela SETA 6:',
        options: ['Ramo interventricular anterior (ACE)', 'Ramo circunflexo', 'Artéria coronária esquerda', 'Ramo interventricular posterior (ACD)'],
        answer: 3,
        correctAnswer: 'Ramo interventricular posterior da artéria coronária direita',
        explanation: `
<strong>Estrutura:</strong> Ramo interventricular posterior (RIP/PDA) da ACD<br>
<strong>Trajeto:</strong> Sulco interventricular posterior rumo ao ápice<br>
<strong>Irrigação:</strong> 1/3 posterior do septo + parede inferior do coração
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Infarto inferior envolvendo o RIP pode cursar com bloqueio AV pela irrigação do nó AV.</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },

    // IMAGEM coração4.png -> SETAS: 1-8 (Inervação Cardíaca)
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 1:',
        options: ['Gânglio cervical superior (simpático)', 'Gânglio cervical médio', 'Nervo vago', 'Gânglio estrelado'],
        answer: 2,
        correctAnswer: 'Gânglio cervical superior (simpático)',
        explanation: `
<strong>Estrutura:</strong> Gânglio cervical superior (simpático)<br>
<strong>Localização:</strong> Maior e mais cranial dos gânglios cervicais, nível C2-C3<br>
<strong>Função:</strong> Fornece ramos simpáticos cardíacos (nervo cardíaco cervical superior)<br>
<strong>Inervação:</strong> Aumenta frequência e contratilidade cardíaca (efeito cronotrópico e inotrópico positivo)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Lesões podem causar síndrome de Horner (ptose, miose, anidrose facial). Importante em cirurgias cervicais e anestesia regional.</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 2:',
        options: ['Nervo frênico', 'Nervo vago (NC X)', 'Nervo laríngeo recorrente', 'Tronco simpático'],
        answer: 1,
        correctAnswer: 'Nervo vago (NC X)',
        explanation: `
<strong>Estrutura:</strong> Nervo vago (NC X) – porção cervical<br>
<strong>Função:</strong> Principal nervo parassimpático cardíaco; reduz frequência e contratilidade<br>
<strong>Ramos cardíacos:</strong> Cervicais superiores, inferiores e torácicos → plexo cardíaco<br>
<strong>Inervação:</strong> Nó SA e AV (bradicardia, redução de condução AV)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Estimulação vagal (manobra de Valsalva) reverte taquicardias supraventriculares. Lesão pode causar taquicardia reflexa.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 3:',
        options: ['Nervo laríngeo recorrente', 'Nervo vago', 'Nervo frênico', 'Tronco simpático'],
        answer: 2,
        correctAnswer: 'Nervo frênico',
        explanation: `
<strong>Estrutura:</strong> Nervo frênico (C3-C4-C5)<br>
<strong>Trajeto:</strong> Desce anteriormente à artéria subclávia entre pulmão e pericárdio<br>
<strong>Função principal:</strong> Inerva o diafragma (motor e sensitivo)<br>
<strong>Relação cardíaca:</strong> Corre adjacente ao pericárdio; pode ser lesado em cirurgias cardíacas
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Paralisia causa elevação hemidiafragmática e dispneia. Importante identificar em cirurgias torácicas/cardíacas para evitar lesão iatrogênica.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 4:',
        options: ['Ramos cardíacos cervicais', 'Nervo vago torácico', 'Ramos cardíacos torácicos (simpáticos)', 'Plexo braquial'],
        answer: 2,
        correctAnswer: 'Ramos cardíacos torácicos (simpáticos)',
        explanation: `
<strong>Estrutura:</strong> Ramos cardíacos torácicos simpáticos<br>
<strong>Origem:</strong> Gânglios torácicos superiores (T1-T5) da cadeia simpática<br>
<strong>Função:</strong> Inervação simpática principal do coração (efeito inotrópico, cronotrópico e dromotrópico positivo)<br>
<strong>Via:</strong> Convergem para formar o plexo cardíaco na base do coração
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Responsáveis pela resposta de "luta ou fuga". Angina pode causar dor referida por essas vias simpáticas (T1-T5).</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 5:',
        options: ['Gânglio estrelado', 'Nervo vago', 'Plexo cardíaco', 'Seio carotídeo'],
        answer: 2,
        correctAnswer: 'Plexo cardíaco',
        explanation: `
<strong>Estrutura:</strong> Plexo cardíaco<br>
<strong>Localização:</strong> Base do coração (arco aórtico e bifurcação traqueal)<br>
<strong>Composição:</strong> Fibras simpáticas (T1-T5) + parassimpáticas (vago) + fibras aferentes viscerais<br>
<strong>Função:</strong> Centro de integração da inervação autônoma cardíaca
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Distribui fibras para nós SA/AV, miocárdio e coronárias. Disfunções podem causar arritmias ou síncope vasovagal.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 6:',
        options: ['Nervo frênico', 'Nervo laríngeo recorrente', 'Ramo cardíaco do vago', 'Tronco vagal anterior'],
        answer: 1,
        correctAnswer: 'Nervo laríngeo recorrente',
        explanation: `
<strong>Estrutura:</strong> Nervo laríngeo recorrente (ramo do vago)<br>
<strong>Trajeto:</strong> Esquerdo contorna o arco aórtico; direito contorna a artéria subclávia<br>
<strong>Função principal:</strong> Inerva músculos intrínsecos da laringe (exceto cricotireóideo)<br>
<strong>Relação cardíaca:</strong> Trajeto próximo ao coração; dá pequenos ramos cardíacos ao plexo
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Lesão causa rouquidão/disfonia. Cirurgias de tireoide, esôfago, arco aórtico ou tórax podem lesá-lo. Lado esquerdo mais vulnerável (trajeto mais longo).</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 7:',
        options: ['Gânglio cervical superior', 'Gânglio cervical médio (simpático)', 'Gânglio estrelado', 'Gânglio cervical inferior'],
        answer: 1,
        correctAnswer: 'Gânglio cervical médio (simpático)',
        explanation: `
<strong>Estrutura:</strong> Gânglio cervical médio (simpático)<br>
<strong>Localização:</strong> Nível C6 (altamente variável; pode estar ausente em ~50% dos indivíduos)<br>
<strong>Função:</strong> Emite nervo cardíaco cervical médio para o plexo cardíaco<br>
<strong>Inervação:</strong> Contribui para inervação simpática cardíaca (aumento de FC e contratilidade)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Menor e mais variável dos gânglios cervicais. Lesões raras isoladas; quando presentes associam-se a trauma ou cirurgia cervical.</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        image: 'imagens/Coração/coração4.png',
        question: 'Identifique a estrutura apontada pela SETA 8:',
        options: ['Nervo frênico', 'Tronco simpático', 'Nervo vago (NC X)', 'Nervo laríngeo superior'],
        answer: 2,
        correctAnswer: 'Nervo vago (NC X)',
        explanation: `
<strong>Estrutura:</strong> Nervo vago (NC X) – porção torácica<br>
<strong>Trajeto:</strong> Desce pelo mediastino posterior entre pulmão e esôfago<br>
<strong>Ramos cardíacos:</strong> Emite ramos torácicos inferiores para o plexo cardíaco<br>
<strong>Função:</strong> Modulação parassimpática contínua do coração (tônus vagal)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Variabilidade da frequência cardíaca (HRV) reflete tônus vagal; redução está associada a pior prognóstico cardiovascular. Estimulação vagal é terapia para epilepsia/depressão.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    }
];

// Questões Teóricas - Coração
quizData.coracaoTeorico = [
    {
        question: 'Qual nervo é responsável pela principal inervação parassimpática do coração?',
        options: ['Nervo frênico', 'Nervo vago (NC X)', 'Nervo laríngeo recorrente', 'Nervo simpático cardíaco'],
        answer: 1,
        correctAnswer: 'Nervo vago (NC X)',
        explanation: `
<strong>Nervo:</strong> Vago (NC X)<br>
<strong>Origem:</strong> Bulbo (medula oblonga)<br>
<strong>Trajeto:</strong> Desce pelo pescoço no feixe vasculonervoso (com carótida comum e veia jugular interna)<br>
<strong>Função:</strong> Principal nervo parassimpático, inerva coração, pulmões, e TGI até cólon transverso<br>
<strong>Efeito cardíaco:</strong> Reduz frequência cardíaca (cronotrópico negativo) e contratilidade atrial (inotrópico negativo)<br>
<strong>Mecanismo:</strong> Libera acetilcolina nos nodos SA e AV, reduzindo automatismo e condução
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Manobras vagais (massagem do seio carotídeo, Valsalva) podem reverter taquicardias supraventriculares. Lesões vagais podem causar taquicardia reflexa.</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual estrutura separa o átrio direito do átrio esquerdo?',
        options: ['Septo interventricular', 'Septo interatrial', 'Cone arterial', 'Trabécula septomarginal'],
        answer: 1,
        correctAnswer: 'Septo interatrial',
        explanation: `
<strong>Estrutura:</strong> Septo interatrial<br>
<strong>Localização:</strong> Parede medial entre os dois átrios<br>
<strong>Componentes:</strong> Fossa oval (remanescente do forame oval fetal) na porção central<br>
<strong>Função:</strong> Separação anatômica e funcional entre átrios direito e esquerdo<br>
<strong>Embriologia:</strong> Formado pela fusão dos septos primum e secundum durante desenvolvimento cardíaco<br>
<strong>Espessura:</strong> Fino comparado ao septo interventricular (músculo mais delicado)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Defeitos do septo interatrial (CIA - Comunicação Interatrial) são cardiopatias congênitas comuns, causando shunt esquerdo-direito e sobrecarga de volume no coração direito.</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual artéria irriga principalmente o nodo sinoatrial (SA)?',
        options: ['Artéria coronária direita', 'Artéria descendente anterior', 'Artéria circunflexa', 'Artéria marginal esquerda'],
        answer: 0,
        correctAnswer: 'Artéria coronária direita',
        explanation: `
<strong>Artéria:</strong> Coronária direita (ACD) em ~60% dos casos<br>
<strong>Ramo específico:</strong> Artéria do nodo sinoatrial (ramo nodal)<br>
<strong>Origem:</strong> Porção proximal da ACD, próxima à origem aórtica<br>
<strong>Variação anatômica:</strong> Em ~40% dos casos, origina-se da artéria circunflexa<br>
<strong>Irrigação:</strong> Nodo SA (marcapasso natural do coração, localizado na junção da VCS com átrio direito)<br>
<strong>Importância:</strong> Lesão desta artéria pode causar disfunção do nodo SA (bradicardia, bloqueios)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">IAM de parede inferior (oclusão da ACD) pode causar bradiarritmias por comprometimento do nodo SA. Necessidade de marcapasso transitório em casos graves.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Quantas cúspides possui a valva tricúspide?',
        options: ['Duas', 'Três', 'Quatro', 'Cinco'],
        answer: 1,
        correctAnswer: 'Três',
        explanation: `
<strong>Valva:</strong> Tricúspide (valva atrioventricular direita)<br>
<strong>Número de cúspides:</strong> 3 (anterior, posterior/inferior, septal)<br>
<strong>Localização:</strong> Entre átrio direito e ventrículo direito<br>
<strong>Estruturas relacionadas:</strong> Anel fibroso, cordas tendíneas, músculos papilares (anterior, posterior, septal)<br>
<strong>Função:</strong> Impede refluxo de sangue do VD para o AD durante sístole ventricular<br>
<strong>Diferença da mitral:</strong> A valva mitral (esquerda) tem apenas 2 cúspides
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Insuficiência tricúspide causa regurgitação durante sístole (sopro sistólico). Comum em hipertensão pulmonar, endocardite (usuários de drogas IV), síndrome carcinoide.</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual estrutura conduz o ramo direito do feixe de His até os músculos papilares do ventrículo direito?',
        options: ['Cone arterial', 'Trabécula septomarginal (banda moderadora)', 'Cordas tendíneas', 'Septo interventricular'],
        answer: 1,
        correctAnswer: 'Trabécula septomarginal (banda moderadora)',
        explanation: `
<strong>Estrutura:</strong> Trabécula septomarginal (banda moderadora)<br>
<strong>Localização:</strong> Cruza a cavidade do ventrículo direito, do septo interventricular até a parede livre (base do músculo papilar anterior)<br>
<strong>Função mecânica:</strong> Evita distensão excessiva do VD durante enchimento<br>
<strong>Função elétrica:</strong> Conduz ramo direito do feixe de His (sistema de condução), garantindo ativação sincrônica do VD<br>
<strong>Importância clínica:</strong> Referência anatômica em ecocardiograma e cirurgias cardíacas<br>
<strong>Particularidade:</strong> Presente apenas no ventrículo direito (não existe no VE)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Bloqueio de ramo direito (BRD) pode envolver esta estrutura. Visualização ecocardiográfica importante para diagnóstico de hipertrofia de VD e displasia arritmogênica.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual veia cardíaca drena para o seio coronário e acompanha a artéria descendente anterior?',
        options: ['Veia parva do coração', 'Veia magna do coração', 'Veia média do coração', 'Veia oblíqua do átrio esquerdo'],
        answer: 1,
        correctAnswer: 'Veia magna do coração',
        explanation: `
<strong>Veia:</strong> Veia magna do coração (veia cardíaca magna)<br>
<strong>Trajeto:</strong> Origina-se no ápice cardíaco, sobe pelo sulco interventricular anterior acompanhando a artéria descendente anterior (DA/LAD)<br>
<strong>Continuação:</strong> Contorna o sulco coronário esquerdo e termina no seio coronário<br>
<strong>Drenagem:</strong> Ventrículo esquerdo, septo interventricular anterior, parte do átrio esquerdo<br>
<strong>Importância clínica:</strong> Usada como referência para cateterismo do seio coronário e implante de marcapasso biventricular<br>
<strong>Calibre:</strong> Maior veia cardíaca superficial
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Acesso para terapia de ressincronização cardíaca (TRC) em insuficiência cardíaca. Eletrodos são avançados pelo seio coronário até veias laterais para estimular VE.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual é a principal função do pericárdio seroso?',
        options: ['Proteger contra infecções', 'Reduzir atrito durante movimentos cardíacos', 'Produzir hormônios cardíacos', 'Conduzir impulsos elétricos'],
        answer: 1,
        correctAnswer: 'Reduzir atrito durante movimentos cardíacos',
        explanation: `
<strong>Estrutura:</strong> Pericárdio seroso (lâminas visceral e parietal)<br>
<strong>Composição:</strong> Duas membranas serosas: epicárdio (visceral, adere ao coração) e pericárdio parietal (reveste face interna do pericárdio fibroso)<br>
<strong>Cavidade pericárdica:</strong> Espaço virtual entre as lâminas, contém 15-50ml de líquido seroso<br>
<strong>Função:</strong> Lubrificação para reduzir atrito durante movimentos cardíacos (70-80 batimentos/minuto)<br>
<strong>Líquido pericárdico:</strong> Ultrafiltrado plasmático produzido pelas células mesoteliais<br>
<strong>Proteção:</strong> Impede dilatação excessiva do coração e ancora o órgão no mediastino
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Derrame pericárdico (>50ml) pode causar tamponamento cardíaco, comprimindo as câmaras e reduzindo débito. Pericardite causa dor torácica pleurítica e atrito pericárdico à ausculta.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual artéria geralmente irriga o nodo atrioventricular (AV)?',
        options: ['Artéria descendente anterior', 'Artéria coronária direita', 'Artéria circunflexa', 'Artéria marginal esquerda'],
        answer: 1,
        correctAnswer: 'Artéria coronária direita',
        explanation: `
<strong>Artéria:</strong> Coronária direita (ACD) em ~90% dos casos<br>
<strong>Ramo específico:</strong> Artéria do nodo AV (ramo nodal AV)<br>
<strong>Origem:</strong> Porção distal da ACD, próxima à cruz do coração (crux cordis)<br>
<strong>Variação:</strong> Em ~10% dos casos (circulação esquerda dominante), origina-se da artéria circunflexa<br>
<strong>Irrigação:</strong> Nodo AV (localizado no septo interatrial inferior, próximo ao seio coronário)<br>
<strong>Importância:</strong> Único ponto de condução elétrica entre átrios e ventrículos
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">IAM inferior (oclusão da ACD distal) pode causar bloqueio AV de 2º ou 3º grau por isquemia nodal. Geralmente transitório, mas pode necessitar marcapasso temporário.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Quantas cúspides possui a valva mitral (bicúspide)?',
        options: ['Uma', 'Duas', 'Três', 'Quatro'],
        answer: 1,
        correctAnswer: 'Duas',
        explanation: `
<strong>Valva:</strong> Mitral (ou bicúspide)<br>
<strong>Número de cúspides:</strong> 2 (anterior/aórtica e posterior/mural)<br>
<strong>Localização:</strong> Entre átrio esquerdo e ventrículo esquerdo<br>
<strong>Aparato valvar:</strong> Anel mitral, cúspides, cordas tendíneas, 2 músculos papilares (anterolateral e posteromedial)<br>
<strong>Função:</strong> Impede refluxo de sangue do VE para o AE durante sístole<br>
<strong>Área valvar normal:</strong> 4-6 cm²<br>
<strong>Nome:</strong> "Mitral" devido semelhança com mitra episcopal
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Estenose mitral reduz área (<1.5cm²), causando dispneia. Insuficiência mitral causa regurgitação (sopro holossistólico). Prolapso de valva mitral é comum e geralmente benigno.</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual é o marcapasso natural do coração?',
        options: ['Nodo atrioventricular', 'Nodo sinoatrial', 'Feixe de His', 'Fibras de Purkinje'],
        answer: 1,
        correctAnswer: 'Nodo sinoatrial',
        explanation: `
<strong>Estrutura:</strong> Nodo sinoatrial (nodo SA ou sinusal)<br>
<strong>Localização:</strong> Junção da veia cava superior com átrio direito (região superior-lateral do AD)<br>
<strong>Função:</strong> Marcapasso natural do coração - inicia despolarização espontânea<br>
<strong>Frequência:</strong> 60-100 batimentos/minuto em repouso<br>
<strong>Inervação:</strong> Regulado pelo SNA - parassimpático (vago) reduz FC, simpático aumenta FC<br>
<strong>Células:</strong> Células nodais com automatismo (despolarização espontânea da fase 4)<br>
<strong>Irrigação:</strong> Ramo nodal da artéria coronária direita (60%) ou circunflexa (40%)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Disfunção do nodo SA causa bradicardia sinusal ou parada sinusal. Síndrome do seio doente requer marcapasso definitivo. Bloqueio sinoatrial pode causar síncope.</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual camada do coração é responsável pela contração muscular?',
        options: ['Endocárdio', 'Miocárdio', 'Epicárdio', 'Pericárdio'],
        answer: 1,
        correctAnswer: 'Miocárdio',
        explanation: `
<strong>Camada:</strong> Miocárdio<br>
<strong>Composição:</strong> Músculo cardíaco (estriado involuntário)<br>
<strong>Função:</strong> Contração que gera força para bombear sangue<br>
<strong>Espessura:</strong> VE (8-12mm) > VD (3-5mm) > átrios (2-3mm)<br>
<strong>Células:</strong> Cardiomiócitos conectados por discos intercalares (junções comunicantes)<br>
<strong>Metabolismo:</strong> Altamente aeróbico, rico em mitocôndrias<br>
<strong>Irrigação:</strong> Artérias coronárias (direita e esquerda)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Isquemia miocárdica causa angina. Infarto do miocárdio (IAM) resulta em necrose celular irreversível. Miocardiopatias afetam estrutura e função do miocárdio (dilatada, hipertrófica, restritiva).</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Em qual câmara cardíaca a pressão sistólica é mais alta?',
        options: ['Átrio direito', 'Ventrículo direito', 'Átrio esquerdo', 'Ventrículo esquerdo'],
        answer: 3,
        correctAnswer: 'Ventrículo esquerdo',
        explanation: `
<strong>Câmara:</strong> Ventrículo esquerdo (VE)<br>
<strong>Pressão sistólica:</strong> 100-140 mmHg (normal: ~120 mmHg)<br>
<strong>Razão:</strong> Precisa gerar força para ejetar sangue contra resistência da circulação sistêmica<br>
<strong>Comparação de pressões sistólicas:</strong><br>
• VE: 120 mmHg<br>
• VD: 25 mmHg (apenas para circulação pulmonar de baixa resistência)<br>
• AE: 8-10 mmHg<br>
• AD: 0-5 mmHg<br>
<strong>Miocárdio VE:</strong> Mais espesso (8-12mm) devido maior demanda
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Hipertensão arterial aumenta pós-carga do VE, causando hipertrofia ventricular esquerda (HVE). Estenose aórtica severa pode elevar pressão sistólica VE para >200 mmHg.</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual vaso sanguíneo transporta sangue oxigenado do ventrículo esquerdo para o corpo?',
        options: ['Artéria pulmonar', 'Veia pulmonar', 'Aorta', 'Veia cava superior'],
        answer: 2,
        correctAnswer: 'Aorta',
        explanation: `
<strong>Vaso:</strong> Aorta<br>
<strong>Origem:</strong> Ventrículo esquerdo (através da valva aórtica)<br>
<strong>Função:</strong> Maior artéria do corpo, distribui sangue oxigenado para circulação sistêmica<br>
<strong>Divisões:</strong><br>
• Aorta ascendente → Artérias coronárias<br>
• Arco aórtico → Tronco braquiocefálico, carótida comum esquerda, subclávia esquerda<br>
• Aorta descendente (torácica e abdominal) → Visceras e membros inferiores<br>
<strong>Diâmetro:</strong> ~3 cm na raiz<br>
<strong>Pressão:</strong> 120/80 mmHg (sistólica/diastólica)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Dissecção aórtica é emergência (dor torácica rasgante). Aneurisma de aorta pode romper com alta mortalidade. Coarctação aórtica é estreitamento congênito.</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual é o volume de sangue ejetado pelo ventrículo esquerdo a cada batimento em um adulto normal?',
        options: ['30-40 ml', '50-70 ml', '90-110 ml', '150-200 ml'],
        answer: 1,
        correctAnswer: '50-70 ml',
        explanation: `
<strong>Parâmetro:</strong> Volume sistólico (VS) ou Volume de ejeção<br>
<strong>Valor normal:</strong> 50-70 ml (média: 60-70 ml em homens, 50-60 ml em mulheres)<br>
<strong>Definição:</strong> Volume de sangue ejetado pelo VE em cada sístole<br>
<strong>Fração de ejeção (FE):</strong> VS/VDF × 100 = 55-70% (normal)<br>
<strong>Débito cardíaco:</strong> VS × FC = ~5 L/min em repouso<br>
<strong>Fatores que aumentam VS:</strong> Exercício, inotrópicos positivos, aumento pré-carga<br>
<strong>Fatores que diminuem VS:</strong> Insuficiência cardíaca, hipovolemia, aumento pós-carga
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">FE reduzida (<40%) indica disfunção sistólica do VE (insuficiência cardíaca com FE reduzida). Ecocardiograma é método principal para avaliar VS e FE.</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Durante qual fase do ciclo cardíaco as valvas semilunares (aórtica e pulmonar) se abrem?',
        options: ['Diástole atrial', 'Sístole ventricular', 'Diástole ventricular', 'Contração isovolumétrica'],
        answer: 1,
        correctAnswer: 'Sístole ventricular',
        explanation: `
<strong>Fase:</strong> Sístole ventricular (ejeção ventricular)<br>
<strong>Momento:</strong> Quando pressão intraventricular excede pressão arterial (aórtica/pulmonar)<br>
<strong>Sequência do ciclo cardíaco:</strong><br>
1. Sístole atrial → Enchimento ventricular final<br>
2. Contração isovolumétrica → Todas valvas fechadas, pressão aumenta<br>
3. <strong>Ejeção ventricular → Valvas semilunares ABREM</strong><br>
4. Relaxamento isovolumétrico → Todas valvas fechadas<br>
5. Enchimento ventricular rápido → Valvas AV abertas<br>
<strong>Som cardíaco:</strong> Fechamento das semilunares = 2ª bulha (B2)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Estenose aórtica dificulta abertura da valva (sopro sistólico crescendo-decrescendo). Insuficiência aórtica causa refluxo diastólico (sopro diastólico decrescendo).</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual estrutura do sistema de condução cardíaco tem a velocidade de condução mais lenta?',
        options: ['Nodo sinoatrial', 'Nodo atrioventricular', 'Feixe de His', 'Fibras de Purkinje'],
        answer: 1,
        correctAnswer: 'Nodo atrioventricular',
        explanation: `
<strong>Estrutura:</strong> Nodo atrioventricular (nodo AV)<br>
<strong>Velocidade de condução:</strong> 0.05 m/s (mais lenta do sistema)<br>
<strong>Função:</strong> Retardar impulso elétrico por ~0.1 segundo<br>
<strong>Importância do atraso:</strong> Permite contração atrial completar antes da contração ventricular (enchimento ventricular adequado)<br>
<strong>Comparação de velocidades:</strong><br>
• Nodo AV: 0.05 m/s (mais lento)<br>
• Miocárdio atrial: 0.3-0.4 m/s<br>
• Feixe de His e ramos: 1-4 m/s<br>
• Fibras de Purkinje: 2-4 m/s (mais rápido)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">Bloqueio AV impede ou retarda condução (1º grau: PR prolongado; 2º grau: condução intermitente; 3º grau: bloqueio completo). Medicamentos como betabloqueadores e digitálicos reduzem condução AV.</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        question: 'Qual hormônio é produzido principalmente pelos átrios cardíacos em resposta ao estiramento?',
        options: ['Aldosterona', 'Peptídeo natriurético atrial (ANP)', 'Renina', 'Adrenalina'],
        answer: 1,
        correctAnswer: 'Peptídeo natriurético atrial (ANP)',
        explanation: `
<strong>Hormônio:</strong> Peptídeo natriurético atrial (ANP) ou Fator natriurético atrial<br>
<strong>Produção:</strong> Cardiomiócitos atriais (principalmente átrio direito)<br>
<strong>Estímulo:</strong> Estiramento atrial por aumento de volume/pressão<br>
<strong>Efeitos principais:</strong><br>
• Natriurese (excreção de Na⁺) e diurese (excreção de água)<br>
• Vasodilatação (reduz pressão arterial)<br>
• Inibe sistema renina-angiotensina-aldosterona<br>
• Inibe liberação de ADH e aldosterona<br>
<strong>Função fisiológica:</strong> Reduzir volemia e pressão arterial
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Clínica</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">BNP (peptídeo natriurético tipo B) é marcador diagnóstico de insuficiência cardíaca. Níveis elevados indicam disfunção ventricular e sobrecarga de volume. Nesiritide (ANP sintético) usado em IC aguda.</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    }
];

// Questões Teóricas - Mediastino
quizData.mediastinoTeorico = [
    {
        question: 'Qual estrutura anatômica divide o mediastino superior do mediastino inferior?',
        options: [
            'Linha axilar média',
            'Plano transverso do tórax (ângulo do esterno a T4/T5)',
            'Diafragma',
            'Linha esternovertebral'
        ],
        answer: 1,
        correctAnswer: 'Plano transverso do tórax (ângulo do esterno a T4/T5)',
        explanation: `
<strong>Plano de referência:</strong> Plano transverso do tórax (plano de Louis), que se estende do ângulo do esterno ao disco intervertebral T4/T5.<br>
<strong>Importância:</strong> Divide o mediastino em superior e inferior; marca o nível da bifurcação da traqueia, início e fim do arco da aorta e entrada da veia ázigos na VCS.
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Quais estruturas NÃO pertencem ao mediastino posterior?',
        options: [
            'Esôfago, ducto torácico, cadeia simpática',
            'Aorta torácica descendente e veias ázigos/ hemiázigos',
            'Timo adulto e traqueia',
            'Nervos esplâncnicos torácicos'
        ],
        answer: 2,
        correctAnswer: 'Timo adulto e traqueia',
        explanation: `
<strong>Mediastino posterior:</strong> Esôfago, aorta torácica, ducto torácico, veias ázigos/hemiázigos, nervos vagos e esplâncnicos, troncos simpáticos.<br>
<strong>Não pertence:</strong> Timo (predomina no <em>mediastino anterior</em> na infância) e traqueia (no <em>mediastino superior</em>).
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'O nervo frênico percorre qual relação no mediastino?',
        options: [
            'Anterior ao hilo pulmonar, entre pleura mediastinal e pericárdio',
            'Posterior ao esôfago e ao átrio esquerdo',
            'Aderido ao arco da aorta, posterior à artéria pulmonar',
            'Entre traqueia e esôfago, medial à artéria carótida'
        ],
        answer: 0,
        correctAnswer: 'Anterior ao hilo pulmonar, entre pleura mediastinal e pericárdio',
        explanation: `
<strong>Trajeto:</strong> Nervo frênico (C3–C5) desce no mediastino médio, <em>anterior ao hilo pulmonar</em>, firmemente aderido ao pericárdio fibroso, acompanhado dos vasos pericardicofrênicos; inerva o diafragma.
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Em qual lado do corpo o ducto torácico termina e onde drena?',
        options: [
            'Direito; ângulo venoso direito (subclávia + jugular interna direita)',
            'Esquerdo; ângulo venoso esquerdo (subclávia + jugular interna esquerda)',
            'Esquerdo; veia ázigos',
            'Direito; veia cava superior'
        ],
        answer: 1,
        correctAnswer: 'Esquerdo; ângulo venoso esquerdo (subclávia + jugular interna esquerda)',
        explanation: `
<strong>Ducto torácico:</strong> Sobe à direita da linha média e cruza para a esquerda ao nível de T5–T6, drenando no <em>ângulo venoso esquerdo</em> (junção da veia subclávia com a jugular interna).
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual estrutura é <strong>mais anterior</strong> no mediastino superior?',
        options: [
            'Traqueia',
            'Timo (ou tecido adiposo tímico)',
            'Arco da aorta',
            'Esôfago'
        ],
        answer: 1,
        correctAnswer: 'Timo (ou tecido adiposo tímico)',
        explanation: `
No mediastino superior, do anterior para o posterior: <em>timo</em> → grandes veias (BCS/VCS) → arco da <em>aorta</em> e seus ramos → traqueia → esôfago → coluna.
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual afirmação sobre o nervo vago está CORRETA?',
        options: [
            'Corre anterior ao hilo pulmonar e acompanha o pericárdio',
            'Forma plexos sobre esôfago e passa posterior aos hilos pulmonares',
            'Inerva motoramente o diafragma',
            'Não possui ramos no tórax'
        ],
        answer: 1,
        correctAnswer: 'Forma plexos sobre esôfago e passa posterior aos hilos pulmonares',
        explanation: `
<strong>Nervos vagos:</strong> Descem pelo mediastino, contornam os hilos <em>posteriormente</em> e formam o <em>plexo esofágico</em>; contribuem para os plexos cardíacos e pulmonares.
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Quais são os limites do mediastino?',
        options: [
            'Superior: entrada torácica; Inferior: diafragma; Anterior: esterno; Posterior: corpos vertebrais torácicos',
            'Superior: clavículas; Inferior: arco costal; Anterior: escápula; Posterior: coluna lombar',
            'Superior: ângulo do esterno; Inferior: diafragma; Anterior: cartilagens costais; Posterior: costelas flutuantes',
            'Superior: pleura cervical; Inferior: coração; Anterior: pele; Posterior: pulmões'
        ],
        answer: 0,
        correctAnswer: 'Superior: entrada torácica; Inferior: diafragma; Anterior: esterno; Posterior: corpos vertebrais torácicos',
        explanation: `
<strong>Limites clássicos:</strong> Superior = abertura torácica superior; Inferior = diafragma; Anterior = esterno; Posterior = corpos das vértebras T1–T12.
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'O arco da aorta e seus ramos principais localizam-se em qual porção do mediastino?',
        options: [
            'Mediastino superior',
            'Mediastino anterior',
            'Mediastino médio',
            'Mediastino posterior'
        ],
        answer: 0,
        correctAnswer: 'Mediastino superior',
        explanation: `
O <strong>arco da aorta</strong> situa-se no mediastino superior, emitindo <em>tronco braquiocefálico</em>, <em>carótida comum esquerda</em> e <em>subclávia esquerda</em>.
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Sobre o esôfago no tórax, assinale a alternativa CORRETA:',
        options: [
            'Permanece sempre à direita da aorta torácica',
            'É cruzado anteriormente pelo brônquio principal esquerdo e pela aorta',
            'Recebe inervação exclusivamente simpática',
            'Drena linfa para ducto linfático direito'
        ],
        answer: 1,
        correctAnswer: 'É cruzado anteriormente pelo brônquio principal esquerdo e pela aorta',
        explanation: `
O <strong>esôfago torácico</strong> é cruzado <em>anteriormente</em> pelo brônquio principal esquerdo e pela <em>aorta</em>; recebe inervação dos plexos vagais e fibras simpáticas; linfa drena principalmente para <em>ducto torácico</em>.
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual conteúdo é típico do mediastino anterior (em adultos)?',
        options: [
            'Timo volumoso funcional',
            'Tecido adiposo, vasos linfáticos e pequenos vasos',
            'Veia ázigos e ducto torácico',
            'Átrio esquerdo e pericárdio seroso'
        ],
        answer: 1,
        correctAnswer: 'Tecido adiposo, vasos linfáticos e pequenos vasos',
        explanation: `
No <strong>mediastino anterior</strong> adulto predominam <em>tecido adiposo</em>, linfonodos e pequenos vasos; o <em>timo</em> encontra-se involuído (residual fibroadiposo).
        `,
        difficulty: 'fácil',
        disabled: false
    }
];

// Integrar mediastino às questões teóricas de Coração
try {
    if (Array.isArray(quizData.coracaoTeorico) && Array.isArray(quizData.mediastinoTeorico)) {
        quizData.coracaoTeorico = [
            ...quizData.coracaoTeorico,
            ...quizData.mediastinoTeorico
        ];
    }
} catch (e) {
    // fail-safe: ignora se ainda não carregou
}