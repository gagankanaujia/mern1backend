const model=require('./product')
const Product=model.eProduct ;
const User=model.User ;






exports.addUser = async (req, res) => {
  console.log(req.body)
  const user= new User(req.body)     
  await user.save() 
  res.json("user addded successfully");

 };





// get single product

exports.getUser = async (req, res) => {
  console.log("login ......")
   console.log(req.body)
 
   try {
   let user=await User.findOne(req.body).select("-password")
      if (user)
      res.send(user) 
      else
      res.status(500).send({ success: false})
          
    }     
    catch (error) {
    console.log(error);
    
  };
}


 


exports.getProduct = async (req, res) => {
  console.log('hello single...  products')
  console.log(req.params.id)
  try {
     const product = await Product.findOne({ _id: req.params.id })
      res.status(200).send({
      success: true,
      message: "Single Product Fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single product",
      error,
    });
  }
};

exports.getAllProducts=async (req,res)=>{
   console.log('hello alll products')
   const products=await Product.find() 
   res.json(products);
}

exports.createProduct = async (req, res) => {
   console.log(req.body)
   const product= new Product(req.body)     
   await product.save() 
   res.json("data addded successfully");

  };


  
exports.deleteProduct = async (req, res) => {
   console.log("in the delete .........")

    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).send({
        success: true,
        message: "Product Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting product",
        error,
      });
    }

  };


  exports.updateProduct=async (req,res)=>{

    console.log("inside update")
      const { id } = req.params;
      console.log(id) 
      Product.findByIdAndUpdate(id, req.body, { new: true })
        .then(item => {
        console.log(item);
        res.status(203).json({ message: 'Item Fetched Successfully', data:item });
      })
        .catch(err => {
          console.log(err);
          res.status(500).json({ message: 'Server error' });
        });
  
  }


  exports.Login = async (req, res) => {
   
   console.log(req.body)
   let user =await User.findOne(req.body).select("-password")
   console.log(user)
   res.send(user);

  };