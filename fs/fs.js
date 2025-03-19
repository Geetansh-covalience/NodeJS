import fs from "fs";
import http from "http";

let server = http.createServer();

// server.on('request',(req,res) => {
//     let rstream = fs.createReadStream("text.html");

//     rstream.on("data", (chunk) => {
//       res.write(chunk);
//     });

//     rstream.on('end',() => {
//         res.write("\nData Read end")
//     })

// })

fs.truncateSync("text.html",10);

server.listen(1111)