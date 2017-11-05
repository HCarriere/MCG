'use strict';

/*
* scenes
* properties :
{
    buttons: [button],
    particles: [particleSet],
    background: image,
    
}
*/

let scenes = (function() {
    let currentScene = {};
    
    function set(properties) {
        buttons.reset();
        if(properties.buttons) {
            for(let b of properties.buttons) {
                buttons.create(b);
            }
        }
    }
    
    
    return {
        set,
    }
})();
