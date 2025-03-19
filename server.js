import http from "http";
import mysql from "mysql";
import fs from "fs";
import axios from "axios";
const connect = mysql.createPool({
  connectionLimit: 2,
  host: "localhost",
  user: "geetansh",
  password: "geetansh",
  database: "geetansh",
});

let app = http.createServer(async function (req, res) {
  let route = req.url;
  // connect.getConnection((err, connection) => {
  //   connection.query("Select * from demo_emp", (error, rows) => {
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     rows.forEach((row) => {
  //       res.write(JSON.stringify(row));
  //       res.write("  ");
  //     });
  //   });

  //   connection.release();
  // });

  if (route === "/food") {
    http.request()
  } 
  
  
  
  else if (route === "/user") {
    try {
      let response = await axios.get("https://dummyjson.com/users");
      let info = response.data.users;
      info.forEach((elem) => {
        res.write(`Name: ${elem.firstName} ${elem.lastName} \n`);
        res.write(`Age: ${elem.age} \n`);
        res.write("\n \n \n");
      });
    } catch (error) {
      console.log(error);
    }

    res.end();
  }
});

app.listen(9001);
