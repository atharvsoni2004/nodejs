var fs = require("fs");
fs.writeFileSync("read.txt", "welcome to my terminal");
fs.writeFileSync("second.txt", "this is the second code");
fs.writeFileSync("read.txt","hii,welcome to my terminal");//add data to file
fs.appendFileSync("read.txt"," Data is written successfully");//add data to file without previous data writting
const buf_data=fs.readFileSync("read.txt");//used for read file 
const org_data=buf_data.toString() //convert data from buffer ("binary") to string
console.log(org_data);
fs.renameSync("read.txt","new.txt");//give new name to file