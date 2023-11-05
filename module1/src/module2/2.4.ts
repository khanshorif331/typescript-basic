{
    // interface - generic

    interface Developer<T,X=null> {
        name:string
        computer:{
            brand:string,
            model:string,
            releaseYear:number
        },
        smartWatch: T,
        bike?:X
    }



    type EmilabWatch ={
        brand:string,
        model:string,
        display:string
    }



    const poorDeveloper : Developer<EmilabWatch> = {
        name:'Shorif',
        computer:{
            brand:'HP',
            model:'Pavilion',
            releaseYear:2019,
        },
        smartWatch:{
            brand:'Emilab',
            model:'iWatch',
            display:'OLED',
        }
    }

    interface AppleWatch {
        brand:string,
        model:string,
        heartRate:boolean,
        sleepTrack:boolean
    }


    interface YamahaBike {
        model:string,
        engineCapacity:string
    }

    const richDeveloper : Developer<AppleWatch,YamahaBike> = {
        name:'Rich Developer',
        computer:{
            brand:'Asus',
            model:'Zenbook',
            releaseYear:2018,
        },
        smartWatch:{
            brand:'Apple',
            model:'iWatch',
            heartRate:true,
            sleepTrack:true
        },
        bike:{
            model:'Yamaha R15',
            engineCapacity:'150cc'
            }
    }





































    // 
}