'use strict';

/**
* Debug file
*/

const DEBUG_ENABLED = true;


function log(s) {
    if(DEBUG_ENABLED) {
        console.log(s);
    }
}
    
let debug = (function() {
    
    const pointDistance = 3;
    const pointAmount = 350;
    
    let lastFPSs = [];
    let fluctuations = [];
        
    function showFPS() {
        if(frameRate) {
            lastFPSs.push(frameRate);
            fluctuations.push(getFluctuation(lastFPSs));
        }
        if(lastFPSs.length > pointAmount) {
            lastFPSs.shift();
            fluctuations.shift();
        }
        
        // FPS
        for(let i=0; i<lastFPSs.length-1; i++) {
            if(lastFPSs[i+1] < 55) {
                strokeStyle('white');
            } else {
                strokeStyle('green');
            }
            stroke(10+i*pointDistance, 85-lastFPSs[i],
                   10+i*pointDistance+pointDistance, 85-lastFPSs[i+1]);
        }
        // fluctuation
        for(let i=0; i<fluctuations.length-1; i++) {
            if(Math.abs(fluctuations[i+1]) < 15) {
                strokeStyle('green');
            } else {
                strokeStyle('red');
            }
            stroke(10+i*pointDistance, 100-fluctuations[i],
                   10+i*pointDistance+pointDistance, 100-fluctuations[i+1]);
        }
        strokeStyle('grey');
        stroke(10, 100, 10+pointAmount*pointDistance, 100);
        
        // Text
        fillStyle('white');
        textAlign('left', 'top');
        textStyle('10px monospace');
        text('FPS : '+ Math.round(lastFPSs[lastFPSs.length-1]), 10, 10);
        text('Fluctuation : '+ Math.round(fluctuations[fluctuations.length-1]), 10, 50);
    }
    
    function getFluctuation(array) {
        let fluc = 0;
        for(let a of array) {
            fluc += 60-a;
        }
        return fluc;
    }
    
    return {
        showFPS,
    }
    
})();