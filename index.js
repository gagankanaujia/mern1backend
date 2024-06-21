const express=require('express')
const server=express()
const mongoose = require('mongoose');
const cors=require('cors')
const prodController=require('./controller')
const bodyParser = require('body-parser');
const dotenv=require('dotenv')
//const  formidable = require('express-formidable');
dotenv.config()
url=process.env.DATABASE
port=process.env.PORT

server.use(cors())
server.use(express.json())


server.use(bodyParser.json());
server.use(express.json());





main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(url);
     console.log('database connected......')
  }

server.get("/",function(req,res){ 
    res.send("index Page")
})


server.post("/Login",prodController.getUser)
server.post("/addUser",prodController.addUser)

  
server.post("/add",prodController.createProduct)
server.get("/list",prodController.getAllProducts)
server.get("/getProduct/:id",prodController.getProduct)
server.delete("/deleteProduct/:id",prodController.deleteProduct)
server.put("/updateProduct/:id",prodController.updateProduct)
server.post("/login",prodController.Login)
console.log("hello")
server.listen(port)