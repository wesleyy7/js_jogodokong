let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;


//Placar
let meusPontos = 0;
let pontosDoOponente = 0;
 
//Sons
let ponto;
let raquetada;
let trilha;

function preload(){
  trilha= loadSound ("trilha.mp3")
  ponto= loadSound("ponto.mp3")
  raquetda= loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoDaRaquete();
  verificarColisaoRaquete(xRaquete, yRaquete);
  incluirPlacar();
  marcarPontos();
  
  
  
  function mostrarBolinha(){
  circle(xBolinha,yBolinha,diametro);
  }
 
  function movimentaBolinha(){
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
  }
 
  function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}
  function mostrarRaquete(x,y){
    rect(x, y, raqueteComprimento, raqueteAltura);
  }
 
  function movimentoDaRaquete(){
    if(keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
  if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
  }
 
  function verificarColisaoRaquete(){
    if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha +raio > yRaquete){
      velocidadexBolinha *= -1;
      raquetada.play
    }
  }
 
  function verificarColisaoRaquete(x,y){
    colidiu = collideRectCircle(x,y,raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if(colidiu){
      velocidadexBolinha *= -1;
    }
  }
 
 function incluirPlacar(){
   fill("white")
   text(meusPontos, 278, 26);
   text(pontosDoOponente, 321, 26)
   
 }
  function marcarPontos(){
    if(xBolinha > 590){
      meusPontos += 1;
      ponto.play
    }
    if (xBolinha < 10){
      pontosDoOponente += 1;
  }
  
}
}
