class Bank{
    constructor(balance){
        this.balance = balance
    }

    withdraw(){
        this.balance -= prompt("Withdraw amount")
        if(this.balance >= 0){
            console.log(this.balance)
        }
        else {
            console.log("Insufficient amount")
        }
        
    }
       deposit(){
           
        let add = prompt("Deposit amount")
           this.balance = this.balance + Number(add) 
        console.log(this.balance)
    }
    
}


const gg = new Bank(2000)