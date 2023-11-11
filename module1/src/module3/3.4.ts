{
    // 

    //   instanceof guard
    //  type narrowing

    class Animal {
        name: string;
        species: string;


        constructor(name: string, species: string) {
            this.name = name,
            this.species = species
        }

        makeSound(){
            console.log('I am making sound');
            
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeBark(){
            console.log('I am Barking');
            
        }
    }


    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeow(){
            console.log('I am Meowing');
            
        }
    }

    // smart way te handle korar jonno amara caile function use korte pari

    const isDog = (animal:Animal):animal is Dog=>{
        return animal instanceof Dog
    }

    const isCat = (animal:Animal):animal is Cat=>{
        return animal instanceof Cat
    }

 
    const getAnimal = (animal:Animal) =>{
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(isCat(animal)){
            animal.makeMeow()
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog('German Shepherd','Dog')
    const cat = new Cat('Persian Cat','Cat')

    getAnimal(dog)
    getAnimal(cat)



















    // 
}