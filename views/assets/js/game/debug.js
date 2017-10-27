'use strict';

/**
* Debug object
*/
const ENABLE_DEBUG = true;

class Debug{
    
    static log(s) {
        if(ENABLE_DEBUG) console.log(new Date().toISOString() +' '+ s);
    }
}