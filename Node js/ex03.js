//synchronus
const fs=require('fs')
/*
const fs=require('fs')
const data=fs.readFileSync("market.js","utf-8")
console.log(data)
//asynchronus
fs.readFile("ex03.js",'utf-8',(err,data)=>{
    if(err!=null) console.log(err.message)
    else{
        console.log(data)
    }
})
console.log("file reading is going on")*/

const filename="temp.txt"
const emp=`123,Teja,Mysore,560000`
fs.writeFileSync(filename,emp,'utf-8')
const emp2=`124,teja,banglore,65000`
fs.appendFileSync(filename,emp2,'utf-8')

