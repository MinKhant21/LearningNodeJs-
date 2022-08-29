

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const url = req.url;
    if(url == "/"){
        fs.readFile('./page/index.html',(err,data)=>{
            res.end(data);   
            })
    }else if(url=="/about"){
        fs.readFile('./page/about.html',(err,data)=>{
            res.end(data)
        })
    }else if(url=="/contact"){
        fs.readFile('./page/contact.html',(err,data)=>{
            res.end(data)
        })
    }
    
    
}).listen(2000,()=>{
    console.log('Locahost:9000');
})