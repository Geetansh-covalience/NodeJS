import fs from "fs";

function readingFileData(){
    try{
        let data = fs.readFileSync("file1.txt","utf-8");
        console.log(data);
    } catch(error){
        console.log("File not Found!!!");
    }
}

readingFileData()