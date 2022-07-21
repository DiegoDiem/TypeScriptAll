(()=>{

    interface Client {
        name:string,
        age?:number
        adress:Adress,
        getFullAdress?(id:string):string;
    }

    interface Adress{
        id:number,
        zip:string,
        city:string
    }

    const client:Client ={
        name:'Diego',
        age:24,
        adress:{
            id:125,
            zip: 'KYC 2as',
            city:'Otawa'
        },
        getFullAdress( id:string ){
            return this.adress.city
        }
    }

    const client2: Client ={
        name:'Melissa',
        age:30,
        adress:{
            city:'Toromto',
            id:121,
            zip:'AS F'
        }
    }



})()