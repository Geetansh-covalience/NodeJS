import { fork, exec, execFile, spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";
// const child = spawn("node",["./grand.js"])
// child.stderr.on("data",(data) => {
//     console.log(data);
// })

// child.stdout.on("data",(data) => {
//     console.log(data.toString());
// })

// child.on("close",(code) => {
//     console.log(code);
// })

// let dir = dirname(fileURLToPath(import.meta.url));
// const spawnn = spawn("dir /",[dir],{shell:true})
// spawnn.stderr.on("data",(data) => {
//     console.log(data.toString());
// })

// spawnn.stdout.on("data",(data) => {
//     console.log(data.toString());
// })

// spawnn.on("close",(data) => {
//     console.log(data);
// })

// Execute the Node.js script (grand.js)
exec("node ./grand.js", (error, stdout, stderr) => {
  if (error) {
    console.log("Error:", error);
    return;
  }

  if (stderr) {
    console.log("stderr:", stderr);
    return;
  }

  console.log("stdout:", stdout);
});

execFile("node", ["grand.js"], (error, stdout, stderr) => {
  if (error) {
    console.log("Error:", error);
    return;
  }

  if (stderr) {
    console.log("stderr:", stderr);
    return;
  }

  console.log("stdout:", stdout);
});
