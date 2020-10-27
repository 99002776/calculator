let elements : number[]=[];
elements.push(1)
elements.push(2)
elements.push(3)
elements.push(4)
 
for(const e of elements){
    console.log(e)
}
 
let fruits=Array<string>();
fruits=["Apple","Mango","Orange","PineApple"]
for(const fruit of fruits){
    console.log(fruit)
}
 
let fruitsAndPrices : (string | number)[]=[
    "Apples",340,"Mangoes",220
]
for (const e of fruitsAndPrices){
    console.log(e)
}

//tuples
const emp : [number,string]=[1,"Teja"]
const custBill:[string ,number]=["Ram",666]
let obj:any="Teja"
console.log(typeof(obj))

