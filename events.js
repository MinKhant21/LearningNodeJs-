const events = require('events');
const e =new events.EventEmitter();
e.on('like',()=>{
    console.log('like this');
})
e.on('dislike',()=>{
    console.log('dislike that')
})

e.emit('like');
e.emit('dislike')