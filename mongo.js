const mongoose=require("mongoose")
mongoose.connect("http://www.stackfow.com/2.3/collections")
.then(()=>{console.log("mongodb connected")})
.catch(()=>{console.log("failed")})

const collection=mongoose.model("collection")

module.exports=collection