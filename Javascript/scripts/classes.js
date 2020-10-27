/*var emp={}
emp.empid=123
emp.empname="teja"
emp.empaddress="Mysore"
emp.empsalary=30000
console.log(emp)
console.log(emp.empid)
console.log(emp.empname)
console.log(emp.empsalary)

var emp2= emp
emp.empname="charan teja"
console.log(emp.empname)*/
/* ******************************************************************************************************** */

//creating multiple objects
//use function keyword to instance of class
let employee=function(id,name,address){
    this.empId=id
    this.empName=name
    this.empAddress=address

    this.display=function(){
        console.log("name:" + this.empName)
        console.log("address:" + this.empAddress)
        console.log("id:" + this.empId)
    }
}
let emp1=new employee(123,"Teja","Mysore")
let emp2=new employee(456,"Charan","Mysore")
let emp3=new employee(789,"Ram","Mysore")

emp1.display()
emp2.display()
emp3.display()

