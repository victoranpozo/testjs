var canvas 	= document.getElementById("villaplatzi");
var context 	= canvas.getContext("2d");

// Creación de objetos
// url y loaded son atributos del objeto
var fondo = {
	url	: "img/tile.png",
	loaded	: false
};

var vaca = {
	url	: "img/vaca.png",
	loaded	: false
};

var pollo = {
	url	: "img/pollo.png",
	loaded	: false
};

var cerdo = {
	url	: "img/cerdo.png",
	loaded	: false
};

// Creaci{on de la clase Position
class Position{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}
}

min = new Position(-10,-25);
max = new Position(430,440);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
vaca.cantidad = aleatorio(1,5);
vaca.position = [];

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
pollo.cantidad = aleatorio(1,10)
pollo.position = [];

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
cerdo.cantidad = 1;//aleatorio(1,3);
cerdo.position = [];
cerdo.step = 10;

var tecla = {
	LEFT	:	37,
	UP	:	38,
	RIGHT	:	39,
	DOWN	:	40
};

document.addEventListener("keydown", keyPress);

function cargarFondo()
{
	fondo.loaded = true;
	dibujar();
}

function cargarVacas()
{
	vaca.loaded = true;

	var cnt, x, y;
	for(cnt = 0; cnt < vaca.cantidad; cnt++)
	{
		x = 60*aleatorio(0,7);
		y = 60*aleatorio(0,7);
		vaca.position[cnt] = new Position(x,y);
	}

	dibujar();
}

function cargarPollos()
{
	pollo.loaded = true;

	var cnt, x, y;
	for(cnt = 0; cnt < pollo.cantidad; cnt++)
	{
		x = 60*aleatorio(0,7);
		y = 60*aleatorio(0,7);
		pollo.position[cnt] = new Position(x,y);

	}

	dibujar();
}

function cargarCerdos()
{
	cerdo.loaded = true;

	var cnt, x, y;
	for(cnt = 0; cnt < cerdo.cantidad; cnt++)
	{
		x = 60*aleatorio(0,7);
		y = 60*aleatorio(0,7);
		cerdo.position[cnt] = new Position(x,y);

	}

	dibujar();
}

function dibujar()
{
	var cnt, x, y;

	if(fondo.loaded)
	{
		context.drawImage(fondo.imagen, 0, 0);
	}

	if(vaca.loaded)
	{
		for(cnt = 0; cnt < vaca.cantidad; cnt++)
		{
			x = vaca.position[cnt].x;
			y = vaca.position[cnt].y;
			context.drawImage(vaca.imagen, x, y);
		}
	}

	if(pollo.loaded)
	{
		for(cnt = 0; cnt < pollo.cantidad; cnt++)
		{
			x = pollo.position[cnt].x;
			y = pollo.position[cnt].y;
			context.drawImage(pollo.imagen,x,y);
		}
	}

	if(cerdo.loaded)
	{
		for(cnt = 0; cnt < cerdo.cantidad; cnt++)
		{
			x = cerdo.position[cnt].x;
			y = cerdo.position[cnt].y;
			context.drawImage(cerdo.imagen,x,y);
		}


	}
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

function keyPress(evento)
{
	switch(evento.keyCode)
	{
		case tecla.LEFT:
			cerdo.position[0].x -= cerdo.step;
			if(cerdo.position[0].x <= min.x)
			{
				cerdo.position[0].x = min.x;
			}
			break;

		case tecla.UP:
			cerdo.position[0].y -= cerdo.step;
			if(cerdo.position[0].y <= min.y)
			{
				cerdo.position[0].y = min.y;
			}
			break;

		case tecla.RIGHT:
			cerdo.position[0].x += cerdo.step;
			if(cerdo.position[0].x >= max.x)
			{
				cerdo.position[0].x = max.x;
			}
			break;

		case tecla.DOWN:
			cerdo.position[0].y += cerdo.step;
			if(cerdo.position[0].y >= max.y)
			{
				cerdo.position[0].y = max.y;
			}
			break;
	}
	
	dibujar();
}
