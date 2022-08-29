// const http = require('http');
// const fs = require('fs');

// http.createServer((req,res)=>{
//     fs.readFile('./page/index.html',(err,data)=>{
//         res.write(data)
//         res.end();
//     })
    
// }).listen(4000);

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFileSync('./page/index.html',(err,data)=>{
        res.write(data);
        res.end();
    })
    fs.readFileSync('./page/about.html',(err,data)=>{
        res.write(data);
        res.end();
    })
    fs.readFileSync('./page/contact.html',(err,data)=>{
        res.write(data);
        res.end();
    })
  
}).listen(1000,()=>{
    console.log('Locahost:4000');
})