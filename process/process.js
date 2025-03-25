import process from "process";

process.on("exit", () => {
  console.log("process end");
});

process.on("beforeExit", () => {
  console.log("process is about to end");
});

process.on("uncaughtException", (err) => {
  console.log(err);
});

process.on("warning", (warn) => {
  console.warn(warn);
});

process.nextTick(() => {
  console.log("This will run on next loop");
});

// process.nextTick(() => {
//   console.log("This will run on next loop 2");
// });

console.log(process.uptime());
// console.log(process.abort());
console.log(process.cpuUsage());

// console.log(process.kill(process.pid));
