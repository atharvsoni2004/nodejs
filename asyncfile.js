
 //const fs= require("fs");
 //const data=  fs.readFileSync("async.txt","utf-8");
 //console.log(data)

 const fs = require("fs");
 fs.readFile("async.txt","utf-8",(err,gold)=>  //gold is data
 {
    console.log(err)
    console.log(gold)
 }
 );
 console.log("after the data");