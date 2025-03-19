import fs from "fs";
// function readingFileData(){
//     try{
//         let data = fs.readFileSync("file1.txt","utf-8");
//         console.log(data);
//     } catch(error){
//         console.log("File not Found!!!");
//     }
// }

// readingFileData()

// function readingFile(){
//    fs.readFile("file1.txt","utf-8",(err,data) => {
//     if(err){
//         console.log("File not found!!!!!");
//     }

//     else{
//         console.log(data);

//     }
//    })
// }

// readingFile()

// function readingFile(){
//     return new Promise((reject,resolve) => {
//         fs.readFile("file.txt","utf-8",(err,data) => {
//             if(err){
//                 reject(err);
//                 return;
//             }

//             else{
//                 resolve(data);
//             }
//         });
//     })
// }

// readingFile().then(data => console.log(data)).catch(error => console.log(error))

async function readingFile() {
  try {
    const info = await fs.readFileSync("fil1e.txt", "utf-8");
    console.log(info);
  } catch (err) {
    console.log(err);
  }
}

// readingFile()

