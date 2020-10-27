var fruit=""
function addfruit(fname){
    var fruit=fname;
    console.log(fruit);
    
}
addfruit("mango");
console.log("the old fruit: "+fruit);

const array=[123,234,345,456,567];
//for(const ele of array) or we can use below code

for ( i of array){
    console.log(i)
}

function addFunc(v1,v2){
    var res=v1+v2
    console.log("the added val: "+res)
}
addFunc(2,6)

function getEmployee(name){
    return `${name}`
}

const getName=function(name){
    return `${name}`;
}
console.log(getName("SomeName"))
//lambda expression or arrow functions
const getname=(name)=> `${name}`
const addfunc=(v1,v2)=>v1+v2
console.log(addfunc(22,22))

const strValue=`This content is designed to hold string values that come in multiple lines.
thanks to the new way of creating string literals`
console.log(strValue)

function emp(name,address){
    this.name=name
    this.address=address
}
//old syntax of es5 classis js
/*let temp=new emp("Teja","mysore")
name=temp.name
address=temp.address
console.log(`${name} comes from ${address}`)*/

//new syntax
let {name,address}=new emp("Teja","mysore")
console.log(`${name} comes from ${address}`)