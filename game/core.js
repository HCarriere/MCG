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
let mouse;
let frameCount;
let frameRate;
let deltaTime;
let lastTick;

function launch() {
    
    log('Launching MCG');
    
    initCanvas();
    
    /*
    buttons.create({
        x: 30, y: 240,
        width: 300, height: 120,
        label: 'TEST BUTTON',
        backgroundColor: 'gray',
        textStyle: '30px Arial',
        textColor: 'white',
        action: function() {
            log('mais bien sur.');
        },
        cooldown: 0.5,
    });
    */
    
    gameEngine.loadMap({
        name: 'Map de test',
        width: 100,
        height: 40,
        start: {
            x: 10,
            y: 10
        }
        
    });
    
    render();
    
}

// MAIN LOOP //

function render() {
    // ctx.clearRect(0, 0, width, height);
    fillStyle('black');
    rect(0,0,width,height);
    
    getFPS();
    
    // controls
    controller.runAdapter();
    // game physics & mechanics
    gameEngine.run();
    
    // buttons
    buttons.render();
    // game
    gameEngine.render();
    // debug
    debug.showFPS();
    
    frameCount++;
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
    frameCount = 0;
    // window events
    window.addEventListener('mousedown', mousePressed);
	window.addEventListener('mouseup', mouseReleased);
	window.addEventListener('mousemove', mouseDragged);
	window.addEventListener('keydown', keyPressed);
	window.addEventListener('keyup', keyReleased);
    window.onresize = resizeCanvas;
	
    // canvas size
	width = canvas.width = (window.innerWidth) - 100;
	height = canvas.height = (window.innerHeight) - 100;
    resizeCanvas();
    
    // default controller adapter
    controller.setActiveAdapter(keyboardAdapter);
    controller.initActions([
        {key: CONST.CONTROL.UP,
        action: function(){  }},
        {key: CONST.CONTROL.DOWN,
        action: function(){  }},
    ]);
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
    keyboardAdapter.onKeyPressed(e.key);
}
function keyReleased(e) {
    keyboardAdapter.onKeyReleased(e.key);
}

function getFPS() {
    if(!lastTick){
        lastTick = performance.now();
        return;
    }
    deltaTime = (performance.now() - lastTick)/1000;
    lastTick = performance.now();
    frameRate = 1/deltaTime;
}

$(document).ready(() => {
    launch();
});