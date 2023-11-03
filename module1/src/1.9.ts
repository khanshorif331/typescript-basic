{
// type alias

type Student = {
    name : string,
    age : number,
    contactNo? : string,
    gender : string,
    address : string
}



const student1 :Student={
    name: 'Shorif',
    age: 25,
    gender:'male',
    contactNo: '01712345678',
    address: 'Dhaka'
}

const student2 :Student={
    name : 'Maamun',
    age : 40,
    gender : 'male',
    address : 'Dubai'
}


// string 

type UserName = string
type IsAdmin = boolean

const userName : UserName = 'Shorif'
const isAdmin:IsAdmin = true

// function
type Add =(num1:number,num2:number)=>number

const add:Add = (num1,num2)=> num1+num2




















// 

}