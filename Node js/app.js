var flipcart=require("./market")()
flipcart.addRecord({"id":111,"name":"Nokia","price":4500})
const data=flipcart.getAll();
for(const iterator of data){
    console.log(iterator)
}