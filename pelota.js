/**
 * Practica de POO usando canvas
 * MLM
 * 2022/08/05
 */
/** CARGAR RECURSOS */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
/** DEFINIR VALORES INICIALES */
var centro={x:100, y:100};
var radio= 100;
var velocidad={x:5,y:-2}
animar();

/** DIBUJAR EL MUNDO */
function dibujar() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.arc(centro.x, centro.y, radio, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth=3;
    ctx.strokeStyle='blue';
}
/** CALCULAR VALORES */
function calcular() {
    
    if(centro.x + velocidad.x > canvas.width-radio || centro.x + velocidad.x < radio) {
        velocidad.x = -velocidad.x;
    }
    if(centro.y + velocidad.y > canvas.height-radio || centro.y + velocidad.y < radio) {
        velocidad.y = -velocidad.y;
    }
    
    centro.x += velocidad.x;
    centro.y += velocidad.y;
}
/** CICLO DE ANIMACION */
function animar() {
    dibujar();
    calcular();
    requestAnimationFrame (animar);    
}



 
 