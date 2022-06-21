"use strict";
(() => {
    const error = (message) => {
        // FUNCION QUE GENERALMENTE TERMINA CON UN ERROR
        throw new Error(message);
    };
    error('Auxilio');
    console.log('Hola mundo');
})();
