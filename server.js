const express = require("express");
const dotenv = require("dotenv");

const server = express();
dotenv.config();

server.set("view engine", "ejs");
server.set("views", "frontend/views");

server.use("/style", express.static(__dirname + "\\frontend\\style"));

server.get("/", (req, res) => {
    res.send("<h1>Setup finished</h1>");
})

const port = process.env.PORT;
server.listen(port, () => console.log(`Server running on port ${port}...`));


