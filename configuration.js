'use strict';

let config = {
    server: {
        type: getConfig('SERVER_TYPE', 'warzone'),
        port: getConfig('PORT', 3000),
    },
    session: {
        secret: 'oijf6584soe987UYGdyuedç_7hI54de_ç', 
    },
    database: {
        model: {
            user: 'user'
        },
        defaultAddress : {
            prefix:'mongodb',
            name:'localhost',
            database:'MCG',
        },
        salt: 's6fe48s6e8f*/sefesf*956f'
    },
    debug: getConfig('DEBUG', true),
    gameSources: [
        'core.js',
        'const.js',
        'debug.js',
        'utils.js',
        'graphics/base.js',
        'graphics/filters.js',
        'physics/physics.js',
        'physics/particles.js',
        'controller/controller.js',
        'controller/keyboard.js',
        'ui/buttons.js',
        'ui/scenes.js',
        'engine/engine.js',
    ],
    editorSources: [
        'editor.js',
    ]
};



function getConfig(varEnv, defaultValue) {
    let value = process.env[varEnv];
    if(!value) {
        value = getArguments(varEnv)
    }
    if(!value) {
        if(defaultValue != undefined) {
            value = defaultValue;
        } else {
            console.error('Undefined variable : '+varEnv+'. Please setup the variable in command line arguments or environnement variable.');
            value = null;
        }
    }
    console.log(varEnv+'='+value)
    return value;
}

function getArguments(varName) {
    for(let arg of process.argv) {
        if(arg.indexOf('=') != -1) {
            let aarg = arg.split('=');
            if(varName == aarg[0]) {
                return aarg[1];
            }
        }
    }
    return null;
}

module.exports = config;