"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    // let myFunction: (y:number, x:number)=>number;
    // let myFunction: (y:string)=>string;
    // let myFunction: ()=>string;
    // myFunction = 10;
    // console.log(myFunction)
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Diego'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
