import http from "http";

http
  .createServer(async function (req, res) {
    if (req.url === "/") {
      res.write(`<h1>Welcome!!!</h1>`);
    } else if (req.url === "/list") {
      try {
        let response = await fetch(
          "https://zwigato-server-m6w6.onrender.com/api/food/list",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          let info = await response.json();

          info.data.forEach((element) => {
            res.write(`<b>Food name</b> ${element.name} <br>`);
            res.write(`<b>Food description</b> ${element.description} <br>`);
            res.write(`<b>Food Price</b> ${element.price} <br>`);
            res.write(`<br> <br> <br>`);
          });

          res.end();
        }
      } catch (err) {
        console.log(err);
      }
    } else if (req.url === "/add") {
      let data = {
        name: "Red Sauce Pasta",
        description: "Tasty pasta",
        price: 25,
        category: "Pasta",
      };

      try {
        let response = await fetch(
          "https://zwigato-server-m6w6.onrender.com/api/food/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(data),
          }
        );

        console.log(JSON.stringify(data));
        

        if (response.ok) {
          res.write("Food Added");
          console.log(response);
          res.end();
        }
      } catch (error) {
        console.log(error);
        res.write("Food Not Added");
        res.end();
      }
    }
    
  })
  .listen(3001);
