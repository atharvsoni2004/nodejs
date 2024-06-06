var express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.post("/register", function(req,res)
{
    let name=req.body.name;
    let mobile=req.body.mobile;
    let gender=req.body.gender;

    console.log("My name is " +name+ " number is " +mobile+ " gender is " +gender);
    res.send("Registered successfully");
})
app.listen(5000);
console.log("server ready..");
