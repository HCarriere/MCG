'use strict';

/*
* buttons
* properties : 
{
    x: number,
    y: number,
    width: number,
    height: number,
    label: string,
    image: image,
    backgroundColor: int,
    textStyle: string,
    textAlign: string,
    over: tooltip,
    shortcut: controllerAction,
    on: {controllerAction: function()}
    cooldown: number,
}
*/



let buttons = (function() {
    
    let currentButtons = [];
    
    function create(properties) {
        currentButtons.push(properties);
        return currentButtons.length - 1;
    }
    
    function get(index) {
        return currentButtons[index];
    }
    
    function remove(index) {
        currentButtons.splice(index, 1);
    }
    
    function render() {
        for(let b of currentButtons) {
            /// actions
            // mouse & pointer
            //TODO
            // events
            //TODO
            
            //TODO cooldown
            
            /// show
            // background
            if(b.image) {
                image(b.image, b.x, b.y);
            } else if(b.backgroundColor) {
                fillStyle(b.backgroundColor);
                rect(b.x, b.y, b.width, b.height);
            }
            // label
            if(b.label) {
                if(b.textStyle) {
                    textStyle(b.textStyle);
                }
                if(b.textAlign) {
                    textAlign(b.textAlign);
                }
                text(b.label, x, y);
            }
        }
    }
    
    function reset() {
        currentButtons = [];
    }
    
    
    return {
        create,
        render,
        remove,
        render,
        reset,
    }
})();


