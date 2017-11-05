'use strict';

/*
* keyboard controller
*/

let keyboardAdapter = (function(){
    
    let keyMap = {};
    let hashActiveControls = {};
    let activeControls = [];
    
    function onKeyPressed(key) {
        hashActiveControls[keyMap[key]] = true;
    }
    
    function onKeyReleased(key) {
        hashActiveControls[keyMap[key]] = false;
    }
    
    function setKeyMap(control, key) {
        keyMap[control] = key;
    }
    
    // TODO get users params
    function initKeysMap() {
        setKeyMap('z', CONST.CONTROL.UP);
        setKeyMap('s', CONST.CONTROL.DOWN);
    }
    
    // called every frames
    function run() {
        for(const c of Object.keys(hashActiveControls)) {
            if(hashActiveControls[c]) {
                controller.action(c);
            }
        }
    }
    
    return {
        initKeysMap,
        setKeyMap,
        run,
        onKeyPressed,
        onKeyReleased,
    }
})();