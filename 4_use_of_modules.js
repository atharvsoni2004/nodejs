const math = require('./MyMath')
const Data = require('./Database_names')
console.log('here is + opration '+ math.add(10,5) )
console.log('here is - operation '+ math.sub(10,5))
console.log('here is * operation '+ math.mul(10,5))
console.log('here is / operation '+ math.div(10,5))
console.log('here is name of Person '+ Data.information.Name+ ' Surname is '+Data.information.Surname );