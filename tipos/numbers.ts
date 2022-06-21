(()=>{
    let avengers: number = 10;

    console.log(avengers)

    const villians:number = 20;
    
    if(avengers< villians){
        console.log('Problemas')
    }else{
        console.log('Salvados')
    }

    avengers=Number('55A');
    //! Nan = Not a number es considerado un numero
    console.log({avengers})

})()