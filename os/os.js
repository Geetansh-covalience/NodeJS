import os from "os"

console.log(`${Math.ceil(os.freemem() / 1024/1024/1024)} gb`);
console.log(`${Math.ceil(os.totalmem() / 1024/1024/1024)} gb`);
console.log(os.arch());
// console.log(os.cpus());
console.log(os.version());
// console.log(os.);
