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

    superioresOssos: [

        // ========================================
        // IMAGEM 1 — Escápula e Úmero (vista geral)
        // Estruturas: 1-Acrômio | 2-Tubérculo maior | 3-Tubérculo menor
        //             4-Sulco intertubercular | 5-Côndilo do úmero
        //             6-Capítulo do úmero | 7-Fossa coronóidea
        //             8-Cavidade glenoidal | 9-Ângulo inferior
        //             10-Fossa subescapular | 11-Processo coracoide
        // ========================================

        // Questão 1 — Acrômio
        (function() {
            const opts = ['Acrômio', 'Processo coracoide', 'Tubérculo maior', 'Ângulo inferior'];
            const correct = 'Acrômio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Acrômio<br>
<strong>Localização:</strong> Projeção lateral da espinha da escápula, formando o teto da articulação do ombro<br>
<strong>Referência:</strong> Ponto de origem do músculo deltóide e inserção do músculo trapézio<br>
<strong>Articulação:</strong> Articula com a clavícula formando a articulação acromioclavicular
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A morfologia do acrômio (tipo I plano, tipo II curvo, tipo III ganchoso) influencia diretamente o risco de <strong>síndrome do impacto subacromial</strong>, comprimindo os tendões do manguito rotador. Acrômios tipo III aumentam significativamente o risco de ruptura do tendão supraespinhal.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 2 — Tubérculo maior (troquiter)
        (function() {
            const opts = ['Tubérculo maior', 'Tubérculo menor', 'Sulco intertubercular', 'Capítulo do úmero'];
            const correct = 'Tubérculo maior';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tubérculo maior (Troquiter)<br>
<strong>Localização:</strong> Proeminência lateral da extremidade proximal do úmero<br>
<strong>Inserções musculares:</strong><br>
&nbsp;&nbsp;• Supraespinhal (faceta superior)<br>
&nbsp;&nbsp;• Infraespinhal (faceta média)<br>
&nbsp;&nbsp;• Redondo menor (faceta inferior)<br>
<strong>Relevância:</strong> Principal sítio de inserção dos músculos do manguito rotador
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Fratura do tubérculo maior</strong> é comum em quedas sobre o ombro ou luxações anteriores do ombro. Pode levar a disfunção do manguito rotador se o fragmento se deslocar superiormente, bloqueando a abdução do braço.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 3 — Tubérculo menor (troquino)
        (function() {
            const opts = ['Tubérculo menor', 'Tubérculo maior', 'Processo coracoide', 'Acrômio'];
            const correct = 'Tubérculo menor';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 3 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tubérculo menor (Troquino)<br>
<strong>Localização:</strong> Proeminência anterior da extremidade proximal do úmero, medial ao tubérculo maior<br>
<strong>Inserção muscular:</strong> Músculo subescapular (único músculo do manguito rotador inserido no tubérculo menor)<br>
<strong>Referência:</strong> Palpável na rotação lateral do braço
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesões do músculo subescapular (inserido no tubérculo menor) podem causar fraqueza na rotação medial e instabilidade anterior do ombro. O <strong>sinal do belly-press</strong> e o <strong>sinal do lift-off</strong> avaliam a integridade desta estrutura.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 4 — Sulco intertubercular
        (function() {
            const opts = ['Sulco intertubercular', 'Fossa coronóidea', 'Fossa subescapular', 'Cavidade glenoidal'];
            const correct = 'Sulco intertubercular';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 4 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Sulco intertubercular (Sulco bicipital)<br>
<strong>Localização:</strong> Canal vertical entre o tubérculo maior e o tubérculo menor do úmero<br>
<strong>Conteúdo:</strong> Tendão da cabeça longa do músculo bíceps braquial<br>
<strong>Revestimento:</strong> O ligamento transverso umeral mantém o tendão dentro do sulco
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>tendinite bicipital</strong> envolve inflamação do tendão da cabeça longa do bíceps dentro deste sulco. O <strong>teste de Speed</strong> (resistência à flexão do ombro com cotovelo estendido e antebraço supinado) é positivo quando há dor na região do sulco intertubercular.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 5 — Côndilo do úmero
        (function() {
            const opts = ['Côndilo do úmero', 'Capítulo do úmero', 'Fossa coronóidea', 'Tubérculo maior'];
            const correct = 'Côndilo do úmero';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 5 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Côndilo do úmero<br>
<strong>Localização:</strong> Extremidade distal do úmero; constitui a superfície articular do cotovelo<br>
<strong>Componentes:</strong><br>
&nbsp;&nbsp;• <strong>Tróclea</strong> (parte medial): articula com a ulna<br>
&nbsp;&nbsp;• <strong>Capítulo</strong> (parte lateral): articula com a cabeça do rádio<br>
<strong>Referência:</strong> Inclui também os epicôndilos medial e lateral
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Fraturas supracondilaras</strong> do úmero são as fraturas de cotovelo mais comuns em crianças (85%), geralmente por queda com o braço estendido. Risco de lesão da artéria braquial e do nervo interósseo anterior.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 6 — Capítulo do úmero
        (function() {
            const opts = ['Capítulo do úmero', 'Côndilo do úmero', 'Tubérculo maior', 'Fossa coronóidea'];
            const correct = 'Capítulo do úmero';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 6 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Capítulo do úmero<br>
<strong>Localização:</strong> Porção lateral e anterior do côndilo do úmero<br>
<strong>Articulação:</strong> Articula com a fóvea (depressão central) da cabeça do rádio, formando a articulação radioumeral<br>
<strong>Formato:</strong> Proeminência esférica lisa, sem extensão para a face posterior do úmero
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>osteocondrite dissecante do capítulo</strong> é comum em jovens atletas (arremessadores, ginastas), causada por microtraumas repetitivos de compressão. A subluxação da cabeça do rádio (<strong>cotovelo de babá</strong>) envolve deslizamento da cabeça radial sobre o capítulo.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 7 — Fossa coronóidea
        (function() {
            const opts = ['Fossa coronóidea', 'Fossa subescapular', 'Sulco intertubercular', 'Cavidade glenoidal'];
            const correct = 'Fossa coronóidea';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 7 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Fossa coronóidea<br>
<strong>Localização:</strong> Depressão na face anterior da extremidade distal do úmero, acima da tróclea<br>
<strong>Função:</strong> Acomoda o processo coronóide da ulna durante a flexão máxima do cotovelo<br>
<strong>Anatomia relacionada:</strong> Oposta à fossa do olécrano (face posterior), que recebe o olécrano na extensão
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fraturas por hiperflexão do cotovelo podem comprimir o processo coronóide contra a fossa coronóidea, resultando em <strong>fratura do processo coronóide</strong>. Também pode acumular fragmentos osteocondrais livres causando bloqueio articular.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 8 — Cavidade glenoidal da escápula
        (function() {
            const opts = ['Cavidade glenoidal da escápula', 'Fossa subescapular', 'Fossa coronóidea', 'Ângulo inferior'];
            const correct = 'Cavidade glenoidal da escápula';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 8 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Cavidade glenoidal da escápula<br>
<strong>Localização:</strong> Superfície articular lateral da escápula, no ângulo lateral<br>
<strong>Articulação:</strong> Articula com a cabeça do úmero formando a articulação glenoumeral (ombro)<br>
<strong>Características:</strong> Superfície relativamente rasa (aprofundada pelo lábio glenoidal); permite grande amplitude de movimento<br>
<strong>Formato:</strong> Oval, com porção superior mais estreita ("vírgula invertida")
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>luxação anterior do ombro</strong> (mais comum — 95%) provoca lesão do lábio glenoidal anterior (<strong>lesão de Bankart</strong>) e pode causar uma impressão na cabeça do úmero (<strong>lesão de Hill-Sachs</strong>). Instabilidade glenoumeral recorrente é tratada pela cirurgia de Latarjet.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 9 — Ângulo inferior da escápula
        (function() {
            const opts = ['Ângulo inferior', 'Acrômio', 'Processo coracoide', 'Cavidade glenoidal da escápula'];
            const correct = 'Ângulo inferior';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 9 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Ângulo inferior da escápula<br>
<strong>Localização:</strong> Ponto mais inferior da escápula, onde as bordas medial e lateral se encontram<br>
<strong>Referência vertebral:</strong> Situado ao nível da 7ª vértebra torácica (T7) quando o braço está ao lado do corpo<br>
<strong>Palpação:</strong> Facilmente palpável; move-se durante os movimentos escapulares
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>escápula alada</strong> (escápula alada) manifesta-se com projeção do ângulo inferior e da borda medial, causada por paralisia do músculo serrátil anterior (lesão do nervo torácico longo — C5-C7). Avaliada pedindo ao paciente para fazer uma flexão de braço contra a parede.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 10 — Fossa subescapular
        (function() {
            const opts = ['Fossa subescapular', 'Fossa coronóidea', 'Cavidade glenoidal da escápula', 'Sulco intertubercular'];
            const correct = 'Fossa subescapular';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 10 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Fossa subescapular<br>
<strong>Localização:</strong> Face anterior (costal/ventral) da escápula, voltada para as costelas<br>
<strong>Origem muscular:</strong> Músculo subescapular — único componente anterior do manguito rotador<br>
<strong>Características:</strong> Vasta depressão côncava com cristas diagonais para inserção das bandas musculares
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão isolada do <strong>músculo subescapular</strong> (originado na fossa subescapular) é frequentemente subdiagnosticada. Causa fraqueza na rotação medial do ombro e instabilidade anterior. O <strong>sinal do belly-press</strong> positivo (incapacidade de manter a mão pressionada contra o abdome sem extensão do punho) é teste clínico diagnóstico.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 11 — Processo coracoide
        (function() {
            const opts = ['Processo coracoide', 'Acrômio', 'Tubérculo menor', 'Ângulo inferior'];
            const correct = 'Processo coracoide';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior1.png',
                question: 'Qual é a estrutura indicada pelo número 11 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Processo coracoide<br>
<strong>Localização:</strong> Projeção anterior da escápula, curvada para cima e para frente como um "dedo dobrado"<br>
<strong>Inserções musculares:</strong><br>
&nbsp;&nbsp;• Músculo peitoral menor (inserção)<br>
&nbsp;&nbsp;• Cabeça curta do músculo bíceps braquial (origem)<br>
&nbsp;&nbsp;• Músculo coracobraquial (origem)<br>
<strong>Ligamentos:</strong> Coracoclavicular (trapezoide e cônoide) e coracoacromial
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>síndrome do impacto coracoide</strong> ocorre quando a cabeça do úmero comprime os tecidos moles entre ela e o processo coracoide, causando dor anterior no ombro. O <strong>espaço coracoumeral</strong> (normal ≥ 8mm) é avaliado na ressonância magnética. Fraturas do processo coracoide são raras mas ocorrem em luxações acromioclaviculares graves.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 2 — Escápula e Úmero (vista posterior/lateral)
        // Estruturas: 1-Clavícula (cortada) | 2-Incisura da escápula | 3-Ângulo superior
        //             4-Fossa supraespinal | 5-Espinha da escápula | 6-Fossa infraespinal
        //             7-Epicôndilo medial | 8-Tróclea do úmero | 9-Fossa do olécrano
        //             10-Tuberosidade para o deltóide | 11-Cabeça do úmero
        // ========================================

        // Questão 1 — Clavícula (cortada)
        (function() {
            const opts = ['Clavícula', 'Espinha da escápula', 'Acrômio', 'Ângulo superior'];
            const correct = 'Clavícula';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Clavícula (seccionada na imagem)<br>
<strong>Formato:</strong> Osso longo em forma de "S" itálico; único osso longo do corpo orientado horizontalmente<br>
<strong>Articulações:</strong><br>
&nbsp;&nbsp;• Medial: esternoclavicular (única ligação do membro superior ao esqueleto axial)<br>
&nbsp;&nbsp;• Lateral: acromioclavicular<br>
<strong>Função:</strong> Suporte e posicionamento do membro superior; proteção do feixe vasculonervoso subclávia
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>fratura de clavícula</strong> é a fratura mais comum do cinto escapular (80% no terço médio). O fragmento lateral cai pelo peso do braço enquanto o medial é puxado superiormente pelo esternocleidomastoideo. Risco de lesão do plexo braquial e da veia subclávia. A aparência "em S" da clavícula é visível na inspeção.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 2 — Incisura da escápula
        (function() {
            const opts = ['Incisura da escápula', 'Fossa supraespinal', 'Ângulo superior', 'Processo coracoide'];
            const correct = 'Incisura da escápula';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Incisura da escápula (Incisura supraescapular)<br>
<strong>Localização:</strong> Borda superior da escápula, medial à base do processo coracoide<br>
<strong>Conteúdo:</strong><br>
&nbsp;&nbsp;• <strong>Nervo supraescapular</strong> → passa <em>sob</em> o ligamento transverso superior da escápula<br>
&nbsp;&nbsp;• <strong>Artéria supraescapular</strong> → passa <em>sobre</em> o ligamento (mnemônico: "o exército passa pelo túnel, o general passa por cima")<br>
<strong>Fechamento:</strong> Ligamento transverso superior da escápula converte a incisura em forame
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Compressão do nervo supraescapular na incisura causa <strong>síndrome do nervo supraescapular</strong>: dor difusa posterior no ombro, fraqueza na abdução e rotação lateral, atrofia das fossas supra e infraespinal. O ligamento pode ossificar, estreitando o forame. Tratada com descompressão cirúrgica.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 3 — Ângulo superior
        (function() {
            const opts = ['Ângulo superior', 'Ângulo inferior', 'Espinha da escápula', 'Incisura da escápula'];
            const correct = 'Ângulo superior';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 3 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Ângulo superior da escápula<br>
<strong>Localização:</strong> Junção das bordas superior e medial da escápula<br>
<strong>Referência vertebral:</strong> Nível de T2 quando o braço está ao lado do corpo<br>
<strong>Inserção muscular:</strong> Músculo levantador da escápula (insere na borda medial e ângulo superior)<br>
<strong>Comparação:</strong> Ângulo inferior situa-se em T7; ângulo superior em T2
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Tensão ou lesão do músculo levantador da escápula (inserido no ângulo superior) é causa comum de dor cervical-escapular, especialmente em pessoas que trabalham longamente com o computador. Dor referida à região do pescoço e ângulo superior da escápula é característica.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 4 — Fossa supraespinal
        (function() {
            const opts = ['Fossa supraespinal', 'Fossa infraespinal', 'Fossa subescapular', 'Fossa coronóidea'];
            const correct = 'Fossa supraespinal';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 4 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Fossa supraespinal (Fossa supraespinhosa)<br>
<strong>Localização:</strong> Face posterior da escápula, <em>acima</em> da espinha da escápula<br>
<strong>Músculo originado:</strong> Supraespinhal — componente mais superior do manguito rotador<br>
<strong>Inervação da fossa:</strong> Nervo supraescapular (passa pela incisura da escápula)<br>
<strong>Distinção:</strong> Separada da fossa infraespinal pela espinha da escápula
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Atrofia muscular visível na fossa supraespinal sugere lesão do nervo supraescapular ou ruptura maciça do tendão supraespinhal. Na RM, sinal de gordura na fossa indica degeneração muscular avançada (<strong>infiltração gordurosa grau 3-4 de Goutallier</strong>), contraindicando reparo cirúrgico em alguns casos.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 5 — Espinha da escápula
        (function() {
            const opts = ['Espinha da escápula', 'Acrômio', 'Borda medial da escápula', 'Clavícula'];
            const correct = 'Espinha da escápula';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 5 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Espinha da escápula<br>
<strong>Localização:</strong> Crista horizontal saliente na face posterior da escápula; nível de T3<br>
<strong>Trajeto:</strong> Parte da borda medial em sentido lateral e ascendente até o acrômio<br>
<strong>Inserções musculares:</strong><br>
&nbsp;&nbsp;• Trapézio (inserção — fibras médias e inferiores)<br>
&nbsp;&nbsp;• Deltóide (origem — parte posterior)<br>
<strong>Divisão:</strong> Separa a fossa supraespinal (acima) da fossa infraespinal (abaixo)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A espinha da escápula é referência de palpação para o nível vertebral de T3 e marco para blocqueios nervosos. A <strong>incisura espinoglenóidea</strong> (base lateral da espinha) é local de compressão do nervo supraescapular — ramo para o infraespinhal — podendo causar atrofia isolada da fossa infraespinal (comum em voleibolistas).
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 6 — Fossa infraespinal
        (function() {
            const opts = ['Fossa infraespinal', 'Fossa supraespinal', 'Fossa subescapular', 'Fossa do olécrano'];
            const correct = 'Fossa infraespinal';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 6 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Fossa infraespinal (Fossa infraespinhosa)<br>
<strong>Localização:</strong> Face posterior da escápula, <em>abaixo</em> da espinha da escápula; maior das fossas posteriores<br>
<strong>Músculos originados:</strong><br>
&nbsp;&nbsp;• <strong>Infraespinhal</strong> (porção medial e central da fossa)<br>
&nbsp;&nbsp;• <strong>Redondo menor</strong> (porção lateral, junto à borda lateral da escápula)<br>
&nbsp;&nbsp;• <strong>Redondo maior</strong> (ângulo inferior, mas não pertence ao manguito)<br>
<strong>Inervação:</strong> Nervo supraescapular (infraespinhal) e nervo axilar (redondo menor)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Atrofia isolada da fossa infraespinal (infraespinhal poupando o supraespinhal) indica lesão do nervo supraescapular <em>distal</em> à incisura supraescapular — tipicamente na <strong>incisura espinoglenóidea</strong>, geralmente causada por cistos ganglionares associados a rupturas do lábio glenoidal posterior.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 7 — Epicôndilo medial
        (function() {
            const opts = ['Epicôndilo medial', 'Epicôndilo lateral', 'Tróclea do úmero', 'Capítulo do úmero'];
            const correct = 'Epicôndilo medial';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 7 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Epicôndilo medial do úmero<br>
<strong>Localização:</strong> Proeminência medial da extremidade distal do úmero; facilmente palpável<br>
<strong>Origens musculares (flexores do antebraço e punho):</strong><br>
&nbsp;&nbsp;• Pronador redondo, flexor radial do carpo, palmar longo, flexor ulnar do carpo, flexor superficial dos dedos<br>
<strong>Estrutura relacionada:</strong> Sulco do nervo ulnar (posterior ao epicôndilo medial)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Epicondilite medial</strong> ("cotovelo do golfista") é tendinopatia dos músculos flexores-pronadores. O <strong>nervo ulnar</strong> passa no sulco posterior ao epicôndilo medial — compressão causa síndrome do túnel cubital (parestesia no 4º e 5º dedos). Fratura por avulsão do epicôndilo medial é comum em crianças com luxação do cotovelo.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 8 — Tróclea do úmero
        (function() {
            const opts = ['Tróclea do úmero', 'Capítulo do úmero', 'Epicôndilo medial', 'Fossa do olécrano'];
            const correct = 'Tróclea do úmero';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 8 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tróclea do úmero<br>
<strong>Localização:</strong> Porção <em>medial</em> do côndilo do úmero (extremidade distal)<br>
<strong>Formato:</strong> Em carola (poleia) — superfície em forma de roldana com sulco central<br>
<strong>Articulação:</strong> Com a incisura troclear (semilunar) da ulna → articulação umeroulnar (dobradiça)<br>
<strong>Extensão:</strong> Ao contrário do capítulo, a tróclea estende-se à face posterior do úmero<br>
<strong>Comparação:</strong> Capítulo (lateral) articula com rádio; tróclea (medial) articula com ulna
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fraturas da tróclea (raras, isoladas) são mais comuns em adultos. Em crianças, fraturas do côndilo medial envolvendo a tróclea podem comprometer o nervo ulnar no sulco adjacente. O <strong>ângulo de carregamento</strong> (valgo fisiológico do cotovelo ~15°) é determinado pela obliquidade da tróclea.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 9 — Fossa do olécrano
        (function() {
            const opts = ['Fossa do olécrano', 'Fossa coronóidea', 'Fossa subescapular', 'Fossa infraespinal'];
            const correct = 'Fossa do olécrano';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 9 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Fossa do olécrano (Fossa olecraneana)<br>
<strong>Localização:</strong> Depressão na face <em>posterior</em> da extremidade distal do úmero, acima da tróclea<br>
<strong>Função:</strong> Acomoda o processo do olécrano da ulna durante a extensão máxima do cotovelo<br>
<strong>Comparação anatômica:</strong><br>
&nbsp;&nbsp;• Fossa do olécrano → face posterior → recebe olécrano na extensão<br>
&nbsp;&nbsp;• Fossa coronóidea → face anterior → recebe processo coronóide na flexão<br>
<strong>Espessura:</strong> A parede entre as duas fossas pode ser muito fina (às vezes perfurada — forame supraepitroclear)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fragmentos ósseos livres (corpos livres articulares) podem se alojar na fossa do olécrano, causando <strong>bloqueio na extensão do cotovelo</strong>. Osteófitos nesta região são comuns em arremessadores (beisebol, handebol) por impacto repetitivo do olécrano — <strong>síndrome do impacto posterior do cotovelo</strong>.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 10 — Tuberosidade para o músculo deltóide
        (function() {
            const opts = ['Tuberosidade deltóidea', 'Tubérculo maior', 'Tubérculo menor', 'Epicôndilo lateral'];
            const correct = 'Tuberosidade deltóidea';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 10 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tuberosidade deltóidea (Tuberosidade para o músculo deltóide)<br>
<strong>Localização:</strong> Face ântero-lateral da diáfise do úmero, no terço médio<br>
<strong>Inserção muscular:</strong> Músculo deltóide — todos os seus 3 feixes (anterior, médio e posterior)<br>
<strong>Formato:</strong> Elevação rugosa em forma de "V" invertido, visível na face lateral do úmero<br>
<strong>Relevância:</strong> Marco anatômico que divide a diáfise umeral em terço proximal e médio
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O <strong>nervo radial</strong> espirala ao redor da face posterior do úmero (sulco do nervo radial) passando lateralmente logo abaixo da tuberosidade deltóidea. Fraturas do terço médio do úmero nesta região têm alto risco de <strong>lesão do nervo radial</strong> (queda do punho — "wrist drop"), ocorrendo em 10–18% dos casos.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 11 — Cabeça do úmero
        (function() {
            const opts = ['Cabeça do úmero', 'Tubérculo maior', 'Capítulo do úmero', 'Cavidade glenoidal'];
            const correct = 'Cabeça do úmero';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior2.png',
                question: 'Qual é a estrutura indicada pelo número 11 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Cabeça do úmero<br>
<strong>Localização:</strong> Extremidade proximal do úmero; porção esférica voltada medialmente, superiormente e posteriormente<br>
<strong>Articulação:</strong> Com a cavidade glenoidal da escápula → articulação glenoumeral (esferóidea — maior amplitude de movimento do corpo)<br>
<strong>Cobertura cartilaginosa:</strong> Representa ~1/3 de uma esfera; recoberta por cartilagem hialina<br>
<strong>Colo anatômico:</strong> Sulco que separa a cabeça dos tubérculos (maior e menor)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Na <strong>luxação anterior do ombro</strong>, a cabeça umeral desloca-se anteriormente à cavidade glenoidal, podendo causar uma impressão na face póstero-lateral da cabeça — <strong>lesão de Hill-Sachs</strong>. Identificada na radiografia em rotação interna e na RM. Lesões grandes ("off-track") aumentam o risco de recidiva e podem necessitar de cirurgia óssea (Latarjet ou greffe ósseo).
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // ========================================
        // IMAGEM 3 — Rádio e Ulna (cotovelo e antebraço)
        // Estruturas: 1-Capítulo do úmero | 2-Cabeça do rádio | 3-Tuberosidade do rádio
        //             4-Tuberosidade da ulna | 5-Colo do rádio | 6-Cabeça do rádio (outra vista)
        //             7-Olécrano | 8-Epicôndilo lateral | 9-Fossa do olécrano
        // ========================================

        // Questão 1 — Capítulo do úmero
        (function() {
            const opts = ['Capítulo do úmero', 'Tróclea do úmero', 'Epicôndilo lateral', 'Cabeça do rádio'];
            const correct = 'Capítulo do úmero';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Capítulo do úmero<br>
<strong>Localização:</strong> Porção lateral e anterior do côndilo do úmero<br>
<strong>Articulação:</strong> Com a fóvea (depressão central) da cabeça do rádio → articulação radioumeral (uniaxial)<br>
<strong>Formato:</strong> Proeminência esférica lisa; não se estende à face posterior do úmero<br>
<strong>Distinção:</strong> O capítulo articula com o rádio; a tróclea (medial) articula com a ulna
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>osteocondrite dissecante do capítulo</strong> é frequente em jovens arremessadores e ginastas, por microtraumas de compressão repetitivos. Pode evoluir para formação de corpos livres articulares causando bloqueio do cotovelo. O <strong>cotovelo de babá</strong> (subluxação da cabeça radial) envolve deslizamento da cabeça do rádio sobre o capítulo.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 2 — Cabeça do rádio
        (function() {
            const opts = ['Cabeça do rádio', 'Capítulo do úmero', 'Colo do rádio', 'Olécrano'];
            const correct = 'Cabeça do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Cabeça do rádio<br>
<strong>Localização:</strong> Extremidade proximal do rádio, em formato de disco<br>
<strong>Articulações:</strong><br>
&nbsp;&nbsp;• Superior: com o capítulo do úmero (articulação radioumeral)<br>
&nbsp;&nbsp;• Medial: com a incisura radial da ulna (articulação radioulnar proximal)<br>
<strong>Função:</strong> Permite pronação e supinação do antebraço<br>
<strong>Estabilização:</strong> Ligamento anular do rádio (mantém a cabeça radial junto à ulna)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Fratura da cabeça do rádio</strong> é a fratura mais comum do cotovelo em adultos, geralmente por queda com o braço estendido e o antebraço pronado. Classificação de Mason (I-IV). Fraturas cominutivas (tipo III-IV) podem necessitar de ressecção ou artroplastia. Dor à palpação lateral do cotovelo e bloqueio na rotação são sinais característicos.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 3 — Tuberosidade do rádio
        (function() {
            const opts = ['Tuberosidade do rádio', 'Tuberosidade da ulna', 'Colo do rádio', 'Cabeça do rádio'];
            const correct = 'Tuberosidade do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 3 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tuberosidade do rádio (Tuberosidade bicipital)<br>
<strong>Localização:</strong> Face medial do rádio, logo abaixo do colo; demarca a transição colo-diáfise<br>
<strong>Inserção muscular:</strong> Tendão do músculo bíceps braquial — principal inserção distal<br>
<strong>Função:</strong> Ponto de tração do bíceps para flexão do cotovelo e supinação do antebraço<br>
<strong>Orientação:</strong> Na supinação, a tuberosidade gira para medial (maximizando a vantagem mecânica do bíceps)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>ruptura do tendão distal do bíceps</strong> (avulsão da tuberosidade do rádio) ocorre tipicamente em homens de meia-idade durante esforço excêntrico súbito. Causa deformidade em "bola de Popeye" proximal, fraqueza acentuada na supinação (maior perda) e flexão. Tratamento cirúrgico com reinserção na tuberosidade.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 4 — Tuberosidade da ulna
        (function() {
            const opts = ['Tuberosidade da ulna', 'Tuberosidade do rádio', 'Olécrano', 'Processo coronóide'];
            const correct = 'Tuberosidade da ulna';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 4 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tuberosidade da ulna<br>
<strong>Localização:</strong> Face anterior da ulna, logo abaixo do processo coronóide<br>
<strong>Inserção muscular:</strong> Músculo braquial — principal flexor do cotovelo (independente da posição do antebraço)<br>
<strong>Distinção da tuberosidade radial:</strong> A tuberosidade ulnar recebe o braquial; a radial recebe o bíceps<br>
<strong>Referência:</strong> Marco da transição entre a extremidade proximal e a diáfise da ulna
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O músculo braquial (inserido na tuberosidade da ulna) é o único flexor puro do cotovelo — atua tanto na pronação quanto na supinação, ao contrário do bíceps. Lesões do músculo braquial por miosite ossificante são mais frequentes após fraturas do cotovelo ou mobilização precoce agressiva.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 5 — Colo do rádio
        (function() {
            const opts = ['Colo do rádio', 'Cabeça do rádio', 'Tuberosidade do rádio', 'Diáfise do rádio'];
            const correct = 'Colo do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 5 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Colo do rádio<br>
<strong>Localização:</strong> Porção cilíndrica estreita entre a cabeça do rádio (proximal) e a tuberosidade bicipital (distal)<br>
<strong>Revestimento:</strong> Envolvido pelo ligamento anular, que estabiliza a cabeça radial junto à ulna<br>
<strong>Angulação:</strong> Forma um ângulo de ~15° com a diáfise na visão frontal
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Fraturas do colo do rádio</strong> são mais comuns em crianças (o colo é mais vulnerável que a cabeça cartilaginosa). O nervo interósseo posterior (ramo profundo do nervo radial) contorna o colo do rádio passando pelo músculo supinador — pode ser lesado em fraturas do colo ou comprimido na <strong>síndrome do túnel radial</strong>.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 6 — Cabeça do rádio (outra vista)
        (function() {
            const opts = ['Cabeça do rádio', 'Colo do rádio', 'Capítulo do úmero', 'Tuberosidade do rádio'];
            const correct = 'Cabeça do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 6 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Cabeça do rádio (vista em diferente ângulo)<br>
<strong>Formato:</strong> Disco cilíndrico com fóvea central (depressão que articula com o capítulo) e borda circunferencial (que articula com a incisura radial da ulna)<br>
<strong>Movimento:</strong> Gira sobre seu próprio eixo longo durante pronação/supinação dentro do ligamento anular<br>
<strong>Palpação:</strong> Palpável na face lateral do cotovelo, distal ao epicôndilo lateral; desloca-se durante a rotação do antebraço
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O <strong>cotovelo de babá</strong> (pronação dolorosa, subluxação da cabeça radial) ocorre em crianças <5 anos quando o antebraço é puxado com força em pronação — a cabeça radial desliza parcialmente para fora do ligamento anular. Redução simples por supinação + flexão resolve o quadro imediatamente, sem necessidade de imagem.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 7 — Olécrano
        (function() {
            const opts = ['Olécrano', 'Processo coronóide', 'Epicôndilo medial', 'Tuberosidade da ulna'];
            const correct = 'Olécrano';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 7 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Olécrano<br>
<strong>Localização:</strong> Proeminência posterior da extremidade proximal da ulna — o "cotovelo" palpável<br>
<strong>Articulação:</strong> Encaixa-se na fossa do olécrano do úmero durante a extensão total do cotovelo<br>
<strong>Inserção muscular:</strong> Músculo tríceps braquial (tendão distal) — principal extensor do cotovelo<br>
<strong>Bursa:</strong> Bursa do olécrano (subcutânea) facilita o deslizamento da pele sobre o osso
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Bursite do olécrano</strong> (inflamação da bursa subcutânea) causa edema flutuante na ponta do cotovelo com movimento preservado — diferente de artrite. Causas: trauma repetitivo, gota, sepse. <strong>Fraturas do olécrano</strong> comprometem o mecanismo extensor (tríceps) e geralmente necessitam de fixação cirúrgica com fio e banda de tensão.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 8 — Epicôndilo lateral
        (function() {
            const opts = ['Epicôndilo lateral', 'Epicôndilo medial', 'Capítulo do úmero', 'Cabeça do rádio'];
            const correct = 'Epicôndilo lateral';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 8 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Epicôndilo lateral do úmero<br>
<strong>Localização:</strong> Proeminência lateral da extremidade distal do úmero<br>
<strong>Origens musculares (extensores do antebraço e punho):</strong><br>
&nbsp;&nbsp;• Extensor radial curto do carpo, extensor dos dedos, extensor ulnar do carpo, supinador, ancôneo<br>
<strong>Ligamento:</strong> Ligamento colateral radial origina-se no epicôndilo lateral<br>
<strong>Comparação:</strong> Epicôndilo medial (maior, mais proeminente) → flexores; lateral → extensores
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Epicondilite lateral</strong> ("cotovelo de tenista") é a tendinopatia mais comum do cotovelo, afetando principalmente o extensor radial curto do carpo. Dor à palpação do epicôndilo lateral, piora ao estender o punho contra resistência (<strong>teste de Cozen</strong>). Tratamento conservador (fisioterapia, infiltração) em 90% dos casos.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 9 — Fossa do olécrano
        (function() {
            const opts = ['Fossa do olécrano', 'Fossa coronóidea', 'Fossa infraespinal', 'Fossa subescapular'];
            const correct = 'Fossa do olécrano';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior3.png',
                question: 'Qual é a estrutura indicada pelo número 9 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Fossa do olécrano<br>
<strong>Localização:</strong> Depressão na face posterior da extremidade distal do úmero, acima da tróclea<br>
<strong>Função:</strong> Acomoda o olécrano da ulna durante a extensão máxima do cotovelo (0°)<br>
<strong>Anatomia relacionada:</strong><br>
&nbsp;&nbsp;• Face posterior → fossa do olécrano (extensão)<br>
&nbsp;&nbsp;• Face anterior → fossa coronóidea (flexão) + fossa radial lateral (cabeça do rádio na flexão)<br>
<strong>Espessura:</strong> A parede entre as fossas anterior e posterior pode ser muito delgada ou perfurada
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O impacto repetitivo do olécrano contra a fossa em arremessadores causa <strong>síndrome do impacto posterior do cotovelo</strong> — formação de osteófitos, fragmentos livres e dor na extensão terminal. Comum em arremessadores de beisebol e handebol. Na extensão forçada, pode ocorrer avulsão do olécrano pelo tríceps.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 4 — Rádio e Ulna completos (vista anterior/posterior)
        // Estruturas: 1-Cabeça do rádio | 2-Colo do rádio | 3-Tuberosidade do rádio
        //             4-Membrana interóssea | 5-Processo estiloide da ulna
        //             6-Tuberosidade da ulna | 7-Incisura troclear | 8-Olécrano
        //             9-Tubérculo dorsal | 10-Processo estiloide (do rádio)
        // ========================================

        // Questão 1 — Cabeça do rádio
        (function() {
            const opts = ['Cabeça do rádio', 'Cabeça da ulna', 'Colo do rádio', 'Capítulo do úmero'];
            const correct = 'Cabeça do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Cabeça do rádio<br>
<strong>Localização:</strong> Extremidade proximal do rádio, formato de disco<br>
<strong>Articulações:</strong><br>
&nbsp;&nbsp;• Com o capítulo do úmero (articulação radioumeral)<br>
&nbsp;&nbsp;• Com a incisura radial da ulna (articulação radioulnar proximal)<br>
<strong>Ligamento anular:</strong> Abraça a cabeça do rádio mantendo-a junto à ulna durante a rotação<br>
<strong>Movimento:</strong> Gira sobre o próprio eixo durante pronação e supinação do antebraço
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura da cabeça do rádio é a fratura mais comum do cotovelo em adultos. A <strong>classificação de Mason</strong> orienta o tratamento: tipo I (não deslocada → conservador), tipo II (deslocada parcial → fixação), tipo III (cominutiva → artroplastia), tipo IV (com luxação do cotovelo → cirurgia urgente).
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 2 — Colo do rádio
        (function() {
            const opts = ['Colo do rádio', 'Cabeça do rádio', 'Tuberosidade do rádio', 'Diáfise do rádio'];
            const correct = 'Colo do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Colo do rádio<br>
<strong>Localização:</strong> Segmento cilíndrico estreito entre a cabeça e a tuberosidade do rádio<br>
<strong>Revestimento:</strong> Circundado pelo ligamento anular que estabiliza a articulação radioulnar proximal<br>
<strong>Nervo adjacente:</strong> Nervo interósseo posterior (ramo do nervo radial) contorna o colo ao entrar no músculo supinador<br>
<strong>Angulação:</strong> Forma ~15° com a diáfise, criando um deslocamento lateral da cabeça em relação ao eixo do rádio
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fraturas do colo do rádio são mais comuns em crianças (epífise cartilaginosa protegida). O nervo interósseo posterior que contorna o colo pode ser lesado em fraturas deslocadas ou durante cirurgias do cotovelo, causando queda dos dedos (drop finger) sem perda sensitiva significativa.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 3 — Tuberosidade do rádio
        (function() {
            const opts = ['Tuberosidade do rádio', 'Tuberosidade da ulna', 'Colo do rádio', 'Processo estiloide do rádio'];
            const correct = 'Tuberosidade do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 3 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tuberosidade do rádio (Tuberosidade bicipital)<br>
<strong>Localização:</strong> Face medial do rádio, imediatamente distal ao colo<br>
<strong>Inserção muscular:</strong> Tendão distal do músculo bíceps braquial<br>
<strong>Orientação funcional:</strong> Na supinação máxima a tuberosidade aponta medialmente (posição de maior vantagem mecânica do bíceps); na pronação aponta posteriormente<br>
<strong>Referência cirúrgica:</strong> Marco para abordagem anterior do cotovelo (via Henry)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Avulsão do tendão distal do bíceps na tuberosidade radial é mais comum em homens de 40–60 anos durante esforço excêntrico súbito (levantar carga pesada). Perda de ~50% da força de supinação e ~30% da flexão. Reparo cirúrgico precoce com reinserção através de âncoras ou parafuso de interferência na tuberosidade.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 4 — Membrana interóssea
        (function() {
            const opts = ['Membrana interóssea', 'Ligamento anular do rádio', 'Ligamento colateral ulnar', 'Fáscia do antebraço'];
            const correct = 'Membrana interóssea';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 4 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Membrana interóssea do antebraço<br>
<strong>Localização:</strong> Lâmina fibrosa entre as bordas interósseas do rádio e da ulna ao longo de toda a diáfise<br>
<strong>Orientação das fibras:</strong> Oblíquas — do rádio proximalmente para a ulna distalmente (transferem cargas)<br>
<strong>Funções:</strong><br>
&nbsp;&nbsp;• Transferir forças do rádio para a ulna (75% da carga axial passa pelo rádio na mão)<br>
&nbsp;&nbsp;• Separar os compartimentos anterior e posterior do antebraço<br>
&nbsp;&nbsp;• Origem de músculos profundos do antebraço (flexor longo do polegar, flexor profundo dos dedos, extensor longo do polegar)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão da membrana interóssea ocorre na <strong>fratura de Essex-Lopresti</strong> (fratura cominutiva da cabeça do rádio + ruptura da membrana interóssea + instabilidade radioulnar distal). Resulta em migração proximal do rádio se a cabeça for ressecada sem reposição. O <strong>nervo interósseo anterior</strong> (ramo do mediano) desce pela face anterior da membrana.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 5 — Processo estiloide da ulna
        (function() {
            const opts = ['Processo estiloide da ulna', 'Processo estiloide do rádio', 'Cabeça da ulna', 'Tubérculo dorsal'];
            const correct = 'Processo estiloide da ulna';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 5 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Processo estiloide da ulna<br>
<strong>Localização:</strong> Projeção cônica posterior-medial da extremidade distal da ulna (cabeça da ulna)<br>
<strong>Inserção ligamentar:</strong> Complexo fibrocartilaginoso triangular (TFCC) e ligamentos ulnocarpais<br>
<strong>Comprimento:</strong> Normalmente mais curto que o processo estiloide do rádio (1–2 mm mais proximal)<br>
<strong>Palpação:</strong> Proeminência posteromedial palpável no pulso, mais visível com o pulso em flexão palmar
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura do processo estiloide da ulna é frequente na <strong>fratura de Colles</strong> (fratura distal do rádio por queda). Fragmento de base: associado a lesão do TFCC e instabilidade radioulnar distal. Dor à palpação do processo estiloide ulnar e teste de torção (ulnar fovea sign) positivo indicam lesão do TFCC.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 6 — Tuberosidade da ulna
        (function() {
            const opts = ['Tuberosidade da ulna', 'Tuberosidade do rádio', 'Processo coronóide', 'Olécrano'];
            const correct = 'Tuberosidade da ulna';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 6 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tuberosidade da ulna<br>
<strong>Localização:</strong> Face anterior da ulna, imediatamente distal ao processo coronóide<br>
<strong>Inserção muscular:</strong> Músculo braquial — principal flexor do cotovelo, independente da posição de rotação do antebraço<br>
<strong>Distinção:</strong> Tuberosidade ulnar → braquial; tuberosidade radial → bíceps braquial<br>
<strong>Inervação do braquial:</strong> Nervo musculocutâneo (ramo principal) + pequeno ramo do nervo radial
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O músculo braquial (inserido na tuberosidade da ulna) é considerado o "cavalo de batalha" da flexão do cotovelo por ser o único flexor puro. Miosite ossificante traumática do braquial é complicação de fraturas do cotovelo ou manipulações agressivas, resultando em limitação progressiva da flexão por calcificação intramuscular.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 7 — Incisura troclear
        (function() {
            const opts = ['Incisura troclear', 'Incisura radial', 'Fossa do olécrano', 'Fossa coronóidea'];
            const correct = 'Incisura troclear';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 7 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Incisura troclear (Incisura semilunar)<br>
<strong>Localização:</strong> Grande depressão côncava na extremidade proximal da ulna, formada pelo olécrano (posterior) e processo coronóide (anterior)<br>
<strong>Articulação:</strong> Encaixa-se na tróclea do úmero → articulação umeroulnar (dobradiça — gínglimo)<br>
<strong>Formato:</strong> Em forma de meia-lua ("semilunar"); permite apenas flexão e extensão do cotovelo<br>
<strong>Crista central:</strong> Divide a superfície articular em porções medial e lateral
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fraturas que envolvem a incisura troclear (fraturas do olécrano + processo coronóide) comprometem a estabilidade do cotovelo. A <strong>tríade terrível do cotovelo</strong> (fratura do processo coronóide + fratura da cabeça do rádio + luxação do cotovelo) é lesão grave que ameaça a congruência articular umeroulnar.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 8 — Olécrano
        (function() {
            const opts = ['Olécrano', 'Processo coronóide', 'Incisura troclear', 'Tuberosidade da ulna'];
            const correct = 'Olécrano';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 8 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Olécrano<br>
<strong>Localização:</strong> Proeminência posterior da extremidade proximal da ulna; "ponta do cotovelo" palpável<br>
<strong>Componente da incisura troclear:</strong> Forma a borda posterior/superior da incisura (junto com o processo coronóide anterior)<br>
<strong>Inserção:</strong> Músculo tríceps braquial (tendão distal) — principal extensor do cotovelo<br>
<strong>Relação vascular:</strong> Artéria colateral ulnar posterior e artéria recorrente ulnar posterior formam rede anastomótica ao redor
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fraturas do olécrano interrompem o mecanismo extensor e geralmente requerem fixação com <strong>fio de Kirschner + banda de tensão</strong> (osteossíntese). A bursite do olécrano é distinta: coleção flutuante subcutânea sem limitação de movimento — tratada com punção ou ressecção se refratária.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 9 — Tubérculo dorsal
        (function() {
            const opts = ['Tubérculo dorsal do rádio', 'Processo estiloide do rádio', 'Processo estiloide da ulna', 'Cabeça da ulna'];
            const correct = 'Tubérculo dorsal do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 9 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Tubérculo dorsal do rádio (Tubérculo de Lister)<br>
<strong>Localização:</strong> Proeminência na face posterior da extremidade distal do rádio, na linha média<br>
<strong>Função:</strong> Serve de polia para o tendão do extensor longo do polegar (EPL), que contorna o tubérculo e muda sua direção<br>
<strong>Referência cirúrgica:</strong> Marco importante para identificação do EPL na face dorsal do punho<br>
<strong>Palpação:</strong> Facilmente palpável como pequena saliência na face dorsal do pulso
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Ruptura espontânea do EPL</strong> (extensor longo do polegar) pode ocorrer semanas após fratura de Colles não deslocada por isquemia do tendão no canal adjacente ao tubérculo de Lister. O paciente perde a extensão da falange distal do polegar. Tratamento com transposição do extensor próprio do indicador (EIP).
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 10 — Processo estiloide do rádio
        (function() {
            const opts = ['Processo estiloide do rádio', 'Processo estiloide da ulna', 'Tubérculo dorsal', 'Cabeça da ulna'];
            const correct = 'Processo estiloide do rádio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior4.png',
                question: 'Qual é a estrutura indicada pelo número 10 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Processo estiloide do rádio<br>
<strong>Localização:</strong> Projeção cônica na face lateral (radial) da extremidade distal do rádio<br>
<strong>Comprimento:</strong> Projeta-se ~1 cm mais distalmente que o processo estiloide da ulna — assimetria normal<br>
<strong>Inserção ligamentar:</strong> Ligamento colateral radial do carpo e retináculo dos flexores<br>
<strong>Referência:</strong> Palpável na "tabaqueira anatômica" junto ao tendão do braquiorradial
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura por avulsão do processo estiloide do rádio (fratura de <strong>Hutchinson</strong> ou fratura do chauffeur) ocorre por tração do ligamento colateral radial em luxações radiocarpal. Na <strong>fratura de Colles</strong>, o processo estiloide pode estar incluído — se deslocado, compromete a estabilidade ligamentar lateral do pulso.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 5 — Ossos da mão (carpo, metacarpo, falanges)
        // Estruturas: 1-Escafoide | 2-Trapézio | 3-Trapezoide | 4-Metacarpais
        //             5-Falanges proximais | 6-Falanges médias | 7-Falanges distais
        //             8-Capitato | 9-Semilunar | 10-Hamato | 11-Pisiforme | 12-Piramidal
        // ========================================

        // Questão 1 — Escafoide e Tubérculo
        (function() {
            const opts = ['Escafoide', 'Semilunar', 'Trapézio', 'Capitato'];
            const correct = 'Escafoide';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Escafoide (com seu tubérculo)<br>
<strong>Localização:</strong> Fileira proximal do carpo, lado radial (lateral); maior osso do carpo proximal<br>
<strong>Articulações:</strong> Rádio, semilunar, trapézio, trapezoide e capitato<br>
<strong>Tubérculo do escafoide:</strong> Proeminência palpável no assoalho da tabaqueira anatômica e na face palmar do punho<br>
<strong>Vascularização:</strong> Suprimento retrógrado (entra distalmente) — a porção proximal é avascular
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Fratura do escafoide</strong> é a fratura de carpo mais comum (70%), tipicamente por queda com o punho em dorsiflexão. Dor na tabaqueira anatômica é o sinal clínico clássico. Risco de <strong>necrose avascular</strong> do polo proximal (25–33% das fraturas não tratadas) pela vascularização precária. Pode precisar de fixação com parafuso de Herbert.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 2 — Trapézio e Tubérculo
        (function() {
            const opts = ['Trapézio', 'Trapezoide', 'Escafoide', 'Capitato'];
            const correct = 'Trapézio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Trapézio (com seu tubérculo)<br>
<strong>Localização:</strong> Fileira distal do carpo, lado radial; articula com o 1º metacarpal (polegar)<br>
<strong>Articulação carpometacarpal do polegar:</strong> Sela (selar) — permite oponência do polegar<br>
<strong>Tubérculo do trapézio:</strong> Proeminência na face palmar; serve de apoio para o retináculo dos flexores (canal do carpo)<br>
<strong>Canal do trapézio:</strong> Por onde passa o tendão do flexor radial do carpo
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A articulação carpometacarpal do polegar (trapézio-metacarpal) é a mais frequentemente acometida por <strong>artrose do carpo</strong> (rizoartrose), causando dor na base do polegar, crepitação e fraqueza de pinça. Tratamento inclui órtese, infiltração ou trapezectomia cirúrgica com ou sem ligamentoplastia.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 3 — Trapezoide
        (function() {
            const opts = ['Trapezoide', 'Trapézio', 'Capitato', 'Escafoide'];
            const correct = 'Trapezoide';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 3 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Trapezoide<br>
<strong>Localização:</strong> Fileira distal do carpo, entre o trapézio (radial) e o capitato (central)<br>
<strong>Articulações:</strong> Escafoide (proximal), trapézio (lateral), capitato (medial), 2º metacarpal (distal)<br>
<strong>Formato:</strong> Menor dos ossos da fileira distal do carpo; formato de cunha<br>
<strong>Estabilidade:</strong> Encaixado firmemente no "arco do carpo" — raramente fraturado isoladamente
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura isolada do trapezoide é extremamente rara (<1% das fraturas de carpo) por sua posição protegida no encaixe do arco carpal. Quando ocorre, geralmente é por trauma axial direto no 2º metacarpal. Pode ser confundida com fraturas do trapézio ou capitato na radiografia simples; TC é necessária para diagnóstico.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 4 — Ossos metacarpais
        (function() {
            const opts = ['Ossos metacarpais', 'Falanges proximais', 'Ossos do carpo', 'Falanges médias'];
            const correct = 'Ossos metacarpais';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 4 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Ossos metacarpais (1º ao 5º)<br>
<strong>Localização:</strong> Entre o carpo (proximal) e as falanges proximais (distal); formam a palma da mão<br>
<strong>Componentes de cada metacarpal:</strong> Base (proximal), diáfise e cabeça (distal — forma os "nós" dos dedos)<br>
<strong>Articulações:</strong><br>
&nbsp;&nbsp;• Carpometacarpais (proximal): 1º = sela; 2º-5º = planas (artrodias)<br>
&nbsp;&nbsp;• Metacarpofalângicas (distal): esferóideas — flexão, extensão, abdução, adução
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Fratura do 5º metacarpal</strong> ("fratura do boxeador") é a fratura mais comum da mão, por soco com o punho fechado. Ocorre no colo do 5º metacarpal com angulação volar da cabeça. Tratamento conservador em angulações até 40°.  Fraturas da base do 1º metacarpal: Bennett (intra-articular) e Rolando (cominutiva) envolvem a articulação carpometacarpal do polegar.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 5 — Falanges proximais
        (function() {
            const opts = ['Falanges proximais', 'Falanges médias', 'Falanges distais', 'Ossos metacarpais'];
            const correct = 'Falanges proximais';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 5 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Falanges proximais (1ª falange de cada dedo)<br>
<strong>Localização:</strong> Primeiro segmento ósseo dos dedos, articulando proximalmente com as cabeças dos metacarpais<br>
<strong>Articulações:</strong><br>
&nbsp;&nbsp;• MF (metacarpofalângica) proximal: esferóidea<br>
&nbsp;&nbsp;• IFP (interfalângica proximal) distal: dobradiça (gínglimo)<br>
<strong>Observação:</strong> O polegar possui apenas falange proximal e distal (sem falange média — 2 falanges no total)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fraturas das falanges proximais são comuns em esportes de contato. Desvio rotacional é frequente e deve ser corrigido — detectado pedindo ao paciente para flexionar os dedos (todos devem apontar para o escafoide). A articulação IFP é a mais frequentemente luxada da mão; luxações dorsais são as mais comuns.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 6 — Falanges médias
        (function() {
            const opts = ['Falanges médias', 'Falanges proximais', 'Falanges distais', 'Ossos metacarpais'];
            const correct = 'Falanges médias';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 6 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Falanges médias (2ª falange dos dedos 2–5)<br>
<strong>Localização:</strong> Segmento osseo intermediário dos dedos 2 a 5 (polegar <strong>não possui</strong> falange média)<br>
<strong>Articulações:</strong><br>
&nbsp;&nbsp;• IFP (interfalângica proximal): com a falange proximal<br>
&nbsp;&nbsp;• IFD (interfalângica distal): com a falange distal<br>
<strong>Inserções:</strong> Flexor superficial dos dedos (face palmar) e banda central do aparelho extensor (face dorsal)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão da banda central do aparelho extensor na base da falange média causa a <strong>deformidade em boutonnière</strong> (flexão IFP + hiperextensão IFD). Avulsão da inserção do flexor superficial (FSD) na falange média é incomum mas causa perda da flexão IFP — diferente da ruptura do FPD que afeta a IFD.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 7 — Falanges distais
        (function() {
            const opts = ['Falanges distais', 'Falanges médias', 'Falanges proximais', 'Ossos sesamoides'];
            const correct = 'Falanges distais';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 7 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Falanges distais (3ª falange dos dedos 2–5; 2ª do polegar)<br>
<strong>Localização:</strong> Segmento terminal de cada dedo; sustenta a polpa digital e a unha<br>
<strong>Tuberosidade distal:</strong> Alargamento na extremidade distal (sustenta a polpa e fixa a pele)<br>
<strong>Inserções:</strong><br>
&nbsp;&nbsp;• Flexor profundo dos dedos (face palmar)<br>
&nbsp;&nbsp;• Extensor terminal/bandas laterais do aparelho extensor (face dorsal)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Avulsão do tendão extensor na base da falange distal causa o <strong>dedo em martelo</strong> (mallet finger) — flexão fixa da IFD sem extensão ativa. Tratamento conservador com tala em extensão por 6–8 semanas. Avulsão do flexor profundo (jersey finger) ocorre ao agarrar a camisa do adversário, requerendo reparo cirúrgico precoce.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // Questão 8 — Capitato
        (function() {
            const opts = ['Capitato', 'Hamato', 'Semilunar', 'Trapezoide'];
            const correct = 'Capitato';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 8 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Capitato<br>
<strong>Localização:</strong> Centro da fileira distal do carpo; maior osso do carpo<br>
<strong>Articulações:</strong> Semilunar e escafoide (proximal), trapezoide (radial), hamato (ulnar), 2º-4º metacarpais (distal)<br>
<strong>Posição central:</strong> Considerado a "pedra angular" do carpo; eixo de rotação do punho<br>
<strong>Vascularização:</strong> Entra distalmente — polo proximal tem risco de necrose avascular (menor que o escafoide)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura do capitato isolada é rara; quando ocorre, frequentemente está associada à fratura do escafoide (<strong>síndrome de escafoide-capitato</strong>). Na <strong>luxação perilunar do carpo</strong>, o capitato desloca-se dorsal ao semilunar — lesão grave por trauma de alta energia. O capitato é o osso que primeiro ossifica no carpo (1–2 meses de vida).
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 9 — Semilunar
        (function() {
            const opts = ['Semilunar', 'Escafoide', 'Piramidal', 'Capitato'];
            const correct = 'Semilunar';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 9 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Semilunar (Osso Lunar)<br>
<strong>Localização:</strong> Fileira proximal do carpo, posição central entre o escafoide (radial) e o piramidal (ulnar)<br>
<strong>Formato:</strong> Em lua crescente (formato de meia-lua) — daí seu nome<br>
<strong>Articulações:</strong> Rádio e disco articular (proximal), capitato e hamato (distal), escafoide e piramidal (laterais)<br>
<strong>Relevância:</strong> Participa de ~80% da superfície articular do punho
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Doença de Kienböck</strong> (necrose avascular do semilunar) causa dor dorsal no punho progressiva, perda de força e amplitude de movimento. Classificação de Lichtman (I–IV). Pode ser associada à variante ulnar negativa (ulna mais curta que rádio). A <strong>luxação do semilunar</strong> (para palmar) é a lesão mais grave da fileira proximal do carpo.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 10 — Hamato e Hâmulo
        (function() {
            const opts = ['Hamato', 'Capitato', 'Pisiforme', 'Piramidal'];
            const correct = 'Hamato';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 10 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Hamato (com seu hâmulo)<br>
<strong>Localização:</strong> Fileira distal do carpo, lado ulnar<br>
<strong>Hâmulo:</strong> Processo em forma de gancho na face palmar — dá nome ao osso ("hamato" = gancho)<br>
<strong>Canal de Guyon:</strong> O hâmulo forma a parede lateral do canal de Guyon (por onde passa o nervo ulnar)<br>
<strong>Articulações:</strong> Piramidal (proximal), capitato (radial), 4º e 5º metacarpais (distal)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura do hâmulo do hamato ocorre em esportes com raquetes/bastões (golfe, beisebol, tênis) por impacto repetitivo. Causa dor hipotenar e <strong>compressão do nervo ulnar no canal de Guyon</strong> (parestesia no 4º–5º dedos, fraqueza dos intrínsecos). Tratamento: excisão do fragmento do hâmulo.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // Questão 11 — Pisiforme
        (function() {
            const opts = ['Pisiforme', 'Piramidal', 'Hamato', 'Semilunar'];
            const correct = 'Pisiforme';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 11 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Pisiforme<br>
<strong>Localização:</strong> Fileira proximal do carpo, lado ulnar palmar; osso sesamoide desenvolvido no tendão do flexor ulnar do carpo<br>
<strong>Classificação especial:</strong> Único osso do carpo considerado osso sesamoide (desenvolvido dentro de tendão)<br>
<strong>Articulação:</strong> Apenas com o piramidal (articulação pisiforme-piramidal)<br>
<strong>Canal de Guyon:</strong> Forma a parede medial do canal, junto com o hâmulo (lateral)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura do pisiforme ocorre por trauma direto (queda sobre a eminência hipotenar) ou por avulsão do flexor ulnar do carpo. Artrose pisiforme-piramidal causa dor ao pressionar o pisiforme contra o piramidal em pronação. Tratamento cirúrgico (pisifomectomia) é eficaz e sem sequelas funcionais significativas.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // Questão 12 — Piramidal
        (function() {
            const opts = ['Piramidal', 'Pisiforme', 'Semilunar', 'Hamato'];
            const correct = 'Piramidal';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior5.png',
                question: 'Qual é a estrutura indicada pelo número 12 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Estrutura:</strong> Piramidal (Osso Triangular)<br>
<strong>Localização:</strong> Fileira proximal do carpo, lado ulnar; entre o semilunar (radial) e o pisiforme (palmar)<br>
<strong>Articulações:</strong><br>
&nbsp;&nbsp;• Disco articular triangular/TFCC (proximal)<br>
&nbsp;&nbsp;• Semilunar (radial)<br>
&nbsp;&nbsp;• Pisiforme (palmar) e hamato (distal)<br>
<strong>Formato:</strong> Piramidal com 4 faces articulares; não articula diretamente com a ulna (separado pelo TFCC)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Fratura do piramidal é a <strong>segunda fratura de carpo mais comum</strong> (após o escafoide), geralmente por avulsão dorsal durante dorsiflexão-desvio ulnar. Visível em radiografia lateral como fragmento dorsal. Tratamento conservador com imobilização. Dor à palpação dorsal do carpo ulnar é o sinal clínico característico.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

    ],

    superioresMusculos: [

        // ========================================
        // IMAGEM 6 — Músculo Trapézio
        // ========================================
        (function() {
            const opts = ['Trapézio', 'Latíssimo do dorso', 'Levantador da escápula', 'Rombóide maior'];
            const correct = 'Trapézio';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior6.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Trapézio<br>
<strong>Origem:</strong> Protuberância occipital externa, ligamento nucal, processos espinhosos de C7-T12<br>
<strong>Inserção:</strong> Terço lateral da clavícula, acrômio e espinha da escápula<br>
<strong>Ação:</strong><br>
&nbsp;&nbsp;• Fibras superiores: elevação da escápula e inclinação lateral da cabeça<br>
&nbsp;&nbsp;• Fibras médias: retração da escápula<br>
&nbsp;&nbsp;• Fibras inferiores: depressão da escápula e rotação superior<br>
<strong>Inervação:</strong> Nervo acessório (NC XI) + ramos ventrais de C3-C4
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão do <strong>nervo acessório (NC XI)</strong> — tipicamente em dissecção cervical ou trauma — causa paralisia do trapézio: ombro caído, escápula alada inferior, dificuldade em abduzir o braço acima de 90°. Dor crônica no pescoço e ombro é sequela comum. O trapézio superior é alvo de toxina botulínica no tratamento de cefaleia tensional e distonia cervical.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // ========================================
        // IMAGEM 7 — Músculo Latíssimo do Dorso
        // ========================================
        (function() {
            const opts = ['Latíssimo do dorso', 'Trapézio', 'Redondo maior', 'Serrátil anterior'];
            const correct = 'Latíssimo do dorso';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior7.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Latíssimo do dorso<br>
<strong>Origem:</strong> Processos espinhosos de T7-L5, crista do sacro, crista ilíaca posterior, costelas inferiores<br>
<strong>Inserção:</strong> Sulco intertubercular do úmero (assoalho)<br>
<strong>Ação:</strong> Extensão, adução e rotação medial do braço; auxilia na inspiração forçada e na tosse<br>
<strong>Inervação:</strong> Nervo toracodorsal (C6-C8)<br>
<strong>Mnemônico:</strong> "Latíssimo leva o braço para baixo e para dentro"
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O latíssimo do dorso é amplamente usado em <strong>cirurgias reconstrutivas</strong>: retalho miocutâneo para reconstrução mamária após mastectomia (retalho LD) e retalho muscular livre para cobertura de defeitos complexos. É o principal músculo do movimento de braçada no nado crawl e do movimento de tração (puxar barra). Lesão em arremessadores causa dor axilar posterior.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // ========================================
        // IMAGEM 8 — Músculo Levantador da Escápula
        // ========================================
        (function() {
            const opts = ['Levantador da escápula', 'Trapézio', 'Esplênio do pescoço', 'Rombóide menor'];
            const correct = 'Levantador da escápula';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior8.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Levantador da escápula (Elevador da escápula)<br>
<strong>Origem:</strong> Tubérculos posteriores dos processos transversos de C1-C4<br>
<strong>Inserção:</strong> Borda medial da escápula, entre o ângulo superior e a espinha<br>
<strong>Ação:</strong> Elevação da escápula; rotação inferior da cavidade glenoidal (inclina o ângulo inferior medialmente)<br>
<strong>Inervação:</strong> Nervo dorsal da escápula (C4-C5) + ramos diretos de C3-C4
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Tensão e dor no levantador da escápula é causa extremamente comum de <strong>cervicalgia e dor no ombro</strong>, especialmente em trabalhadores de escritório com postura inadequada. O ponto de inserção no ângulo superior da escápula é palpável e frequentemente ponto-gatilho miofascial. Infiltração com anestésico local ou toxina botulínica pode ser eficaz em casos refratários.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 9 — Músculo Deltóide
        // ========================================
        (function() {
            const opts = ['Deltóide', 'Supraespinhal', 'Infra espinhal', 'Redondo menor'];
            const correct = 'Deltóide';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior9.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Deltóide<br>
<strong>Origem:</strong> Terço lateral da clavícula (feixe anterior), acrômio (feixe médio), espinha da escápula (feixe posterior)<br>
<strong>Inserção:</strong> Tuberosidade deltóidea do úmero<br>
<strong>Ação:</strong><br>
&nbsp;&nbsp;• Feixe anterior: flexão e rotação medial do braço<br>
&nbsp;&nbsp;• Feixe médio: abdução do braço (15–90°)<br>
&nbsp;&nbsp;• Feixe posterior: extensão e rotação lateral do braço<br>
<strong>Inervação:</strong> Nervo axilar (C5-C6)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão do <strong>nervo axilar</strong> (luxação anterior do ombro, fratura do colo cirúrgico do úmero) causa paralisia do deltóide e redondo menor. O paciente perde a abdução ativa entre 15–90° (os primeiros 15° são mantidos pelo supraespinhal via nervo supraescapular). Hipoestesia em "distintivo militar" (região lateral do ombro) é o sinal sensitivo característico.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // ========================================
        // IMAGEM 10 — Supraespinhal (#1) e Infraespinhal (#2)
        // ========================================
        (function() {
            const opts = ['Supraespinhal', 'Infraespinhal', 'Redondo menor', 'Subescapular'];
            const correct = 'Supraespinhal';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior10.png',
                question: 'Qual é o músculo indicado pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Supraespinhal<br>
<strong>Origem:</strong> Fossa supraespinal da escápula<br>
<strong>Inserção:</strong> Faceta superior do tubérculo maior do úmero<br>
<strong>Ação:</strong> Inicia a abdução do braço (0–15°) e estabiliza a cabeça do úmero na cavidade glenoidal<br>
<strong>Inervação:</strong> Nervo supraescapular (C4-C6)<br>
<strong>Trajeto:</strong> Passa sob o arco coracoacromial (espaço subacromial)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O supraespinhal é o músculo mais frequentemente lesionado do manguito rotador, por compressão no espaço subacromial. Rupturas parciais ou completas causam fraqueza na abdução e dor no <strong>arco doloroso</strong> (60–120°). O <strong>teste de Jobe</strong> (abdução resistida a 90° em espinha da escápula com polegar voltado para baixo) avalia seletivamente o supraespinhal.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        (function() {
            const opts = ['Infraespinhal', 'Supraespinhal', 'Redondo menor', 'Redondo maior'];
            const correct = 'Infraespinhal';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior10.png',
                question: 'Qual é o músculo indicado pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Infraespinhal<br>
<strong>Origem:</strong> Fossa infraespinal da escápula (face posterior, abaixo da espinha)<br>
<strong>Inserção:</strong> Faceta média do tubérculo maior do úmero<br>
<strong>Ação:</strong> Rotação lateral e adução do braço; estabilização posterior da articulação glenoumeral<br>
<strong>Inervação:</strong> Nervo supraescapular (C5-C6) — ramo que passa pela incisura espinoglenóidea
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O <strong>teste da rotação lateral resistida</strong> (cotovelo a 90°, resistência à rotação externa) avalia o infraespinhal. Atrofia visível da fossa infraespinal sugere lesão do nervo supraescapular distal (incisura espinoglenóidea) ou ruptura maciça do infraespinhal. Compressão por cisto ganglionar é causa comum em voleibolistas.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 11 — Redondo Menor (#1) e Redondo Maior (#2)
        // ========================================
        (function() {
            const opts = ['Redondo menor', 'Redondo maior', 'Infraespinhal', 'Subescapular'];
            const correct = 'Redondo menor';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior11.png',
                question: 'Qual é o músculo indicado pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Redondo menor<br>
<strong>Origem:</strong> Face posterior da borda lateral da escápula (porção superior)<br>
<strong>Inserção:</strong> Faceta inferior do tubérculo maior do úmero<br>
<strong>Ação:</strong> Rotação lateral do braço; componente do manguito rotador<br>
<strong>Inervação:</strong> Nervo axilar (C5-C6) — mesma inervação do deltóide<br>
<strong>Distinção do redondo maior:</strong> Redondo menor → manguito rotador + rotação lateral; redondo maior → NÃO é manguito + rotação medial
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesão isolada do redondo menor é incomum mas pode ocorrer por compressão do ramo posterior do nervo axilar no <strong>espaço quadrangular</strong> (síndrome do espaço quadrangular), causando atrofia seletiva do redondo menor na RM e dor difusa posterior no ombro em arremessadores.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),
        (function() {
            const opts = ['Redondo maior', 'Redondo menor', 'Latíssimo do dorso', 'Subescapular'];
            const correct = 'Redondo maior';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior11.png',
                question: 'Qual é o músculo indicado pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Redondo maior<br>
<strong>Origem:</strong> Face posterior do ângulo inferior da escápula<br>
<strong>Inserção:</strong> Crista do tubérculo menor do úmero (sulco intertubercular — parede medial)<br>
<strong>Ação:</strong> Extensão, adução e rotação medial do braço — "braço de assistente do latíssimo"<br>
<strong>Inervação:</strong> Nervo subescapular inferior (C5-C6)<br>
<strong>Importante:</strong> NÃO faz parte do manguito rotador (não cobre a articulação glenoumeral)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O redondo maior, junto com o latíssimo do dorso, forma a <strong>prega axilar posterior</strong>. Esses dois músculos são separados cirurgicamente na abordagem posterior do ombro. Em atletas de arremesso, lesões por tração do redondo maior causam dor axilar posterior e fraqueza na extensão e rotação medial do braço.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 12 — Músculo Subescapular
        // ========================================
        (function() {
            const opts = ['Subescapular', 'Supraespinhal', 'Redondo menor', 'Coracobraquial'];
            const correct = 'Subescapular';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior12.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Subescapular<br>
<strong>Origem:</strong> Fossa subescapular (face anterior/costal da escápula)<br>
<strong>Inserção:</strong> Tubérculo menor do úmero<br>
<strong>Ação:</strong> Rotação medial e adução do braço; único componente anterior do manguito rotador<br>
<strong>Inervação:</strong> Nervos subescapulares superior e inferior (C5-C6)<br>
<strong>Destaque:</strong> Único dos 4 músculos do manguito rotador que insere no tubérculo MENOR
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Lesões do subescapular são frequentemente subdiagnosticadas. O <strong>sinal do belly-press</strong> (incapacidade de pressionar o abdome sem extensão do punho) e o <strong>sinal do lift-off de Gerber</strong> (incapacidade de afastar a mão das costas) avaliam seletivamente este músculo. Rupturas causam instabilidade anterior do ombro e deformidade em "espiral" do bíceps.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 13 — Músculo Bíceps Braquial
        // ========================================
        (function() {
            const opts = ['Bíceps braquial', 'Braquial', 'Coracobraquial', 'Tríceps braquial'];
            const correct = 'Bíceps braquial';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior13.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Bíceps braquial<br>
<strong>Origem:</strong><br>
&nbsp;&nbsp;• Cabeça longa: tubérculo supraglenoidal da escápula (intracapsular)<br>
&nbsp;&nbsp;• Cabeça curta: processo coracoide da escápula<br>
<strong>Inserção:</strong> Tuberosidade do rádio e fáscia do antebraço (aponeurose bicipital)<br>
<strong>Ação:</strong> Flexão do cotovelo, supinação do antebraço e fraca flexão do ombro<br>
<strong>Inervação:</strong> Nervo musculocutâneo (C5-C6)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Ruptura da cabeça longa do bíceps causa o sinal do "<strong>Popeye</strong>" (bola muscular proximal). Ruptura do tendão distal (tuberosidade radial) causa maior perda funcional: ~50% da supinação e ~30% da flexão. O <strong>teste de Speed</strong> (dor na flexão resistida do ombro com antebraço supinado) e o <strong>teste de Yergason</strong> avaliam o tendão da cabeça longa.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),

        // ========================================
        // IMAGEM 14 — Músculo Coracobraquial
        // ========================================
        (function() {
            const opts = ['Coracobraquial', 'Bíceps braquial', 'Braquial', 'Deltóide'];
            const correct = 'Coracobraquial';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior14.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Coracobraquial<br>
<strong>Origem:</strong> Processo coracoide da escápula (junto com a cabeça curta do bíceps)<br>
<strong>Inserção:</strong> Face medial da diáfise do úmero (terço médio)<br>
<strong>Ação:</strong> Flexão e adução do braço; estabilização anterior do ombro<br>
<strong>Inervação:</strong> Nervo musculocutâneo (C5-C7) — o nervo perfura o coracobraquial para chegar ao músculo braquial<br>
<strong>Relação anatômica:</strong> O nervo musculocutâneo penetra diretamente neste músculo
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Compressão do nervo musculocutâneo dentro ou ao nível do coracobraquial (por hipertrofia muscular ou trauma) causa <strong>síndrome do nervo musculocutâneo</strong>: fraqueza de flexão do cotovelo, fraqueza de supinação e parestesia no antebraço lateral (nervo cutâneo lateral do antebraço). Mais comum em fisiculturistas e arremessadores.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 15 — Músculo Braquial
        // ========================================
        (function() {
            const opts = ['Braquial', 'Bíceps braquial', 'Coracobraquial', 'Braquiorradial'];
            const correct = 'Braquial';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior15.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Braquial<br>
<strong>Origem:</strong> Metade distal da face anterior do úmero (abaixo da tuberosidade deltóidea)<br>
<strong>Inserção:</strong> Tuberosidade da ulna e processo coronóide<br>
<strong>Ação:</strong> Flexão do cotovelo — único flexor puro (atua em todas as posições de rotação do antebraço)<br>
<strong>Inervação:</strong> Nervo musculocutâneo (C5-C6) + pequeno ramo do nervo radial (C7)<br>
<strong>Destaque:</strong> Considerado o "cavalo de batalha" da flexão do cotovelo
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
A <strong>miosite ossificante traumática</strong> do braquial é uma complicação clássica após fraturas do cotovelo ou manipulação agressiva pós-imobilização. Calcificação intramuscular progressiva limita a flexão do cotovelo. Prevenção: mobilização precoce gentil. Ressecção cirúrgica apenas após maturação completa da calcificação (12–18 meses).
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 16 — Tríceps Braquial (#1) e Ancôneo (#2)
        // ========================================
        (function() {
            const opts = ['Tríceps braquial', 'Bíceps braquial', 'Braquial', 'Ancôneo'];
            const correct = 'Tríceps braquial';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior16.png',
                question: 'Qual é o músculo indicado pelo número 1 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Tríceps braquial<br>
<strong>Origem:</strong><br>
&nbsp;&nbsp;• Cabeça longa: tubérculo infraglenoidal da escápula<br>
&nbsp;&nbsp;• Cabeça lateral: face posterior do úmero (acima do sulco radial)<br>
&nbsp;&nbsp;• Cabeça medial: face posterior do úmero (abaixo do sulco radial)<br>
<strong>Inserção:</strong> Olécrano da ulna<br>
<strong>Ação:</strong> Extensão do cotovelo (principal); cabeça longa: extensão e adução do braço<br>
<strong>Inervação:</strong> Nervo radial (C6-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O <strong>nervo radial</strong> passa pelo sulco do nervo radial entre as cabeças lateral e medial do tríceps — "paralisia do sábado à noite" (compressão por dormir com o braço sobre o encosto) causa queda do punho (wrist drop). A cabeça medial do tríceps tem inervação independente e geralmente é poupada em fraturas do úmero, preservando extensão do cotovelo.
</p>
</details>
                `,
                difficulty: 'fácil'
            };
        })(),
        (function() {
            const opts = ['Ancôneo', 'Tríceps braquial', 'Extensor ulnar do carpo', 'Supinador'];
            const correct = 'Ancôneo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior16.png',
                question: 'Qual é o músculo indicado pelo número 2 na imagem?',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Ancôneo<br>
<strong>Origem:</strong> Epicôndilo lateral do úmero<br>
<strong>Inserção:</strong> Face lateral do olécrano e face posterior proximal da ulna<br>
<strong>Ação:</strong> Auxilia na extensão do cotovelo; estabiliza a articulação umeroulnar durante pronação/supinação<br>
<strong>Inervação:</strong> Nervo radial (C7-C8)<br>
<strong>Característica:</strong> Pequeno músculo triangular, considerado extensão do tríceps no antebraço
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O ancôneo é usado como <strong>retalho muscular pediculado</strong> em cirurgias de cotovelo para cobertura de defeitos após ressecção de tumores ou osteomielite do olécrano. Sua denervação ocorre em lesões do nervo radial distal ao epicôndilo lateral. Na epicondilite lateral, o ancôneo também pode ser fonte de dor por ser co-originado no epicôndilo lateral.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 17 — Pronador Redondo (#1) e Pronador Quadrado (#2)
        // ========================================
        (function() {
            const opts = ['Pronador redondo', 'Pronador quadrado', 'Braquiorradial', 'Flexor radial do carpo'];
            const correct = 'Pronador redondo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior17.png',
                question: 'Identifique o músculo indicado pelo número 1 na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Pronador redondo<br>
<strong>Origem:</strong> Cabeça umeral (epicôndilo medial) e cabeça ulnar (processo coronoide)<br>
<strong>Inserção:</strong> Face lateral do rádio (tuberosidade pronadora)<br>
<strong>Ação:</strong> Pronação do antebraço; flexão fraca do cotovelo<br>
<strong>Inervação:</strong> Nervo mediano (C6-C7)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Síndrome do pronador redondo:</strong> compressão do nervo mediano entre as duas cabeças do músculo, causando parestesia nos dedos 1–3 e fraqueza de pinça. Diferencia-se da síndrome do túnel do carpo pela dor no antebraço proximal e ausência de sintomas noturnos. Tratamento conservador com fisioterapia; cirurgia em casos refratários.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        (function() {
            const opts = ['Pronador quadrado', 'Pronador redondo', 'Supinador', 'Flexor profundo dos dedos'];
            const correct = 'Pronador quadrado';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior17.png',
                question: 'Identifique o músculo indicado pelo número 2 na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Pronador quadrado<br>
<strong>Origem:</strong> Quarto distal da face anterior da ulna<br>
<strong>Inserção:</strong> Quarto distal da face anterior do rádio<br>
<strong>Ação:</strong> Pronação do antebraço (principal pronador)<br>
<strong>Inervação:</strong> Nervo interósseo anterior (ramo do mediano) (C8-T1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Síndrome do nervo interósseo anterior:</strong> lesão rara que afeta especificamente o pronador quadrado, flexor longo do polegar e flexor profundo dos dedos (índice/médio), causando fraqueza na pinça ("sinal do OK" anormal). Importante referência cirúrgica: o pronador quadrado é exposto na abordagem volar do rádio distal para fixação de fraturas.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 18 — Flexor Radial do Carpo
        // ========================================
        (function() {
            const opts = ['Flexor radial do carpo', 'Flexor ulnar do carpo', 'Palmar longo', 'Pronador redondo'];
            const correct = 'Flexor radial do carpo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior18.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Flexor radial do carpo<br>
<strong>Origem:</strong> Epicôndilo medial do úmero (epitróclea)<br>
<strong>Inserção:</strong> Base do 2º e 3º metacarpos<br>
<strong>Ação:</strong> Flexão e abdução (desvio radial) do punho<br>
<strong>Inervação:</strong> Nervo mediano (C6-C7)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O tendão do flexor radial do carpo é usado como <strong>referência palpável no punho</strong> para localizar a artéria radial (lateralmente ao tendão). Na <strong>tenossinovite estenosante</strong>, causa dor e crepitação ao movimento do punho. Importante referência na abordagem cirúrgica volar do punho e carpo.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 19 — Palmar Longo
        // ========================================
        (function() {
            const opts = ['Palmar longo', 'Flexor radial do carpo', 'Flexor ulnar do carpo', 'Pronador redondo'];
            const correct = 'Palmar longo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior19.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Palmar longo<br>
<strong>Origem:</strong> Epicôndilo medial do úmero<br>
<strong>Inserção:</strong> Aponeurose palmar<br>
<strong>Ação:</strong> Flexão do punho; tensiona a aponeurose palmar<br>
<strong>Inervação:</strong> Nervo mediano (C7-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Músculo <strong>ausente em ~14% da população</strong> (variação anatômica comum, geralmente bilateral). Seu tendão é o <strong>enxerto mais colhido em cirurgia da mão</strong> para reconstrução de tendões (ex: ligamento cruzado, tendão de Aquiles). Identificado pela oponência do polegar com o 5º dedo + flexão do punho — o tendão torna-se proeminente medialmente ao flexor radial do carpo.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 20 — Flexor Ulnar do Carpo
        // ========================================
        (function() {
            const opts = ['Flexor ulnar do carpo', 'Flexor radial do carpo', 'Palmar longo', 'Flexor superficial dos dedos'];
            const correct = 'Flexor ulnar do carpo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior20.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Flexor ulnar do carpo<br>
<strong>Origem:</strong> Cabeça umeral (epicôndilo medial) e cabeça ulnar (olécrano e borda posterior da ulna)<br>
<strong>Inserção:</strong> Pisiforme, hamato e base do 5º metacarpo<br>
<strong>Ação:</strong> Flexão e adução (desvio ulnar) do punho<br>
<strong>Inervação:</strong> Nervo ulnar (C7-T1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O nervo ulnar passa <strong>profundamente ao arco fibroso do flexor ulnar do carpo</strong> (túnel cubital), sendo o segundo local mais comum de compressão do nervo ulnar. A <strong>síndrome do túnel cubital</strong> causa parestesia no 4º e 5º dedos e fraqueza da musculatura intrínseca da mão. Manobra de Tinel positiva sobre o epicôndilo medial.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 21 — Flexor Superficial dos Dedos
        // ========================================
        (function() {
            const opts = ['Flexor superficial dos dedos', 'Flexor profundo dos dedos', 'Flexor longo do polegar', 'Flexor radial do carpo'];
            const correct = 'Flexor superficial dos dedos';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior21.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Flexor superficial dos dedos<br>
<strong>Origem:</strong> Epicôndilo medial, processo coronoide e linha oblíqua do rádio<br>
<strong>Inserção:</strong> Falanges médias dos dedos 2–5 (duas bandejas laterais)<br>
<strong>Ação:</strong> Flexão da falange média (articulação IFP) dos dedos 2–5; flexão da articulação MCF e punho<br>
<strong>Inervação:</strong> Nervo mediano (C7-C8, T1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Teste isolado:</strong> bloquear os outros dedos em extensão e pedir flexão do dedo testado — o FSD flexiona isoladamente a IFP. Na <strong>síndrome do túnel do carpo</strong>, os tendões do FSD (junto ao FPD) aumentam de volume e comprimem o nervo mediano. Lacerações de tendões na "zona 2" (bainha digital) apresentam pior prognóstico cirúrgico.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 22 — Flexor Profundo dos Dedos
        // ========================================
        (function() {
            const opts = ['Flexor profundo dos dedos', 'Flexor superficial dos dedos', 'Flexor longo do polegar', 'Pronador quadrado'];
            const correct = 'Flexor profundo dos dedos';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior22.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Flexor profundo dos dedos<br>
<strong>Origem:</strong> Face anterior e medial da ulna e membrana interóssea<br>
<strong>Inserção:</strong> Falanges distais dos dedos 2–5<br>
<strong>Ação:</strong> Flexão da falange distal (articulação IFD) dos dedos 2–5<br>
<strong>Inervação:</strong> Nervos mediano (dedos 2–3, via n. interósseo anterior) e ulnar (dedos 4–5)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Único músculo com dupla inervação (mediano + ulnar). <strong>Teste:</strong> bloquear a IFP em extensão e pedir flexão da IFD. A <strong>avulsão do FPD na falange distal</strong> ("jersey finger") ocorre ao agarrar uma camiseta durante tackle — cirurgia de reancoragem necessária. Origem dos músculos lumbricais.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 23 — Flexor Longo do Polegar
        // ========================================
        (function() {
            const opts = ['Flexor longo do polegar', 'Flexor curto do polegar', 'Oponente do polegar', 'Flexor profundo dos dedos'];
            const correct = 'Flexor longo do polegar';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior23.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Flexor longo do polegar<br>
<strong>Origem:</strong> Face anterior do rádio e membrana interóssea<br>
<strong>Inserção:</strong> Falange distal do polegar<br>
<strong>Ação:</strong> Flexão da falange distal do polegar (articulação IF)<br>
<strong>Inervação:</strong> Nervo interósseo anterior (ramo do mediano) (C8-T1)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Na <strong>síndrome do nervo interósseo anterior</strong>, a incapacidade de fletir a IF do polegar (junto ao IFD do indicador) resulta no "sinal do OK" anormal — o paciente forma um número zero em vez de círculo. <strong>Ruptura espontânea</strong> do tendão pode ocorrer em artrite reumatoide (síndrome de Mannerfelt) por erosão do escafoide.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 24 — Supinador
        // ========================================
        (function() {
            const opts = ['Supinador', 'Pronador redondo', 'Braquiorradial', 'Extensor radial longo do carpo'];
            const correct = 'Supinador';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior24.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Supinador<br>
<strong>Origem:</strong> Epicôndilo lateral, ligamento colateral radial e crista do supinador da ulna<br>
<strong>Inserção:</strong> Face lateral, anterior e posterior do terço proximal do rádio<br>
<strong>Ação:</strong> Supinação do antebraço<br>
<strong>Inervação:</strong> Nervo interósseo posterior (ramo profundo do radial) (C5-C6)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
O nervo interósseo posterior passa pelo <strong>Arcade de Frohse</strong> (borda proximal do supinador), local de compressão que causa paralisia dos extensores do punho e dedos sem déficit sensitivo — diferencia-se da lesão do radial no sulco espiral. Risco em fraturas do colo do rádio e cirurgias do cotovelo lateral.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 25 — Braquiorradial
        // ========================================
        (function() {
            const opts = ['Braquiorradial', 'Extensor radial longo do carpo', 'Supinador', 'Pronador redondo'];
            const correct = 'Braquiorradial';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior25.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Braquiorradial<br>
<strong>Origem:</strong> Crista supracondilar lateral do úmero<br>
<strong>Inserção:</strong> Processo estiloide do rádio<br>
<strong>Ação:</strong> Flexão do cotovelo (mais eficiente com antebraço em posição neutra)<br>
<strong>Inervação:</strong> Nervo radial (C5-C6)
<details style="margin-top: 10px;">
<summary style="cursor: pointer: color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Anomalia: único músculo do compartimento posterior (extensores) com função de <strong>flexão</strong>. É inervado pelo nervo radial antes de sua bifurcação — sua preservação em lesões do radial indica lesão distal à crista supracondilar. Forma o <strong>limite lateral do triângulo cubital</strong> e é referência cirúrgica para a artéria radial no terço distal do antebraço.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 26 — Extensor Radial Longo do Carpo
        // ========================================
        (function() {
            const opts = ['Extensor radial longo do carpo', 'Extensor radial curto do carpo', 'Braquiorradial', 'Extensor dos dedos'];
            const correct = 'Extensor radial longo do carpo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior26.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Extensor radial longo do carpo<br>
<strong>Origem:</strong> Crista supracondilar lateral do úmero<br>
<strong>Inserção:</strong> Base do 2º metacarpo (face dorsal)<br>
<strong>Ação:</strong> Extensão e abdução (desvio radial) do punho<br>
<strong>Inervação:</strong> Nervo radial (C6-C7)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Juntamente com o extensor radial curto, percorre o <strong>2º compartimento extensor do punho</strong>. Na <strong>epicondilite lateral (cotovelo de tenista)</strong>, o ERLC e especialmente o ERCC são os tendões mais acometidos. Resiste ao impacto repetitivo de esportes de raquete e tarefas manuais com preensão.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 27 — Extensor Radial Curto do Carpo
        // ========================================
        (function() {
            const opts = ['Extensor radial curto do carpo', 'Extensor radial longo do carpo', 'Extensor dos dedos', 'Supinador'];
            const correct = 'Extensor radial curto do carpo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior27.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Extensor radial curto do carpo<br>
<strong>Origem:</strong> Epicôndilo lateral do úmero<br>
<strong>Inserção:</strong> Base do 3º metacarpo (face dorsal)<br>
<strong>Ação:</strong> Extensão do punho (ação principal na estabilização durante preensão)<br>
<strong>Inervação:</strong> Nervo interósseo posterior / radial (C6-C7)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
<strong>Principal músculo envolvido na epicondilite lateral</strong> — sua origem no epicôndilo lateral é o local clássico de dor ao palpação e ao teste de extensão do punho com resistência (Teste de Cozen). Tratamento inclui repouso, fisioterapia excêntrica e, em casos crônicos, liberação cirúrgica da origem do ERCC.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 28 — Extensor dos Dedos
        // ========================================
        (function() {
            const opts = ['Extensor dos dedos', 'Extensor do indicador', 'Extensor ulnar do carpo', 'Extensor radial curto do carpo'];
            const correct = 'Extensor dos dedos';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior28.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Extensor dos dedos<br>
<strong>Origem:</strong> Epicôndilo lateral do úmero<br>
<strong>Inserção:</strong> Expansão extensora (capuz extensor) dos dedos 2–5<br>
<strong>Ação:</strong> Extensão dos dedos 2–5 nas articulações MCF, IFP e IFD; extensão do punho<br>
<strong>Inervação:</strong> Nervo interósseo posterior (C7-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Percorre o <strong>4º compartimento extensor do punho</strong>. A <strong>ruptura do tendão extensor</strong> na falange distal causa "dedo em martelo" (mallet finger); na articulação IFP causa deformidade em botoeira. Em paralisia do nervo radial, a incapacidade de estender os dedos causa o clássico "punho caído" (wrist drop).
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 29 — Extensor Ulnar do Carpo
        // ========================================
        (function() {
            const opts = ['Extensor ulnar do carpo', 'Flexor ulnar do carpo', 'Extensor dos dedos', 'Ancôneo'];
            const correct = 'Extensor ulnar do carpo';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior29.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Extensor ulnar do carpo<br>
<strong>Origem:</strong> Epicôndilo lateral e borda posterior da ulna<br>
<strong>Inserção:</strong> Base do 5º metacarpo<br>
<strong>Ação:</strong> Extensão e adução (desvio ulnar) do punho<br>
<strong>Inervação:</strong> Nervo interósseo posterior (C7-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Percorre o <strong>6º compartimento extensor</strong>, ao lado da cabeça ulnar. A <strong>subluxação do tendão</strong> do extensor ulnar do carpo ocorre por lesão da bainha retinacular durante movimentos bruscos de pronação-supinação com flexão ulnar (comum em golpes de tênis); causa estalido doloroso no punho ulnar. Envolvido em dor ulnar do punho em artrite reumatoide.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 30 — Abdutor Longo do Polegar
        // ========================================
        (function() {
            const opts = ['Abdutor longo do polegar', 'Extensor curto do polegar', 'Extensor longo do polegar', 'Abdutor curto do polegar'];
            const correct = 'Abdutor longo do polegar';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior30.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Abdutor longo do polegar<br>
<strong>Origem:</strong> Face posterior do rádio, ulna e membrana interóssea<br>
<strong>Inserção:</strong> Base do 1º metacarpo<br>
<strong>Ação:</strong> Abdução e extensão do 1º metacarpo; desvio radial do punho<br>
<strong>Inervação:</strong> Nervo interósseo posterior (C7-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Junto com o extensor curto do polegar, percorre o <strong>1º compartimento extensor</strong>, local da <strong>tenossinovite de De Quervain</strong> — condição comum em novas mães e trabalhadores manuais. Dor na tabaqueira anatômica, teste de Finkelstein positivo. Tratamento: imobilização, corticoide local ou liberação cirúrgica do 1º compartimento.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 31 — Extensor Curto do Polegar
        // ========================================
        (function() {
            const opts = ['Extensor curto do polegar', 'Abdutor longo do polegar', 'Extensor longo do polegar', 'Oponente do polegar'];
            const correct = 'Extensor curto do polegar';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior31.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Extensor curto do polegar<br>
<strong>Origem:</strong> Face posterior do rádio e membrana interóssea<br>
<strong>Inserção:</strong> Falange proximal do polegar<br>
<strong>Ação:</strong> Extensão da falange proximal do polegar e do 1º metacarpo<br>
<strong>Inervação:</strong> Nervo interósseo posterior (C7-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Percorre o <strong>1º compartimento extensor</strong> junto ao abdutor longo — ambos envolvidos na <strong>doença de De Quervain</strong>. Forma a <strong>borda anterior da tabaqueira anatômica</strong> (fossa entre o extensor curto e o extensor longo, onde se palpa o pulso radial e o escafoide). Dor à palpação da tabaqueira sugere fratura do escafoide.
</p>
</details>
                `,
                difficulty: 'médio'
            };
        })(),

        // ========================================
        // IMAGEM 32 — Extensor Longo do Polegar
        // ========================================
        (function() {
            const opts = ['Extensor longo do polegar', 'Extensor curto do polegar', 'Abdutor longo do polegar', 'Extensor do indicador'];
            const correct = 'Extensor longo do polegar';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior32.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Extensor longo do polegar<br>
<strong>Origem:</strong> Face posterior da ulna e membrana interóssea<br>
<strong>Inserção:</strong> Falange distal do polegar<br>
<strong>Ação:</strong> Extensão da falange distal e proximal do polegar; retropulsão (extensão) do polegar<br>
<strong>Inervação:</strong> Nervo interósseo posterior (C7-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Percorre o <strong>3º compartimento extensor</strong>, contornando o <strong>tubérculo dorsal do rádio (Lister)</strong>. A <strong>ruptura espontânea do tendão</strong> ocorre como complicação tardia de fraturas do rádio distal (mesmo sem deslocamento) por isquemia e erosão no tubérculo de Lister. Também ocorre em artrite reumatoide e uso prolongado de corticoides. Forma a borda posterior da tabaqueira anatômica.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

        // ========================================
        // IMAGEM 33 — Extensor do Indicador
        // ========================================
        (function() {
            const opts = ['Extensor do indicador', 'Extensor dos dedos', 'Extensor do mínimo', 'Interósseo dorsal'];
            const correct = 'Extensor do indicador';
            const idx = Math.floor(Math.random() * opts.length);
            [opts[0], opts[idx]] = [opts[idx], opts[0]];
            return {
                image: 'imagens/membros_superiores/membro superior33.png',
                question: 'Identifique o músculo indicado na imagem:',
                options: opts,
                answer: opts.indexOf(correct),
                correctAnswer: correct,
                explanation: `
<strong>Músculo:</strong> Extensor do indicador<br>
<strong>Origem:</strong> Face posterior da ulna e membrana interóssea<br>
<strong>Inserção:</strong> Expansão extensora do dedo indicador (2º dedo)<br>
<strong>Ação:</strong> Extensão independente do indicador; extensão do punho<br>
<strong>Inervação:</strong> Nervo interósseo posterior (C7-C8)
<details style="margin-top: 10px;">
<summary style="cursor: pointer; color: #007bff; font-weight: bold;">📋 Correlações Clínicas</summary>
<p style="margin-top: 8px; padding: 10px; background-color: #f8f9fa; border-left: 3px solid #007bff;">
Percorre o <strong>2º compartimento extensor</strong> junto ao extensor ulnar do carpo. Por permitir extensão <strong>independente</strong> do indicador, seu tendão é o mais utilizado em <strong>transferências tendinosas</strong> para reconstrução do polegar (substituindo o extensor longo do polegar roto). Avaliação clínica: pedir ao paciente que aponte com o indicador mantendo os outros dedos em flexão.
</p>
</details>
                `,
                difficulty: 'difícil'
            };
        })(),

    ],

    superioresVasosNervos: [],

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

// ============================================
// QUESTÕES TEÓRICAS — MEMBROS SUPERIORES
// ============================================
quizData.superioresTeorico = [
    {
        question: 'Quais músculos compõem o manguito rotador?',
        options: [
            'Supraespinhal, infraespinhal, redondo menor e subescapular',
            'Deltóide, supraespinhal, infraespinhal e redondo maior',
            'Supraespinhal, infraespinhal, subescapular e coracobraquial',
            'Redondo menor, redondo maior, subescapular e deltóide'
        ],
        answer: 0,
        correctAnswer: 'Supraespinhal, infraespinhal, redondo menor e subescapular',
        explanation: `
<strong>Manguito Rotador — 4 múscu​los (mnemónico SIRS):</strong><br>
&nbsp;&nbsp;• <strong>S</strong>upraespinhal → abdução (0–15°); insere no tubérculo maior<br>
&nbsp;&nbsp;• <strong>I</strong>nfraespinhal → rotação lateral; insere no tubérculo maior<br>
&nbsp;&nbsp;• <strong>R</strong>edondo menor → rotação lateral; insere no tubérculo maior<br>
&nbsp;&nbsp;• <strong>S</strong>ubescapular → rotação medial; insere no tubérculo <em>menor</em><br>
<strong>Função coletiva:</strong> Estabilização dinâmica da cabeça do úmero na cavidade glenoidal
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
O <strong>supraespinhal</strong> é o músculo mais comumente lesionado do manguito rotador (passagem pelo espaço subacromial). Rupturas parciais ou completas causam dor no arco de abdução entre 60–120° (<em>painful arc</em>) e fraqueza na abdução ativa.
</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual músculo do manguito rotador se insere no tubérculo menor do úmero?',
        options: [
            'Supraespinhal',
            'Infraespinhal',
            'Redondo menor',
            'Subescapular'
        ],
        answer: 3,
        correctAnswer: 'Subescapular',
        explanation: `
<strong>Inserção no Tubérculo Menor:</strong> Músculo Subescapular — único do manguito rotador<br>
<strong>Origem:</strong> Fossa subescapular (face anterior/costal da escápula)<br>
<strong>Ação:</strong> Rotação medial e adução do braço; estabilização anterior do ombro<br>
<strong>Inervação:</strong> Nervos subescapulares superior e inferior (C5-C6)<br>
<strong>Os demais 3 músculos</strong> (supraespinhal, infraespinhal, redondo menor) inserem no tubérculo <strong>maior</strong>
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Lesões isoladas do subescapular são frequentemente subdiagnosticadas. O <strong>sinal do belly-press</strong> e o <strong>sinal do lift-off (Gerber)</strong> avaliam seletivamente este músculo. Rupturas causam instabilidade anterior e dificuldade na rotação medial.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Em qual vértice da escápula encontra-se a cavidade glenoidal?',
        options: [
            'Ângulo superior',
            'Ângulo inferior',
            'Ângulo lateral',
            'Ângulo medial'
        ],
        answer: 2,
        correctAnswer: 'Ângulo lateral',
        explanation: `
<strong>Localização:</strong> Ângulo lateral (também chamado ângulo glenóideo) da escápula<br>
<strong>A cavidade glenoidal</strong> é a superfície articular oval, voltada lateral e levemente anteriormente<br>
<strong>Aprofundamento:</strong> Pelo lábio glenoidal (fibrocartilagem), que aumenta a congruência articular<br>
<strong>Ângulos da escápula:</strong><br>
&nbsp;&nbsp;• Superior: junção das bordas superior e medial<br>
&nbsp;&nbsp;• Inferior: junção das bordas medial e lateral (nível T7)<br>
&nbsp;&nbsp;• Lateral: onde se encontra a cavidade glenoidal e o processo coracoide
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
A rascidez da cavidade glenoidal (apenas 25–30% da cabeça umeral fica coberta) confere grande mobilidade ao ombro, mas o torna a articulação mais frequentemente luxada do corpo humano. A luxação anterior (>95% dos casos) lesa o lábio glenoidal anterior — <strong>lesão de Bankart</strong>.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual ligamento conecta o processo coracoide ao acrômio, formando o arco coracoacromial?',
        options: [
            'Ligamento coracoclavicular',
            'Ligamento coracoacromial',
            'Ligamento glenoumeral superior',
            'Ligamento transverso da escápula'
        ],
        answer: 1,
        correctAnswer: 'Ligamento coracoacromial',
        explanation: `
<strong>Ligamento Coracoacromial:</strong><br>
<strong>Origem:</strong> Processo coracoide (borda lateral)<br>
<strong>Inserção:</strong> Acrômio (borda anterior e ápice)<br>
<strong>Função:</strong> Forma o <em>arco coracoacromial</em> — teto fibroósseo sobre a articulação do ombro<br>
<strong>Conteúdo sob o arco:</strong> Tendão do supraespinhal, bursa subacromial, cabeça longa do bíceps<br>
<strong>Diferença do coracoclavicular:</strong> Liga coracoide → clavícula (ligamento de suspensão da escápula)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Na <strong>síndrome do impacto subacromial</strong>, os tecidos moles são comprimidos contra este ligamento. Cirurgias de acromioplastia frequentemente incluem ressecção parcial do ligamento coracoacromial para ampliar o espaço subacromial.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual nervo inerva o músculo deltóide?',
        options: [
            'Nervo musculocutâneo',
            'Nervo radial',
            'Nervo axilar',
            'Nervo supraescapular'
        ],
        answer: 2,
        correctAnswer: 'Nervo axilar',
        explanation: `
<strong>Nervo Axilar (C5-C6):</strong><br>
<strong>Origem:</strong> Feixe posterior do plexo braquial<br>
<strong>Trajeto:</strong> Passa pelo espaço quadrangular (junto com artéria circunflexa posterior do úmero)<br>
<strong>Músculos inervados:</strong><br>
&nbsp;&nbsp;• Deltóide (todos os 3 feixes: anterior, médio e posterior)<br>
&nbsp;&nbsp;• Redondo menor<br>
<strong>Sensitivo:</strong> Nervo cutâneo lateral superior do braço (região do ombro)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Lesão do nervo axilar ocorre em <strong>luxações anteriores do ombro</strong> e fraturas do colo cirúrgico do úmero. Causa fraqueza na abdução (0–15° preservados pelo supraespinhal via nervo supraescapular) e hipoestesia no "distintivo militar" (região lateral do ombro).
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'O acrômio é uma projeção de qual osso?',
        options: [
            'Clavícula',
            'Úmero',
            'Escápula',
            'Esterno'
        ],
        answer: 2,
        correctAnswer: 'Escápula',
        explanation: `
<strong>Acrômio:</strong> Projeção lateral da <strong>espinha da escápula</strong><br>
<strong>Formação:</strong> Curva-se anteriormente para formar o teto da articulação do ombro<br>
<strong>Articulação:</strong> Com a clavícula → articulação acromioclavicular (AC)<br>
<strong>Inserções:</strong> Deltóide (origem), trapézio (inserção)<br>
<strong>Ossificação:</strong> Ossifica a partir de 2–3 centros secundários; falta de fusão → <em>os acromiale</em> (variante)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Lesões da articulação acromioclavicular são classificadas de I a VI (Rockwood). O <strong>os acromiale</strong> (centro de ossificação não fundido) pode simular fratura e causar impacto subacromial por instabilidade do fragmento.
</p>
</details>
        `,
        difficulty: 'fácil',
        disabled: false
    },
    {
        question: 'Qual estrutura passa pelo sulco intertubercular do úmero?',
        options: [
            'Nervo axilar',
            'Tendão da cabeça longa do músculo bíceps braquial',
            'Artéria braquial',
            'Tendão do músculo supraespinhal'
        ],
        answer: 1,
        correctAnswer: 'Tendão da cabeça longa do músculo bíceps braquial',
        explanation: `
<strong>Sulco Intertubercular (Sulco Bicipital):</strong><br>
<strong>Conteúdo:</strong> Tendão da cabeça longa do músculo bíceps braquial<br>
<strong>Estabilização:</strong> Ligamento transverso umeral (faixe de fibras entre os tubérculos) mantém o tendão no sulco<br>
<strong>Bainha:</strong> O tendão é envolvido por uma bainha sinovial derivada da cápsula articular do ombro<br>
<strong>Origem do tendão:</strong> Tubérculo supraglenoidal e lábio glenoidal superior
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
A <strong>tendinite bicipital</strong> causa dor anteriossuperior no ombro ao longo do sulco. O <strong>teste de Speed</strong> (dor na flexão resistida do ombro com cotovelo estendido e antebraço supinado) e o <strong>teste de Yergason</strong> (dor na supinação resistida) são positivos. Ruptura do tendão longo causa o sinal do "Popeye".
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual nervo é responsável pela inervação do músculo supraespinhal?',
        options: [
            'Nervo axilar',
            'Nervo supraescapular',
            'Nervo musculocutâneo',
            'Nervo subescapular superior'
        ],
        answer: 1,
        correctAnswer: 'Nervo supraescapular',
        explanation: `
<strong>Nervo Supraescapular (C5-C6):</strong><br>
<strong>Origem:</strong> Tronco superior do plexo braquial<br>
<strong>Trajeto:</strong> Passa pela incisura da escápula (sob o ligamento transverso superior da escápula)<br>
<strong>Músculos inervados:</strong><br>
&nbsp;&nbsp;• Supraespinhal (inerva antes de passar pela incisura espinoglenóidea)<br>
&nbsp;&nbsp;• Infraespinhal (inerva após contornar a espinha da escápula)<br>
<strong>Sensitivo:</strong> Cápsula glenoumeral e acromioclavicular
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Compressão do nervo supraescapular na incisura da escápula (p. ex. por cistos ganglionares, trauma) causa atrofia das fossas supra e infraescapulares com fraqueza na abdução e rotação lateral. Comum em voleibolistas (<em>síndrome do nervo supraescapular</em>).
</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        question: 'Em qual nível vertebral se projeta o ângulo inferior da escápula quando o braço está ao longo do corpo?',
        options: [
            'T4',
            'T7',
            'T10',
            'T12'
        ],
        answer: 1,
        correctAnswer: 'T7',
        explanation: `
<strong>Ângulo inferior da escápula → T7</strong><br>
<strong>Referências escapulares úteis:</strong><br>
&nbsp;&nbsp;• Espinho da escápula → T3<br>
&nbsp;&nbsp;• Processo coracoide → nível da 1ª costela / clavícula medial<br>
&nbsp;&nbsp;• Ângulo inferior → T7<br>
<strong>Uso clínico:</strong> Referência para contar nervos intercostais, localizar dermatomas e vertebras torácicas no exame físico<br>
<strong>Movimento:</strong> Rotação superior do ângulo inferior durante a abdução (ação do serrátil anterior)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
A projeção do ângulo inferior é usada como ponto de referência na <strong>drenagem de derrames pleurais</strong> e na realização de bloqueios nervosos intercostais. Também é marco para avaliar simetria escapular no exame postural.
</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        question: 'Quais são os músculos que se originam no processo coracoide da escápula?',
        options: [
            'Peitoral maior, bíceps braquial (cabeça longa) e coracobraquial',
            'Peitoral menor, bíceps braquial (cabeça curta) e coracobraquial',
            'Subescapular, peitoral menor e bíceps braquial (cabeça curta)',
            'Deltóide, coracobraquial e bíceps braquial (cabeça longa)'
        ],
        answer: 1,
        correctAnswer: 'Peitoral menor, bíceps braquial (cabeça curta) e coracobraquial',
        explanation: `
<strong>Estruturas que se fixam no Processo Coracoide:</strong><br>
<strong>Músculos (mnemônico: "Peitoral Bifurca Coracoide"):</strong><br>
&nbsp;&nbsp;• <strong>Peitoral menor</strong> → inserção (vem do tórax)<br>
&nbsp;&nbsp;• <strong>Bíceps braquial (cabeça curta)</strong> → origem<br>
&nbsp;&nbsp;• <strong>Coracobraquial</strong> → origem<br>
<strong>Ligamentos:</strong> Coracoclavicular (cônoide + trapezoide) e coracoacromial<br>
<strong>Observação:</strong> A cabeça <em>longa</em> do bíceps origina-se no tubérculo supraglenoidal, não no coracoide
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Na técnica cirúrgica de <strong>Latarjet</strong> (tratamento da instabilidade glenoumeral recorrente), o processo coracoide com suas inserções musculares (bíceps curto + coracobraquial) é transferido para a borda glenoidal anterior, aumentando o arco ósseo e criando um efeito de "sling" dinâmico.
</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
    {
        question: 'Qual fossa da escápula origina o músculo subescapular?',
        options: [
            'Fossa supraespinhal',
            'Fossa infraespinhal',
            'Fossa subescapular',
            'Fossa coronóidea'
        ],
        answer: 2,
        correctAnswer: 'Fossa subescapular',
        explanation: `
<strong>Fossa Subescapular:</strong><br>
<strong>Localização:</strong> Face anterior (costal/ventral) da escápula, voltada para as costelas<br>
<strong>Músculo originado:</strong> Subescapular — o único componente <em>anterior</em> do manguito rotador<br>
<strong>Fossas posteriores da escápula</strong> (separadas pela espinha):<br>
&nbsp;&nbsp;• <strong>Fossa supraespinhal</strong> (acima da espinha) → supraespinhal<br>
&nbsp;&nbsp;• <strong>Fossa infraespinhal</strong> (abaixo da espinha) → infraespinhal<br>
<strong>Nota:</strong> A fossa coronóidea pertence ao úmero (extremidade distal), não à escápula
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Cistos ganglionares na <strong>incisura espinoglenóidea</strong> (frequentemente associados a lesões do lábio glenoidal posterior) podem comprimir o nervo supraescapular após seu ramo para o supraespinhal, causando atrofia <em>seletiva</em> da fossa infraespinhal com infraespinhal poupado.
</p>
</details>
        `,
        difficulty: 'médio',
        disabled: false
    },
    {
        question: 'Qual das alternativas descreve corretamente a articulação acromioclavicular?',
        options: [
            'Articulação sinovial do tipo esferóidea entre o acrômio e a escápula',
            'Articulação sinovial do tipo plana (artrodia) entre o acrômio e a extremidade acromial da clavícula',
            'Articulação fibrocartilaginosa entre o acrômio e o processo coracoide',
            'Articulação em sela entre a clavícula e o manúbrio do esterno'
        ],
        answer: 1,
        correctAnswer: 'Articulação sinovial do tipo plana (artrodia) entre o acrômio e a extremidade acromial da clavícula',
        explanation: `
<strong>Articulação Acromioclavicular (AC):</strong><br>
<strong>Tipo:</strong> Sinovial plana (artrodia) — permite deslizamento<br>
<strong>Ossos:</strong> Extremidade acromial da clavícula + acrômio da escápula<br>
<strong>Estabilização:</strong><br>
&nbsp;&nbsp;• Ligamento acromioclavicular (cápsula espessada)<br>
&nbsp;&nbsp;• Ligamento coracoclavicular (cônoide + trapezoide) — principal estabilizador vertical<br>
<strong>Disco articular:</strong> Frequentemente presente (variável, pode ser parcial ou ausente com a idade)
<details style="margin-top:10px;">
<summary style="cursor:pointer;color:#007bff;font-weight:bold;">📋 Correlações Clínicas</summary>
<p style="margin-top:8px;padding:10px;background:#f8f9fa;border-left:3px solid #007bff;">
Lesões da articulação AC (<strong>classificação de Rockwood I-VI</strong>) são comuns em esportes de contato. Graus I-II: apenas ligamento AC lesado. Grau III: AC + coracoclavicular lesados → clavícula ascende. Graus IV-VI: deslocamentos graves com indicação cirúrgica.
</p>
</details>
        `,
        difficulty: 'difícil',
        disabled: false
    },
];