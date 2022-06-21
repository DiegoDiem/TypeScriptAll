(()=>{
    // Enum (enumeraciones)
    // Valores que se pueden ingresar

    enum AudioLevel{
        min=1,
        medium, // valor es = 2
        // medium,
        max =10
    }


    let currentAudio:AudioLevel = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);



})()