document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de reação dentro do post
    const botoesReacao = document.querySelectorAll('.post-acoes button');

    botoesReacao.forEach(botao => {
        botao.addEventListener('click', () => {
            // Encontra o elemento <span> dentro do botão clicado
            const contadorSpan = botao.querySelector('span');
            
            if (contadorSpan) {
                // Obtém o valor atual, converte para número e soma +1
                let valorAtual = parseInt(contadorSpan.textContent, 10) || 0;
                contadorSpan.textContent = valorAtual + 1;
            }
        });
    });
});