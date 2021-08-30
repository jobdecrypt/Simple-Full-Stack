// below is our declared variables
const express = require("express");
const app = express();
const port = 3000;
const redis = require("redis");
const client = redis.createClient();

// init values
client.mset("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);
client.mget(
  ["header", "left", "article", "right", "footer"],
  function (err, value) {
    console.log(value);
  }
);

function data() {
  return new Promise((resolve, reject) => {
    client.mget(
      ["header", "left", "article", "right", "footer"],
      function (err, value) {
        const data = {
          header: Number(value[0]),
          left: Number(value[1]),
          article: Number(value[2]),
          right: Number(value[3]),
          footer: Number(value[4]),
        };
        err ? reject(null) : resolve(data);
      }
    );
  });
}

// to test the server with a route of root "/" and outputs "Hello World"
/* app.get("/", function (req, res) {
  res.send("Hello World");
}); */

// to serve static files from the public folder/directory
app.use(express.static("public"));

// get data
app.get("/data", function (req, res) {
  data().then((data) => {
    console.log(data);
    res.send(data);
  });
});

// update data
app.get("/update/:key/:value", function (req, res) {
  const key = req.params.key;
  let value = Number(req.params.value);
  client.get(key, function (err, reply) {
    // new value
    value = Number(reply) + value;
    client.set(key, value);

    // return data to client
    data().then((data) => {
      console.log(data);
      res.send(data);
    });
  });
});

// to add a listener to our app on port 3000
app.listen(port, () => {
  console.log(`Running on port: ${port} \n http://localhost:${port}`);
});

// go to your favorite terminal and run: node index.js
// check if http://localhost:3000 have the output Hello World
