'use strict';

/**
* CORE.JS
* main document
*/

let canvas;
let ctx;
let background;
let backgroundCanvas;
let width;
let height;
let currentFrame;
let mouse;



function launch() {
    
    log('Launching MCG');
    
    initCanvas();
    
    render();
    
}

// MAIN LOOP //

function render() {
    // ctx.clearRect(0, 0, width, height);
    fillStyle(0x000);
    rect(0,0,width,height);
    
    
    
    // buttons
    buttons.render();
    
    currentFrame++;
    requestAnimationFrame(render);
}

// UTILS //

function initCanvas() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    backgroundCanvas = document.getElementById('background');
    background = backgroundCanvas.getContext('2d');
    mouse = {
        x: 0,
        y: 0,
        on: false,
    };
    // window events
    window.addEventListener('mousedown', mousePressed);
	window.addEventListener('mouseup', mouseReleased);
	window.addEventListener('mousemove', mouseDragged);
	window.addEventListener('keypress', keyPressed);
    window.onresize = resizeCanvas;
	
    // canvas size
	width = canvas.width = (window.innerWidth) - 100;
	height = canvas.height = (window.innerHeight) - 100;
    resizeCanvas();
}

//////////////////
// window event //
//////////////////

function resizeCanvas() {
    width = canvas.width = backgroundCanvas.width = (window.innerWidth);
    setTimeout(function() {
        height = canvas.height = backgroundCanvas.height = (window.innerHeight);
    }, 0);
};

function mousePressed(e) {
	mouse.x = e.offsetX;
	mouse.y = e.offsetY;
	mouse.on = true;
}

function mouseReleased(e) {
	mouse.on = false;
}

function mouseDragged(e) {
	mouse.x = e.offsetX;
	mouse.y = e.offsetY;
}
function keyPressed(e) {
    //e.key
}



$(document).ready(() => {
    launch();
});