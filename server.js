import http from "http";
import mysql from "mysql";
import fs from "fs";
const connect = mysql.createPool({
  connectionLimit: 2,
  host: "localhost",
  user: "geetansh",
  password: "geetansh",
  database: "geetansh",
});

let app = http.createServer(function (req, res) {
  connect.getConnection((err, connection) => {
    connection.query("Select * from demo_emp", (error, rows) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      rows.forEach((row) => {
        res.write(JSON.stringify(row));
        res.write("  ");
      });
    });
    
    connection.release();
  });
});

app.listen(9000);
