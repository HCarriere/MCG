'use strict';

/*
* abstract controller
*/

let controller = (function() {
    
    let actionList = [];
    let activeAdapter;
    /*
    ...
    if(key == 'z') {
        controller.action(CONST.CONTROL.UP);
    }
    */
    function action(control) {
        if(actionList[control]) {
            actionList[control]();    
        }
    }
    
    /*
    controller.initActions([
        {key:CONST.CONTROL.UP, action: function() { }}
    ]);
    */
    function initActions(actions) {
        for(let a of actions) {
            actionList[a.key] = a.action;
        }
    }
    
    
    function setActiveAdapter(adapter) {
        activeAdapter = adapter;
        activeAdapter.initKeysMap();
    }
    
    // called every frames
    function runAdapter() {
        if(activeAdapter) {
            activeAdapter.run();
        }
    }
    
    return {
        action,
        initActions,
        setActiveAdapter,
        runAdapter,
    }
})();

