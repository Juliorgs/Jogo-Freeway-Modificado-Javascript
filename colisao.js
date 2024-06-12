function colisao(){
    for(let i = 0; i < yCarros.length; i++){
        // Verifica se a posição y do ator está dentro do alcance y do carro.
        if (yAtor < yCarros[i] + larguraCarros && yAtor + larguraAtor > yCarros[i]) {
            // Verifica se a posição x do ator está dentro do alcance x do carro.
            if (xAtor < xCarros[i] + comprimentoCarros && xAtor + comprimentoAtor > xCarros[i]) {
                // Colisão detectada, reseta a posição do ator.
                somDaColisao.play();
                voltarPosicaoInicial();
                if(pontosMaiorQueZero()){ 
                    pontuacao--;
                }
            }
        }
    }
}

function pontosMaiorQueZero(){//Garante que o jogador só vai perder pontos se ele tiver pelo menos 1 ponto.
    return pontuacao > 0;   
}