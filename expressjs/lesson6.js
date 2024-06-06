var express = require('express');
var app = express();
var bodyParese = require('body-parser'  );
app.use(express.json());
app.post("/login", function (request, response) {
     console.log(request.body)
     let email = request.body.email;
     let password = request.body.password;
     if (email === "demo@gmail.com" && password === "123123") {
          response.send("Login Successfully ");
     }
     else {
          response.send("Login Invalid ");
     }
});
app.listen(5000);
console.log("Server ready ");