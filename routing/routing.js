import http from "http";
import fs from "fs";

let app = http.createServer(function(req, res)  {
  let url = req.url;

  if (url === "/") {
    res.write("Welcome to this page");
    res.end()
  }

  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    let data = fs.readFileSync("html.html", "utf-8");
    res.write(`${data} AboutUs`);
    res.end();
  }

  else if(url === "/user"){
    fs.readFile("data.json","utf-8",(err,data) => {
        let info = JSON.parse(data)
        res.writeHead(200,{"x-content-type":"text/html"})
        info.forEach(element => {
            res.write(` <b>Name: </b>${element.name}  <b>Username: </b>${element.username}`);
            res.write('\n')
        });

        res.end()
    })
  }

  else{
    res.writeHead(404);
    res.write("<h1>Page Not Found</h1>")
    res.end()
  }
});

app.listen(1234, () => {
  console.log("server started");
});
