const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/stackflow-questions")
.then(()=>{console.log("mongodb connected")})
.catch(()=>{console.log("failed")})

const collection=mongoose.model("collection")

module.exports=collection