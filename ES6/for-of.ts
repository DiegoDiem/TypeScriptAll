(()=>{


    type Avenger={
        name: string,
        weapon: string
    }

    const ironman: Avenger ={
        name: 'Ironman',
        weapon: 'Armorsuit'
    }
    const capAmerica: Avenger ={
        name: 'Capitán América',
        weapon: 'Escudo'
    }
    const thor: Avenger ={
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers:Avenger[] = [ironman, thor, capAmerica];

    let avenger

    for ( avenger of avengers) {
        // console.log(avenger.name, avenger.weapon)
        

    }
    // console.log(avenger)
})()