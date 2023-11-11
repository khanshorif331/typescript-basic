{
// 



class Animal {
    // public name:string;                  //this is called property inside class
    // public species:string;
    // public sound:string


    // parameter properties

    constructor(public name:string,public species:string,public sound:string){
        // this.name=name,
        // this.species=species,
        // this.sound=sound
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}` )
    }                                                                       //this is called method inside class
}

const dog = new Animal('German Shepherd','Dog','Bark')
const cat = new Animal('Persian Cat','Cat','Meow')
cat.makeSound()




















    // 
}