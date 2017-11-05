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
    textColor: string,
    tooltip: tooltip,
    shortcut: controllerAction,
    action: function,
    on: {controllerAction: function }
    cooldown: number,
}
*/

let buttons = (function() {
    
    let currentButtons = [];
    
    // private
    function action(button) {
        if(!button.innerCooldown || button.innerCooldown <= 0) {
            button.action();
            button.innerCooldown = button.cooldown;
        }
    }
    
    // public
    function create(properties) {
        return currentButtons.push(properties) - 1;
    }
    
    
    function remove(index) {
        currentButtons.splice(index, 1);
    }
    
    function render() {
        for(let b of currentButtons) {
            /// mouse events
            if(isInbound(mouse, b)) {
                b.hover = true;
                // tooltip
                if(b.tooltip) {
                    b.tooltip.show();
                }
                // clic
                if(mouse.on) {
                    b.isClicked = true;
                }
                if(!mouse.on && b.isClicked) {
                    b.isClicked = false;
                    action(b);
                }
            } else {
                b.hover = false;
                if(mouse.on) {
                    b.isClicked = false;
                }
            }
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
                if(b.textColor) {
                    fillStyle(b.textColor);
                }
                textAlign('center', 'middle');
                text(b.label, b.x+b.width/2, b.y+b.height/2);
            }
            // cooldown
            if(b.innerCooldown > 0) {
                textAlign('right', 'top');
                textStyle('20px');
                text(b.innerCooldown.toFixed(1), b.x+b.width, b.y);
                b.innerCooldown -= deltaTime;
            }
            // selected
            if(b.selected || b.hover) {
                strokeStyle('yellow');
                strokeRect(b.x, b.y, b.width, b.height);
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


