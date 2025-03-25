import http from "http";
import mysql from "mysql";
import fs from "fs";
import axios from "axios";
import path from "path";

const connect = mysql.createPool({
  connectionLimit: 2,
  host: "localhost",
  user: "geetansh",
  password: "geetansh",
  database: "geetansh",
});

let app = http.createServer(async function (req, res) {
  let route = req.url;
  // res.write("All set!!!")
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
    try{
      let response = await axios.get("https://zwigato-server-m6w6.onrender.com/api/food/list");
      let info = response.data.data;
      info.forEach((elem) => {
        res.write(`${elem.name} \n`)
        res.write(`${elem.description} \n`)
        res.write(`${elem.price} \n`)
        res.write(`\n \n \n`)
      })
    } catch(err){
      console.log(err); 
    }

    res.end()
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

  res.end()
});

app.listen(9001);
