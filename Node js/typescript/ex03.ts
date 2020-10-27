class employee{
    name:string
    address:string
    phone:number
    constructor(name : string, address:string,phone:number){
        this.name=name
        this.address=address
        this.phone=phone

    }
    display(){
        return `${this.name} from ${this.address}`
    }
    
}
const temp=new employee("Teja","mysore",6666666)
console.log(temp)