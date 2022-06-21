"use strict";
(() => {
    const fullName = (firstName, ...restoNombres) => {
        return `${firstName} ${restoNombres.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
