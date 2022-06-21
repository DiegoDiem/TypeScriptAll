(()=>{

    const fullName =(firstName:string, ...restoNombres:string[])=>{
        return `${firstName} ${restoNombres.join(' ')} `
    }

    const superman = fullName('Clark', 'Joseph','Kent')

    console.log({superman})


})()