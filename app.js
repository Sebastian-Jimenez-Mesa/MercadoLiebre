/* - */

const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
   });

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
   });
   
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
   });

app.listen(port, () => console.log(`Listening on ${port}`))
