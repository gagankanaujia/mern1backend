
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    
    title:{
        type: String,
         },
    brand: String,
    price: Number,
    discount: Number,
   })

  
const userSchema = new Schema({
    user: 
    
     {  type:String,
        unique :true
    },

    password :String,
    
   })


const eProduct = mongoose.model('eproduct', productSchema);
const User = mongoose.model('user', userSchema);

module.exports = { 
    eProduct,User 
}

//collection name must be => "eproducts"  in mangoDb