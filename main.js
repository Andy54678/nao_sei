
var canvas = new fabric.Canvas('MyCanvas')

ball_X = 0;
ball_y = 0;
hole_x = 400;
hole_y = 800;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromULR(golf-h.png,function(Img)){
        hole_obj = Img;
        hole_obj.scaleToWidth(50); 
        hole_obj.scaleToHeight(50); 
        hole_obj.set({
		top:hole_y,
		left:hole_x;	
		}
		canvas.add(hole_obj)
		) 
    }
	newImage();
}

function newImage()
{
	fabric.Image.fromULR(ball.png,function(Img)){
        ball_obj = Img;
        ball_obj.scaleToWidth(50); 
        ball_obj.scaleToHeight(50); 
        ball_obj.set({
		top:ball_y,
		left:ball_x;	
		}
		canvas.add(ball_obj)
		) 
    }
	newImage();
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	
		if(ball_y >=0);{

			ball_y = ball_y - blockImageHeight
			console.log("altura da image do bloco =" + blockImageHeight);
			console.log("Quando a tecla direcional cima for precionada, X" +ball_x+",X"+ball_y );
			canvas.remove(ball_obj)
			playerUpdate()
	}

	function down()
	{
		if(ball_y <=450);{

			ball_y = ball_y - blockImageHeight
			console.log("altura da image do bloco =" + blockImageHeight);
			console.log("Quando a tecla direcional cima for precionada, X" +ball_x+",X"+ball_y );
			canvas.remove(ball_obj)
			playerUpdate()
	}

	function left()
	{
		if(ball_X >5)
		{
			ball_x = ball_x - blockImageHeight
			console.log("altura da image do bloco =" + blockImageHeight);
			console.log("Quando a tecla direcional cima for precionada, X" +ball_x+",X"+ball_y );
			canvas.remove(ball_obj)
			playerUpdate()
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			ball_x = ball_x - blockImageHeight
			console.log("altura da image do bloco =" + blockImageHeight);
			console.log("Quando a tecla direcional cima for precionada, X" +ball_x+",X"+ball_y );
			canvas.remove(ball_obj)
			playerUpdate()
		}
	}
	
}