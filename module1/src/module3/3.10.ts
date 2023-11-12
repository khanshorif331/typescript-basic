{
    // 
    // encapsulation

    // access modifier
    // when we use a private access modifier ,it's a convention to use _ before the variable name
    class BankAccount{
        readonly id:number;
        public name:string;
        // private _balance:number;
        protected _balance:number;

        constructor(id:number,name:string,balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        public addDeposit(amount:number){
            this._balance = this._balance + amount;
        }

        public getBalance(){
            return this._balance
        }
    }


    class StudentAccount extends BankAccount {
        test(){
            this._balance = 100
        }
    }



    const gorimanusherAccount = new BankAccount(111,'Goriman Usher',20);
    gorimanusherAccount.addDeposit(30)
    const myBalance = gorimanusherAccount.getBalance()
    console.log(myBalance);
















    // 
}