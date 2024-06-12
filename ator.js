//Posição inicial
let posicaoInicialXAtor = xPista/10;
let posicaoInicialYAtor = yPista/(1000/920);

let xAtor = posicaoInicialXAtor;
let yAtor = posicaoInicialYAtor;

//Medidas do ator
let comprimentoAtor = xPista/(1250/70);
let larguraAtor = yPista/(1000/70);

//Velocidade do movimento do ator, proporcional a medida da pista.
let velocidadeAtor = calcularVelocidade(xPista, yPista);

function calcularVelocidade(xPista, yPista) {//Calcula a velocidade proprocionalmente as medidas da pista.
    const areaRef = 1250000; //Valor de area referencial.
    const areaAtual = xPista * yPista;
    const fatorAjuste = Math.sqrt(areaAtual / areaRef);
    const velocidadeBase = 4;
    const velocidade = velocidadeBase * fatorAjuste;
    return velocidade;
}
//Pontuação inicial do jogo
let pontuacao = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, larguraAtor);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= velocidadeAtor;
    }
    if(keyIsDown(DOWN_ARROW)){
        yAtor += velocidadeAtor;
    }
    if(keyIsDown(LEFT_ARROW)){
        xAtor -= velocidadeAtor;
    }
    if(keyIsDown(RIGHT_ARROW)){
        xAtor += velocidadeAtor;
    }
}
function voltarPosicaoInicial(){
    xAtor = posicaoInicialXAtor;
    yAtor = posicaoInicialYAtor;
    return xAtor, yAtor;
}

function limitesY(){ // Impede que o ator saia da tela.
    if((yAtor + larguraAtor) > yPista){
        yAtor = yPista - larguraAtor;
    }
    if(xAtor < 0){
        xAtor = 0;
    }
    if(xAtor + comprimentoAtor > xPista){
        xAtor = xPista - comprimentoAtor;
    }
}