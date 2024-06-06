const fs = require("fs");

fs.writeFileSync("challange.txt", "I have passed my exam");
fs.appendFileSync("challange.txt", " this is new page");

const data = fs.readFileSync("challange.txt", "utf8");
console.log(data);
fs.renameSync("challange.txt","my task.txt");
fs.unlinkSync("my task.txt");// delete the file
