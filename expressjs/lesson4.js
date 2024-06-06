var express=require('express');
var app=express();

app.get("/triangle/:base/:height",function(request,response)
{
    let base=request.params.base;
    let height=request.params.height;
    let triangle=base*height/2
    response.send(`<h1>your ans is ${triangle}</h1>`)
})

//print your info in browser
app.get("/info/:name/:email", function (request, response) {
    let name = request.params.name;
    let email = request.params.email;
    // Concatenate the information into a single string
    let infoString = `<h1>your name is ${name}</h1><h1>your email is ${email}</h1>`;
    // Send the concatenated string
    response.send(infoString);
});

//print number table


app.get('/table/:table', function (request, response) {
    let table = request.params.table;
    console.log(table);
    let output = '';
    let count = 1;
    for (count = 1; count <= 10; count++) {
        output = table * count;
        console.log(` ${table} x ${count} = ${output}`);
    }
});

app.listen(5000);
console.log("server is ready..");

