const http=require('http')
const requests =[]
const server =http.createServer((req,res)=>{
    if(req.url !='favicon.ico'){
        requests.push(req.url)
        for(const url of requests){
            res.write(url)
        }
        res.end
    }
    
})
server.listen(12345)