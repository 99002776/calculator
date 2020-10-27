class Account{
    constructor(no,name,amount){
        this.acNo=no
        this.name=name
        this.balance=amount

    }
    credit(amount){
        this.balance+=amount
    }
    debit(amount){
        if(this.balance<amount)
            throw "Insufficient funds"
        this.balance-=amount
    }
    
}
class SBAccount extends Account{
    calcIntrest(){
        let principle=this.balance
        const RateOfIntrest=6.5/100
        const year=1/4
        const intrest =(principle*RateOfIntrest*year)
        this.credit(intrest)
    }
}
try{
    const acc=new SBAccount(123,"Teja",50000)
    acc.credit(5000)
    acc.debit(5000)
    acc.calcIntrest()
    console.log("The balance: "+acc.balance);

}catch(err){
    console.log(err)
}
/*try{
    const acc=new Account(123,"Teja",60000)
    acc.credit(10000)
    acc.debit(10000)
    console.log("The balance: "+acc.balance);
}catch(err){
    console.log(err);
}*/