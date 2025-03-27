import fs from "fs";
import http from "http";

// let stream = fs.createReadStream("fsnotes.txt");
// stream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// stream.on("end", () => {
//   res.end();
// });
//});

//fs.stat("fsnotes.txt",(err,stats) => {
// if (err) console.log(err);
// else console.log(stats);
//})

//fs.watch("fsnotes.txt",(err,stats) => {
// if (err) console.log(err);
// else console.log(stats);
//})

// fs.truncateSync("text.html",3);

// fs.open(`${import.meta.filename}`, "r", (err, fd) => {
//   console.log(import.meta.filename);
//   let size = 0;
//   fs.stat(`${import.meta.filename}`, (err, stat) => {
//     size = stat.size;
//     const buffer = Buffer.alloc(size*size);
//     fs.read(fd, buffer,4, size,19, (err) => {
//       if (err) console.log(err);
//       console.log(buffer);
//       console.log(buffer.toString());

//       fs.close(fd, (err) => {
//         if (err) console.log(err);
//         else console.log("Files Closed");
//       });
//     });
//   });
// });

// fs.open(`text.html`, "w", (err, fd) => {
//   if (err) console.error(err);
//   else {
//     let content = "Hello I am Geetansh Jain and i am intern";
//     let buffer = Buffer.from(content, "utf-8");
//     fs.write(fd, buffer, 0, content.length, 0, (err, written) => {
//       if (err) console.error(err);
//       else {
//         console.log(written, "size of bytes");

//         fs.close(fd, (err) => {
//           if (err) console.error(err);
//           else console.log(fd, "fd");
//         });
//       }
//     });
//   }
// });

// fs.open("text.html", "a+", (err, fd) => {
//   fs.stat("text.html", (err, stat) => {
//     let size = stat.size;
//     let content = "This text is appended\n";
//     let buffer = Buffer.from(content, "utf-8");

//     fs.write(fd, buffer, 0, buffer.length, size, (err, written) => {
//       if (err) console.error(err);
//       else {
//         let newBuffer = Buffer.alloc(size + buffer.length);
//         fs.read(fd, newBuffer, 0, newBuffer.length, 0, (err) => {
//           if (err) console.log(err);
//           else {
//             console.log(newBuffer.toString());
//             fs.close(fd, (err) => {
//               console.log("Files Closed");
//             });
//           }
//         });
//       }
//     });
//   });
// });

// fs.copyFileSync("text.html", "hello.txt");

// fs.unlinkSync("text.htmle")
