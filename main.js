"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
    }
}
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 79,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Diego',
        age: 24,
        adress: {
            id: 125,
            zip: 'KYC 2as',
            city: 'Otawa'
        },
        getFullAdress(id) {
            return this.adress.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        adress: {
            city: 'Toromto',
            id: 121,
            zip: 'AS F'
        }
    };
})();
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map