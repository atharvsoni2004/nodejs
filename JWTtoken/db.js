// const Pool = require ('pg')

 const pool = ({
  // your DB configuration
  database:'register',
  user :'root',
  password:'',
  port:'3308',
  host:'localhost'
});

module.exports = pool