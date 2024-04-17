// Obtenha a referência para a imagem
const imagem = document.getElementById('imagem');

// Função para recalculcar a posição dos elementos sobrepostos quando a imagem é carregada
function recalculcarPosicaoElementos() {
    const textoSobreposto = document.querySelector('.texto-sobreposto');
    const botaoWhatsApp = document.querySelector('.botao-whatsapp');
    const faixaVermelha = document.querySelector('.faixa-vermelha');

    // Recalcule a posição do texto sobreposto
    const posicaoXTexto = imagem.offsetLeft + 20; // Adicione um espaço de 20px à esquerda
    const posicaoYTexto = imagem.offsetTop + 20; // Adicione um espaço de 20px acima
    textoSobreposto.style.left = `${posicaoXTexto}px`;
    textoSobreposto.style.top = `${posicaoYTexto}px`;

    // Recalcule a posição do botão WhatsApp
    const posicaoXBotao = imagem.offsetLeft + imagem.width / 2; // Alinhe o botão no meio horizontalmente
    const posicaoYBotao = imagem.offsetTop + imagem.height * 0.8; // Coloque o botão a 80% da altura da imagem
    botaoWhatsApp.style.left = `${posicaoXBotao}px`;
    botaoWhatsApp.style.top = `${posicaoYBotao}px`;

    // Recalcule a posição da faixa vermelha
    const posicaoXFaixa = imagem.offsetLeft;
    const posicaoYFaixa = imagem.offsetTop + imagem.height * 0.9; // Coloque a faixa a 90% da altura da imagem
    faixaVermelha.style.left = `${posicaoXFaixa}px`;
    faixaVermelha.style.top = `${posicaoYFaixa}px`;
}

// Chame a função quando a página for carregada e sempre que a imagem for alterada
window.addEventListener('load', recalculcarPosicaoElementos);
window.addEventListener('resize', recalculcarPosicaoElementos);
imagem.addEventListener('load', recalculcarPosicaoElementos);
