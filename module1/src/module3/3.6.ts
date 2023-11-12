{
    // 
    // getter and setter

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


        // setter

        set deposit(amount:number){
            this._balance = this._balance + amount;
        }

        // public addDeposit(amount:number){
        //     this._balance = this._balance + amount;
        // }


        // getter
        get balance(){
            return this._balance
        }

        // public getBalance(){
        //     return this._balance
        // }
    }


    



    const goribmanusherAccount = new BankAccount(111,'Goriman Usher',20);
    // gorimanusherAccount.addDeposit(30)              //function call 
    goribmanusherAccount.deposit=50
    // const myBalance = gorimanusherAccount.getBalance()   //function call




    const myBalance = goribmanusherAccount.balance  //property er moto kore use

    console.log(myBalance);





















    // 
}