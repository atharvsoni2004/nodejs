var connection = require('./connection')

let insert = function(request,response)
    {
        let sql = "INSERT INTO customers (customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit) VALUES ('Atharv', 'Soni', 'Dhrangdhriya', '1234567890', 'address1', 'address2', 'city', 'state', '123456', 'india', '123', '123456')";    
    
     connection.db.query(sql,function(error,result)
        {
            if(error==!null)
                console.log(error);
            else{
                response.json([{ 'error': 'no' }, { 'message': 'success' }]);
             }
        })   
    } 
    
    let upedate = function(request,response)
        {
            response.json('upedate data')
        }
   
  module.exports.insert = insert
  module.exports.upedate = upedate      