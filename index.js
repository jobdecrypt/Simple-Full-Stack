// below is our declared variables
const express = require("express");
const app = express();
const port = 3000;

// to test the server with a route of root "/" and outputs "Hello World"
/* app.get("/", function (req, res) {
  res.send("Hello World");
}); */

// to serve static files from the public folder/directory
app.use(express.static("public"));

// to add a listener to our app on port 3000
app.listen(port, () => {
  console.log(`Running on port: ${port} \n http://localhost:${port}`);
});

// go to your favorite terminal and run: node index.js
// check if http://localhost:3000 have the output Hello World
