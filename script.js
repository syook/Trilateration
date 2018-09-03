var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ranslating origin & drawing origin
c.translate(150, 450);
draw(0,0, 5, 'red');

c.scale(5,5);

const p1 = {};
const p2 = {};
const p3 = {};

// Drawing cirlce1
document.getElementById('draw1').addEventListener('click', function() {
    const cordx = document.getElementById('cordX1').value;
    const cordy = document.getElementById('cordY1').value;
    const rad = document.getElementById('rad1').value;

    draw(cordx, -cordy, rad, 'red');
    draw(cordx, -cordy, .1, 'red');
    p1.x = cordx;
    p1.y = cordy;
    p1.r = rad;
    p1.z = 1;
});

//drawing circle2
document.getElementById('draw2').addEventListener('click', function() {
    const cordx = document.getElementById('cordX2').value;
    const cordy = document.getElementById('cordY2').value;
    const rad = document.getElementById('rad2').value;

    draw(cordx, -cordy, rad, '#fff');
    draw(cordx, -cordy, .1, '#fff');
    p2.x = cordx;
    p2.y = cordy;
    p2.r = rad;
    p2.z = 1;
});

// drawing cirlce3
document.getElementById('draw3').addEventListener('click', function() {
    const cordx = document.getElementById('cordX3').value;
    const cordy = document.getElementById('cordY3').value;
    const rad = document.getElementById('rad3').value;

    draw(cordx, -cordy, rad, 'lime');
    draw(cordx, -cordy, .1, 'lime');
    p3.x = cordx;
    p3.y = cordy;
    p3.r = rad;
    p3.z = 1;
});


function draw(cordx, cordy, rad, color) {
    c.beginPath();
    c.arc(cordx, cordy, rad, 0, 2*Math.PI);
    c.strokeStyle = color;
    c.stroke();
    c.closePath();
    
}

// clearing canvas
document.getElementById('clear').addEventListener('click', function() {
    c.clearRect(0-100,0-250,canvas.width,canvas.height);

})

// Trilateration
document.getElementById('trilaterate').addEventListener('click', function() {
    const returnData = trilaterate(p1, p2, p3, true);
    console.log({p1, p2, p3});

    draw(returnData.x, -returnData.y, 1, 'blue');
    console.log(returnData);
});

