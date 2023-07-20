const mongoose = require('mongoose')
let itemSchema = {
        item: {type: String, required: true, unique: true},
        price: {type: String, required: true},
        quantity: {type: String, required: true}
    }
    
    let budgetModel = mongoose.model('myNewBudget',itemSchema)

module.exports = budgetModel