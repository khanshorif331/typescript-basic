{
// 

// question mark namings

// ternary operator || optional chaining || nullish coalescing operator



// ternary operator
const age:number = 25
 
if(age>18){
    console.log('adult');
}else{
    console.log('not adult');
}


const isAdult = age>=18 ? 'adult' : 'not adult'
console.log({isAdult});


// nullish coalescing operator
// null | undefined -->> decision making
// Though ternary operator and nullish coalescing operator are used for decision making, they are not same.nullish only uses if we need to take a decision based on null or undefined.

const isAuthenticated = null 

const result1 = isAuthenticated ?? 'Guest'
console.log({result1});




// optional chaining

type User = {
    name:  string,
    address:{
        city:string
        road:string
        presentAddress:string
        permanentAddress?:string
    }
}


const user:User = {
    name:'Shorif',
    address:{
        city:'Dhaka',
        road:'60',
        presentAddress:'Dhanmondi',
    }
}


// using nullish coalescing operator
const permanentAddress = user?.address?.permanentAddress ?? 'No permanent address'

console.log({permanentAddress});















    // 
}