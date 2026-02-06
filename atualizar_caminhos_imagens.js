// Script para atualizar todos os caminhos das imagens
// Execute este script no console do navegador ou use para referência

const atualizacoes = [
    // Questões 1-3 (já atualizadas)
    { antigo: 'membros_inferiores/imagem18.png', novo: 'imagens/membros_inferiores/image18.png' },
    { antigo: 'membros_inferiores/imagem17.png', novo: 'imagens/membros_inferiores/image19.png' },
    { antigo: 'membros_inferiores/imagem16.png', novo: 'imagens/membros_inferiores/image20.png' },
    
    // Questões 4-20 (precisam ser mapeadas conforme as imagens disponíveis)
    { antigo: 'membros_inferiores/imagem15.png', novo: 'imagens/membros_inferiores/quiz_4_pectineo.png' },
    { antigo: 'membros_inferiores/imagem12.png', novo: 'imagens/membros_inferiores/quiz_5_vasto_lateral.png' },
    { antigo: 'membros_inferiores/imagem13.png', novo: 'imagens/membros_inferiores/quiz_6_vasto_intermedio.png' },
    { antigo: 'membros_inferiores/imagem14.png', novo: 'imagens/membros_inferiores/quiz_7_vasto_medial.png' },
    { antigo: 'membros_inferiores/imagem11.jpg', novo: 'imagens/membros_inferiores/quiz_8_sartorio.png' },
    { antigo: 'membros_inferiores/imagem1.jpg', novo: 'imagens/membros_inferiores/quiz_9_musculo_fibular_longo.png' },
    { antigo: 'membros_inferiores/imagem2.jpg', novo: 'imagens/membros_inferiores/quiz_13_musculo_vasto_medial.png' },
    { antigo: 'membros_inferiores/imagem4.jpg', novo: 'imagens/membros_inferiores/quiz_14_musculo_tibial_anterior.png' },
    { antigo: 'membros_inferiores/imagem5.jpg', novo: 'imagens/membros_inferiores/quiz_15_nervo_ilio_hipogastrico.png' },
    { antigo: 'membros_inferiores/imagem6.jpg', novo: 'imagens/membros_inferiores/quiz_16_veia_femoral.png' },
    { antigo: 'membros_inferiores/imagem7.jpg', novo: 'imagens/membros_inferiores/quiz_17_tendoes_flexores_longos.png' },
    { antigo: 'membros_inferiores/imagem8.jpg', novo: 'imagens/membros_inferiores/quiz_18_nervo_tibial.png' },
    { antigo: 'membros_inferiores/imagem9.jpg', novo: 'imagens/membros_inferiores/quiz_19_musculo_semimembranaceo.png' },
    { antigo: 'membros_inferiores/imagem10.jpg', novo: 'imagens/membros_inferiores/quiz_20_nervo_femoral.png' }
];

console.log('Caminhos que precisam ser atualizados:');
atualizacoes.forEach((item, index) => {
    console.log(`${index + 1}. ${item.antigo} → ${item.novo}`);
});
