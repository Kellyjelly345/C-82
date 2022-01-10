var mouseEvent = "empty";

var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "blue";

width_of_line = 3;

canvas.addEventListener("mousedown",mousedown)
function mousedown(e){
    mouseEvent = "mousedown"
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup",mouseup)
function mouseup(e){
    mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave",mouseleave)
function mouseleave(e){
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove",mousemove)
function mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft
    current_position_of_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mousedown") {

        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y)
        ctx.lineTo(current_position_of_x,current_position_of_y)
        ctx.stroke();
        
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
}