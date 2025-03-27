import http from "http";
import mysql from "mysql";
import fs from "fs";
import axios from "axios";
import { fileURLToPath } from "url";
import { Blob } from "buffer";
import FormData from 'form-data';



let app = http.createServer(async function (req, res) {
  let route = req.url;


  if (route === "/food") {
    try {
      let response = await axios.get(
        "https://zwigato-server-m6w6.onrender.com/api/food/list"
      );
      let info = response.data.data;
      info.forEach((elem) => {
        res.write(`${elem.name} \n`);
        res.write(`${elem.description} \n`);
        res.write(`${elem.price} \n`);
        res.write(`\n \n \n`);
      });
    } catch (err) {
      console.log(err);
    }

    res.end();
  } 

  else if (route === "/add") {
    const apiUrl = 'https://zwigato-server-m6w6.onrender.com/api/food/add';
  
    const form = new FormData();
    form.append('name', 'Paneer Roll');
    form.append('description', 'Tasty Roll');
    form.append('price', 25);
    form.append('category', 'Rolls');
  
    const fileStream = fs.createReadStream("./nodeProcess.png");
    form.append('image', fileStream, {
      filename: 'nodeProcess.png',
      contentType: 'image/png',
    });
  
    try {
      const response = await axios.post(apiUrl, form, {
        headers: {
          ...form.getHeaders(),
        },
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  
    res.end();
  }
  
});

app.listen(3000, () => {
  console.log(`Connected on 3000`);
});






// const connect = mysql.createPool({
//   connectionLimit: 2,
//   host: "localhost",
//   user: "geetansh",
//   password: "geetansh",
//   database: "geetansh",
// });
