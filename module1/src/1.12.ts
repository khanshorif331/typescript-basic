{
// 

// nullable types
const searchName = (value:string|null) =>{
    if(value){
        console.log('Searching');
    }else{
        console.log('there is nothing to search');
    }
}

searchName(null)



// unknown types  *typeof

const getSpeedInMeterPerSecond = (value:unknown)=>{
    if(typeof value === 'number'){
        const convertedSpeed = (value * 1000)/3600
        console.log(`Your speed is ${convertedSpeed} m/s`);
    }
    else if(typeof value === 'string'){
        const [result,unit] = value.split(' ')
        const convertedSpeed = (parseFloat(result) * 1000)/3600
        console.log(`Your speed is ${convertedSpeed} m/s`);
    }
    else{
        console.log('Wrong input');
        
    }
}

getSpeedInMeterPerSecond(1000)





// never types
// const sendError=(message:string):never=>{
//     throw new Error(message)
// };


// sendError('Mushkil se error hogaya')











    // 
}