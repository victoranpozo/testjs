var lienzo 	= document.getElementById("dibujito");
var contexto	= lienzo.getContext("2d");
var texto 	= document.getElementById("textLines");
var botonDibujar = document.getElementById("buttonDraw");
var botonBorrar = document.getElementById("buttonClear");

var teclas = {
	LEFT	:	37,
	UP	:	38,
	RIGHT	:	39,
	DOWN	:	40
};

var posX;
var posY;
var boolMouseDraw;

document.addEventListener("mousedown", fncMouseClick);
document,addEventListener("mousemove", fncMouseMove);
document.addEventListener("mouseup", fncMouseEnd);

document.addEventListener("keyup", fncTeclado);
botonDibujar.addEventListener("click", fncDibujar);
botonBorrar.addEventListener("click", fncBorrar);

function	fncMouseClick(fncEvent)
{
	boolMouseDraw = true;

	posX = fncEvent.layerX;
	posY = fncEvent.layerY;
}

function	fncMouseMove(fncEvent)
{
	if(boolMouseDraw == true)
	{
		drawLine("pink",posX, posY, fncEvent.layerX, fncEvent.layerY);
		posX = fncEvent.layerX;
		posY = fncEvent.layerY;
	}
}

function	fncMouseEnd()
{
	boolMouseDraw = false;
}

function	fncTeclado(fncEvent)
{
	switch(fncEvent.keyCode)
	{
		case teclas.LEFT:
			alert("left");
			break;
		case teclas.UP:
			fncDibujar();
			break;
		case teclas.DOWN:
			fncBorrar();
			break;
		default:
			//alert("otro");
			break;
	}
}

function	drawLine(color, x1, y1, x2, y2)
{	
	contexto.beginPath();			// Inicia el trazo
	contexto.strokeStyle	=	color;	// 
	contexto.moveTo(x1,y1);
	contexto.lineTo(x2,y2);
	contexto.stroke();
	contexto.closePath();			// Fin del trazo
}

function	drawBox(color, x1, y1, x2, y2)
{
	drawLine(color, x1, y1, x1, y2);
	drawLine(color, x1, y2, x2, y2);
	drawLine(color, x2, y2, x2, y1);
	drawLine(color, x2, y1, x1, y1);
}

function	fncDibujar()
{
	// Dibujo de malla
	console.log("Dibujar");

	var	cnt = 0;
	var	step;
	var	maxIt;

	maxIt 	= parseInt(texto.value) + 1;
	step 	= parseInt(lienzo.height/maxIt);
	
	fncBorrar();
	for(cnt = 0; cnt <= maxIt; cnt++)
	{
		//y0 = y0 + step*cnt;
		//x1 = x1 + step*cnt;
		//drawLine(color,x0,y0,x1,y1);
		drawLine("red",0,cnt*step,cnt*step,300);
		drawLine("blue",cnt*step,0,300,cnt*step);
	}

	// Dibujo de caja
	drawBox("green", 1, 1, 299, 299);
	console.log("Fin dibujar");
}

function	fncBorrar()
{
	contexto.clearRect(0, 0, lienzo.width, lienzo.height);
}
