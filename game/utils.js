'use strict';

/*
utils
*/

/**
* object: Object (x, y)
* perimeter: Object(x, y, width, height)
* return boolean
*/
function isInbound(object, perimeter) {
    if(object.x > perimeter.x && object.x < perimeter.x+perimeter.width &&
       object.y > perimeter.y && object.y < perimeter.y+perimeter.height) {
        return true;
    }
    return false;
}