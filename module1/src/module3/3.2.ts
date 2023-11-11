{
// 
    // oop--> inheritance


    class Parent {
        name:string;
        age:number;
        address:string;
    
    
        constructor(name:string,age:number,address:string){
            this.name=name,
            this.age=age,
            this.address=address 
            
        }
        getSleep(numOfHours:number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
            
        }
    }

 class Student extends Parent {
    

    constructor(name:string,age:number,address:string){
       super(name,age,address)
    }
    
 }

 const student1 = new Student('Shorif',20,'Dhaka')
 


 class Teacher extends Parent {
    
    designation:string;


    constructor(name:string,age:number,address:string,designation:string){
         super(name,age,address)
        this.designation=designation
        
    }
    takeClass(numOfClass:number){
        console.log(`${this.name} will take ${numOfClass} classes`);
    }
 }

 const teacher1 = new Teacher('Shoriful',20,'Dhaka','Lecturer')
 















// 
}