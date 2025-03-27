// import cluster from "cluster";
// import http from "http";
// import os from "os";
// import axios from "axios";

// if (cluster.isPrimary) {
//   console.log(`Master process ID: ${process.pid}`);

//   const worker = cluster.fork();

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(
//       `Worker ${worker.process.pid} died with exit code ${code} and signal ${signal}`
//     );
//   });
//   worker.kill('SIGKILL')

//   process.send("Hi master i am worker")
//   worker.send("Hi worker i am master")
//   process.on("message",(mssg) => {
//     console.log(`Message from worker : ${mssg}`);
//   })
// } else {
//   http
//     .createServer(async (req, res) => {
//       res.writeHead(200);

//       process.on("message", (mssg) => {
//         console.log("Message from master:", mssg);
//       });

//       res.end(`Hello from Worker ${process.pid}`);
//       process.exit(1)

//     })
//     .listen(8000, () => {
//       console.log(`Worker ${process.pid} is listening on port 8000`);
//     });
// }

import cluster from "cluster";
import process from "process";

if (cluster.isPrimary) {
  console.log(`Master process is running with PID: ${process.pid}`);
  process.on("message", (mssg) => {
    console.log(`worker received message from master: ${mssg}`);
  });
  
  let worker = cluster.fork();
  console.log(`Master forked worker with PID: ${worker.process.pid}`);
  worker.on("message", (msg) => {
    console.log(
      `Master received message from worker ${worker.process.pid}:`,
      msg
    );
  });

  worker.on("exit", (code, signal) => {
    if (signal) {
      console.log(
        `Worker ${worker.process.pid} was killed by signal: ${signal}`
      );
    } else if (code !== 0) {
      console.log(`Worker ${worker.process.pid} exited with code: ${code}`);
    } else {
      console.log(`Worker ${worker.process.pid} exited normally`);
    }

    console.log("\nMaster is forking a new worker...");
    worker = cluster.fork();
    console.log(`Master forked new worker with PID: ${worker.process.pid}`);

    worker.on("message", (msg) => {
      console.log(
        `Master received message from new worker ${worker.process.pid}:`,
        msg
      );
    });
  });
} else {
  console.log(`Worker process ${process.pid} is running.`);

  setTimeout(() => {
    console.log(`Worker ${process.pid} is completing its task...`);


    process.send({ cmd: "taskCompleted" });
    
    const exitType = Math.floor(Math.random() * 3);

    switch (exitType) {
      case 0:
        console.log(`Worker ${process.pid} is exiting normally.`);
        process.exit(0);
      case 1:
        console.log(`Worker ${process.pid} is exiting with an error code.`);
        process.exit(1);
      case 2:
        console.log(`Worker ${process.pid} is being killed.`);
        process.kill(process.pid, "SIGKILL");
    }
  }, 2000);
}
