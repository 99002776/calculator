/*const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout

})
readline.question("whats ur name?",answer=>{
    console.log(answer)
    readline.close()
})*/


const { clear } = require('console')
const os=require('os')
console.log(os.hostname())
console.log(os.version())
console.log(os.type())
console.log("the machine is rumnning since"+os.uptime()/3600+"hrs")

console.table([
    {name: "Ram",address:"Mysore",state:"Karnataka"},
    {name: "Charan",address:"Banglore",state:"Karnataka"},
    {name: "Teja",address:"kavluru",state:"AP"}
])
