import fs from "fs";
import http from "http";

let server = http.createServer((req,res) => {
    let stream = fs.createReadStream("fsnotes.txt")
    stream.on("data",(chunk) => {
        res.write(chunk)
    })

    stream.on("end" , () => {
        res.end()
    })
});




server.listen(1111)