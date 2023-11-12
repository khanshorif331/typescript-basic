{
    // 
    // statics
    // statics are the properties and methods that are accessed without creating an instance of the class

    class Counter {
        static count:number = 0
        static increament(){
            return (Counter.count = Counter.count + 1)
        }
        static decreament(){
            return (Counter.count = Counter.count - 1)
        }
    }


    // const instance1 = new Counter()

    console.log(Counter.increament());  //1 --> different memory
    

    // const instance2 = new Counter()

    console.log(Counter.increament());  //1 --> different memory
    




















    // 
}