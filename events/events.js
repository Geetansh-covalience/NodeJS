// import EventsEmitter from "events";
// // import fs, { read } from "fs";
// // // let event = new eventEmitter()

// // // event.on('name',(name) => {
// // //     console.log(name);
// // // });

// // // event.emit('name',"Geetansh")
// // // event.emit('name',"Geetansh Jain")

// // // event.on('count', (count) => {
// // //     console.log(`Count: ${count}`);
// // // })

// // // for(let i = 0;i < 5; i++){
// // //     event.emit('count',i)
// // // // }
// // // function readFile() {
// // //   fs.readFile("file.html", "utf-8", (err, data) => {
// // //     if (err) console.log(err);
// // //     else console.log(data);
// // //   });
// // // }

// // // function writeFile() {
// // //   fs.writeFile("file.html", "utf-8", (err, data) => {
// // //     if (err) console.log(err);
// // //     else console.log(data);
// // //   });
// // // }

// // // class Events extends EventsEmitter {
// // //   reading() {
// // //     this.emit("read", readFile);
// // //   }
// // // }

// // // let event = new Events();
// // // event.on("read", readFile);
// // // event.reading();

// // function returnEmit() {
// //   let eve = new EventsEmitter();
// //   eve.emit("read", "");

// //   eve.emit("write", "");

// //   eve.emit("error", (error) => {
// //     console.log(error);
// //   });

// //   return eve;
// // }

// // let task = returnEmit();
// // task.on("read", () => {
// //   console.log("Reading File....");
// // });

// // task.on("write", () => {
// //   console.log("Updating File....");
// // });

// // task.on("error", new Error("Something went wrong..."));

// import EventEmiiter from "events";
// class Events extends EventEmiiter{
//   reading(){
//     this.emit(console.log("Reading data..."));
//   }

//   readEnd(){
//     setTimeout(() => {
//       this.emit(console.log("Reading finished!!!"))
//     }, 1500);
//   }
// };

// let returnEvent = new Event();
// returnEvent.returnEmit()
// // let event = new eventEmiiter();
// // event.setMaxListeners(5)

// // event.on("read",() => {
// // })

// // event.on("read",(a) => {
// // })

// // event.on("read",(a,b) => {
// // })

// // event.once("read",(a,b,c) => {
// // })

// // event.emit("read")
// // event.emit("read",1)
// // event.emit("read",1,2)
// // event.emit("read",1,2,3)
// // console.log(event.listenerCount("read"));

// import { EventEmitter } from "events";
// class Parent extends EventEmitter {
//   parent() {
//     setTimeout(() => {
//       this.emit("parent", "Parent Emitter...");
//     }, 500);
//   }
// }

// class Child extends Parent {
//   child() {
//     let parentEvent = new Parent();
//     setTimeout(() => {
//       this.emit("child", "Child Emitter...");
//     }, 1500);

//     return parentEvent;
//   }
// }

// let child = new Child();
// let parent = new Parent();

// child.on("child",(mssg) => {
//   console.log(mssg);
// }).child();

// child.on("parent",(mssg) => {
//   console.log(mssg);
// }).parent();

// parent.on("parent",(mssg) => {
//   console.log(mssg);

// }).parent();

