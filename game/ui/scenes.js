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


let scene = {
    menu: {
        buttons: [
            
        ],
        background: 'coucou',
    },
    options: {
        
    },
};

let scenes = (function() {
    let currentScene = {};
    
    function set(scene) {
        // buttons
        buttons.reset();
        if(properties.buttons) {
            for(let b of properties.buttons) {
                buttons.create(b);
            }
        }
        
        // background (if not set, transparent)
    }
    
    
    return {
        set,
    }
})();
