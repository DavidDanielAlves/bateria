const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const btInstrumentoClicado = botao.id;
        document.querySelector(`#audio-${btInstrumentoClicado}`).play();
    })
})