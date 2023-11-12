{
    // 
    // abstraction  --> 1. interface 2. abstract class


    // idea
    interface Vehicle1 {
        startEngine():void;
        stopEngine():void;
        move():void;
    }

    


    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('start engine');
        }
        stopEngine(): void {
            console.log('stop engine');
        }
        move(): void {
            console.log('move');
        }
        test(){
            console.log('I am just testing');
            
        }
    }


    const toyotaCar = new Car1() 
    toyotaCar.startEngine()




    // abstract class
    // idea
    abstract class Car2 {
        abstract startEngine(): void 
        abstract stopEngine(): void 
        abstract move(): void
        test(){
            console.log('I am just testing');
            
        }
    }

    // real implementation
    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('I am starting engine');
        }
        stopEngine(): void {
            console.log('I am stopping engine');
        }
        move(): void {
            console.log('I am moving');
        }
    }


    //   












    // 
}