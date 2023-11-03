{
// 

    // interface

    type User1 = {
        name:string,
        age:number,
    }

    interface User2 {
        name:string,
        age:number,
    }


    // intersections
    type UserWithRole1 = User1 & {role:string}

    interface UserWithRole2 extends User2{
        role:string
    }

    const user1:UserWithRole2 = {
        name:'Shorif',
        age:25,
        role:'manager'
    }



    // js -->  object, array --> object, funtion --> object



    // array with interface

    type Roll1 = number[]

    interface Roll2 {
        [index:number] : number
    }

    const rollNumber1:Roll2 = [1,2,3]
                         //    0 1 2 --> number type

    



    // function with interface

    type Add1 = (num1:number,num2:number)=>number
    interface Add2{
        (num1:number,num2:number):number
    }

    const add:Add2 = (num1,num2) => num1+num2
    


















    // 
}