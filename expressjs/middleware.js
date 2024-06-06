var express=require('express');
var app=express()
//middlewere
app.use(function(request,response,next)
{
    console.log("this is first middlewere")
    next();
})
app.use(function(request,response,next)
{
    console.log("this is second middleware")
    console.log("this is url" +request.url+ "this is methode" +request.method)
    next()
})
app.get("/contactus",function(request,response)
    {
        response.send("This is contactus page")
    }
)
app.get("/about",function(request,response)
{
    response.send("this is about us page")
})
app.listen(5000)
console.log("server ready...")