var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_Y = 1;
 block_X = 1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
		top:block_Y,
		left:block_X
	});
	canvas.add(blockImageObject);
	});
	// para enviar imagens
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		newImage('rr1.png');
		console.log("r");
		block_X = 10;
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		newImage('gr.png');
		console.log("v");
		block_X = 200;
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		newImage('yr.png');
		console.log("a");
		block_X =350;
		// enviar ranger amarelo
	}
	if(keyPressed == '69')
	{
		newImage('pr.png');
		console.log("e");
		block_X = 600;
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		newImage('br.png');
		console.log("i");
		block_X = 700;
	// enviar ranger índigo
	}
	
}

