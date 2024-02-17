
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {    
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número');
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    tentativas = 1
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();

function verificarChute() {
    console.log(`o botao foi clicado.. ${numeroSecreto}`);
    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Acertouuuu.! Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
    

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto){
            exibirTextoNaTela('h1', `O número secreto é menor que ${chute}`);
            tentativas++;
    }
    else {
        exibirTextoNaTela('h1', `O número secreto é maior que ${chute}`);
        tentativas++;
    }
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdeLista = listaNumerosSorteados.length;

    if (qtdeLista == numeroLimite)
        listaNumerosSorteados = [];

    if(listaNumerosSorteados.includes(numeroEscolhido))
        return gerarNumeroAleatorio();
    else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha uma opção.';

