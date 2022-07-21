(()=>{

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;

    }

    const avengers={
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision:'Paul bettany',
        activo:true,
        poder:1550
    }

    // const {poder, vision} = avengers

    // console.log(poder, vision.toUpperCase())

    const printAvenger = ({ironman, ...resto}:Avengers)=>{
        console.log(ironman, resto)
    }
    // printAvenger(avengers)

    const avengersArray: [string, boolean, number] = ['Cap. América', true,150.15]

    const [capi , ironman, aNumber] = avengersArray;
    // console.log({ironman, capi, aNumber})
})()