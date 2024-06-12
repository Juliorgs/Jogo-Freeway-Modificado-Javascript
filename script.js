//Medidas da pista
let xPista = 1250;
let yPista = 1000;

function setup(){
    createCanvas(xPista, yPista);
    trilhaSonora.loop();
}
function draw(){
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarros();
    movimentaCarros();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    colisao();
    limitesY();
    ganharPonto();
    mostrarPontos();
}