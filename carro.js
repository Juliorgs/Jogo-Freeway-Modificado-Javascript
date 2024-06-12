/*Posições iniciais proporcionais ao tamanho da pista, ou seja, independente do tamanho da pista
os carros ficarão na mesma posição proporcionalmente ao tamanho da pista, perceba que aqui preciso 
alterar apenas o eixo Y pois no eixo x a posicao do carro sempre será o final da pista, e para 
isso temos a variavel xPista.*/
                                                          
let xCarros = [xPista, xPista, xPista, xPista, xPista, xPista];                      
let yCarros = [yPista/10, yPista/4, yPista/(1000/380), yPista/(1000/530), yPista/(1000/660), yPista/(1000/800)];

//Medidas dos carros, proporcionais ao tamanho da pista.
let comprimentoCarros = xPista/10;  
let larguraCarros = yPista/12;      

//Velocidade dos carros, proporcional ao tamanho da pista.
let velocidadeDosCarros = [xPista/250, xPista/(1250/7), xPista/(1250/9), xPista/(1250/3), xPista/(1250/8), xPista/(1250/6)];

function mostraCarros(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, larguraCarros);
    } 
}
function movimentaCarros(){
    for(let i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeDosCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < xCarros.length; i++){
        if(passouTodaATela(xCarros[i])){ 
            xCarros[i] = xPista;              
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro <= -comprimentoCarros; //Usamos comprimentoCarros negativo para garantir 
}                                        //que o comprimento inteiro do carro passou pelo tela