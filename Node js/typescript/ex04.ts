abstract class account{
    accoutno :number;
    accholder:string;
    accbalen:number
    constructor(no:number,name:string,balence:number){
        this.accoutno=no
        this.accholder=name
        this.accbalen=balence
    }
    credit(amount:number){
        this.accbalen+=amount
     
    }
    debit(amount:number){
        if(amount>this.accbalen){}
            throw "insuuficent funds";
         this.accbalen-=amount
 
    }
    abstract calinterst();
}
class SBAccount extends account{
    calinterst(){
        let r:number=6.5/100;
        let t:number=1/4;
        let p:number=this.accbalen
        let interest:number=p*t*r;
        super.credit(interest);
    }
}
let acc:account=new SBAccount(123,"Teja",650000);
acc.credit(5000);
acc.calinterst();
console.log(acc.accbalen)