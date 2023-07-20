const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const cors = require('cors')
app.use(cors())


let PORT = process.env.MY_PORT

require('./connection/mongoose.connection')

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('items')
})


let budgetModel = require('./models/item.model')



app.post('/details',(req,res)=>{
    let info = req.body;
    form = budgetModel(info)
    form.save()
    .then((result)=>{
        console.log(result);
        res.redirect('cart')
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/cart',(req,res)=>{
   budgetModel.find() 
   .then((result)=>{
    res.render('cart',{itemDetails:result})
   })
   .catch((err)=>{
    console.log(err);
   })
})

app.post('/delete',(req,res)=>{
    budgetModel.deleteOne({item:req.body.newItem})
    .then((result)=>{
        console.log(result);
        res.redirect('cart')
    })
})

app.post('/edit',(req,res)=>{
    budgetModel.findOne({item:req.body.newItem})
    .then((result)=>{
        console.log(result);
        res.render('editusers',{newInfo:result})
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.post('/update',(req,res)=>{
    budgetModel.updateOne({item:req.body.item},req.body)
    .then((result)=>{
        console.log(result);
        res.redirect('cart')
    })
    .catch((err)=>{
        console.log(err);
    })
})


app.listen(PORT,()=>(
    console.log(`connected on the port ${PORT}`)
))