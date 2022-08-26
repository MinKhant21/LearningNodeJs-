const fs = require('fs');
console.log('start');
const note = fs.readFileSync('notes.txt');
console.log(note.toString());
console.log('end');