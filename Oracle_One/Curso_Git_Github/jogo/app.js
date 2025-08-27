// Criacao de uma lista vazia
let listaNumeroAleatoerio = [];
let numeroLimite =  50;

let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);
let tentativas = 1;


// Funcao com paramentros
function exibirNome(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});

    // Speech API
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.28; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

// funcao para as mensagens
function exibirMensagemInicial() {
    exibirNome('h1', 'Jogo da advinhação');
    exibirNome('p','Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();


// Funcao sem paramentro e sem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio){
        let mensagemTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        exibirNome('h1', 'Você acertou!');
        exibirNome('p', `Você acertou com ${tentativas} ${mensagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limparCampo();
    }else {
        if (chute < numeroAleatorio){
            exibirNome('p', 'O numero é maior!');
        }else{
            exibirNome('p','O numero é menor!')
        }
        tentativas ++;
        limparCampo();
    }
    //console.log('O botao foi clicado.');
  //  console.log(`Numero aleatorio ${numeroAleatorio}`);
   // let verificacao = (chute == numeroAleatorio);
   // console.log(`O numero escolhido é ${verificacao}`);
}

// Funcao sem paramentro e com retorno
function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaNumeroAleatoerio.length;

    if (quantidadeDeElementos == numeroLimite){
        listaNumeroAleatoerio = [];
    }
    if(listaNumeroAleatoerio.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    }else {
        listaNumeroAleatoerio.push(numeroAleatorio); 
        console.log(listaNumeroAleatoerio);     
        return numeroAleatorio;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}