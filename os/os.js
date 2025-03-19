// import os from "os"

// console.log(`${Math.ceil(os.freemem() / 1024/1024/1024)} gb`);
// console.log(`${Math.ceil(os.totalmem() / 1024/1024/1024)} gb`);
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.version());

let obj = {
  sname: "geetansh",
  age: 22,
  doj: new Date(Date.UTC(2025,0,1)),
  gender: "male",
};

function userInfo({ sname, age, doj, gender }) {
  console.log(`I am ${sname} and i am ${age} years old. I joined covalience on ${doj} `);
}

userInfo(obj)