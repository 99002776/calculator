class employee{
    constructor(id,name,address){
        this.id=id
        this.name=name
        this.address=address
    }

display() {
    const data=`the name: ${this.name}
    the address: ${this.address}
    the Id: ${this.id}`
    console.log(data)
}
}
const obj=new employee(12,"teja","mysore")

obj.display()