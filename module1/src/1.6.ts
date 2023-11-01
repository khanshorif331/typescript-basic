{// Learning function
// Normal function
// Arow function


function add(num1:number, num2:number = 10):number{
    return num1+num2;
}

add(2,4)


const addArr = (num1:number,num2 :number):number => num1+num2

// object --> function --> method
// if we write any function inside an object, we call it method
// if we write any function inside object, we should use normal fuction instead of arrow function cause arrow function doesn't have this keyword

const poorUser = {
    name: 'Shorif',
    balance: 5000,
    addBalance(balance:number):string{
        return `My new balance is : ${this.balance + balance}` ;
    }
}




const arr : number[] = [1,9,10]

const newArr:number[] = arr.map((elem:number):number => elem*elem)

}