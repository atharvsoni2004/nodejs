const os = require("os");
console.log(os.arch());
const freememory= os.freemem();
console.log(`${freememory/1024/1024/1024}`);