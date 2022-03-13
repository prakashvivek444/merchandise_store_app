const express = require("express");
const res = require("express/lib/response");
const app = express();
//const port = 3000

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/
const port = 8000;

app.get("/", (req,res) => {
    return res.send("Welcome");
});

app.get("/signup", (req,res) => {
    return res.send("Welcome to signup");
});

app.listen(port, () => {
    console.log("Server is up and running");
});
