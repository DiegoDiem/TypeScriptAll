(()=>{

    let flash:{name:string, age?:number, powers:string[], getName?: ()=> string} = {
        name:'Barry Alen',
        age:24,
        powers:['Super velocidad', 'Viajar en el tiempo']
    }

    let superman:{name:string, age?:number, powers:string[], getName?: ()=> string} = {
        name:'Clark Kent',
        age:79,
        powers:['Super velocidad']
    }


    // flash ={
    //     name:'Clark Kent',
    //     // age:60,
    //     powers: ['Super fuerza'],
    //     getName(){
    //         return this.name;
    //     }
    // }

    console.log(flash)



})()