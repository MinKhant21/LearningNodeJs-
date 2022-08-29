

const http = require('http');
const fs = require('fs');
const qs = require('querystring');

http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
     
    if(url == "/" && method=="POST"){
        let data = "";
        req.on('data',d=>{
            data+=d;
        })

        req.on('end',()=>{
            console.log(qs.parse(data));
        })
    }
    if(url == "/"){
        fs.readFile('./page/index.html',(err,data)=>{
            res.write(data)
            res.end();
              
            })
    }else if(url=="/about"){
        fs.readFile('./page/about.html',(err,data)=>{
            res.write(data)
            res.end();
        })
    }else if(url=="/contact"){
        fs.readFile('./page/contact.html',(err,data)=>{
            res.write(data)
            res.end();
        })
    }
    
    
}).listen(2000,()=>{
    console.log('Locahost:9000');
})