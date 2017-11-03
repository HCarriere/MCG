'use strict';

/**
* Debug file
*/

const DEBUG_ENABLED = true;


function log(s) {
    if(DEBUG_ENABLED) {
        console.log(new Date().toISOString() +' '+ s);
    }
}
    
