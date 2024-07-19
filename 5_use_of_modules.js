var pwd = require('./MyHasher')
var db = require('./database_common')

console.log(db.name);
console.log(db.job);
console.log(db.port);

console.log(pwd.PasswordHash('mango'));
// console.log(pwd.MatchPassword('mango'));