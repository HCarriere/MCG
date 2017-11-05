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
    
    let lastFPSs = [];
    let lastFluctuations = [];
    
    function showFPS() {
        if(frameRate) {
            lastFPSs.push(frameRate);
            lastFluctuations.push(arrayFluctuation(lastFPSs));
        }
        if(lastFPSs.length > 60) {
            lastFPSs.shift();
            lastFluctuations.shift();
        }
        
        // FPS
        for(let i=0; i<lastFPSs.length-1; i++) {
            if(lastFPSs[i+1] < 59) {
                strokeStyle('red');
            } else {
                strokeStyle('white');
            }
            stroke(10+i*3, 85-lastFPSs[i],
                   10+i*3+3, 85-lastFPSs[i+1]);
        }
        // Fluctuations
        for(let i=0; i<lastFluctuations.length-1; i++) {
            if(lastFluctuations[i+1] < 10 && lastFluctuations[i+1] > -10) {
                strokeStyle('green');
            } else {
                strokeStyle('white');
            }
            stroke(10+i*3, 135-lastFPSs[i]/5,
                   10+i*3+3, 135-lastFPSs[i+1]/5);
        }
        
        // Text
        fillStyle('white');
        textAlign('left', 'top');
        textStyle('10px monospace');
        text('FPS : '+ Math.round(lastFPSs[lastFPSs.length-1]), 10, 10);
        text('Fluctuation : '+Math.round(lastFluctuations[lastFluctuations.length-1]), 10, 90);
    }
    
    function arrayFluctuation(array) {
        let fluc = 0.0;
        for(let i=0; i<array.length-1; i++) {
            fluc += array[i]-array[i+1];
        }
        return fluc;
    }
    
    return {
        showFPS,
    }
    
})();