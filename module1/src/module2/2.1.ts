{
    // 

    //type assertion
    // we use type assertion when we know more about a value than typescript does
    // we are mentioning the type of a value to typescript use as keyword
    let anything : any
    anything = 'Next level web development';
    
    anything = 15;

    (anything as string)


    const kgToGm = (value:string | number):string | number | undefined=> {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000
            return `The converted value is : ${convertedValue}` 
        }
        if(typeof value === 'number'){
            return value*1000
        }
    }


    const result1 = kgToGm(1000) as number
    const result2 = kgToGm('1000') as string




    type CustomError = {
        message : string
    }

    try{

    }catch(error){
        console.log((error as CustomError).message);
    }
















    // 
}