const mongoose = require('mongoose')
let URI = process.env.MONGO_URI

mongoose.connect(URI)
.then(()=>{
    console.log('Mongoose is connected');
})
.catch(()=>{
    console.log('Mongoose hanging');
})
