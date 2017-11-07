'use strict';

/*
* Base game engine
*/

let gameEngine = (function() {
    
    let paused = false;
    let map;
    
    function loadMap(map) {
        this.map = map;
    }
    
    function render() {
        
    }
    
    function run() {
        if(paused) {
            return;
        }
        
    }
    
    function pause() {
        paused = true;
    }
    
    function resume() {
        paused = false;
    }
    
    return {
        loadMap,
        render,
        run,
        pause,
        resume,
    }
})();