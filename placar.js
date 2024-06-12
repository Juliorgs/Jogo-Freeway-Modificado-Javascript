function mostrarPontos(){
    textSize(yPista/20)
    fill(color(255, 240, 60))
    text(pontuacao, posicaoInicialXAtor, yPista/(1000/60));}

function ganharPonto(){
    if(yAtor <= yPista/100){
        somDePontuacao.play();
        voltarPosicaoInicial();
        pontuacao++;
    }   
}
