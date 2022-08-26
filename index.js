const fs = require('fs');
console.log('start');
// const note = fs.readFileSync('notes.txt');
// console.log(note.toString());

fs.readFile('notes.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
});

console.log('end');