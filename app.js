const express=require("express")
const collection=require("./mongo")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.listen(3000,()=>{
    console.log("port is listening on 3000")
})