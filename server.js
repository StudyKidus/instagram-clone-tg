// external packages
const express = require("express");
const dotenv = require("dotenv");
const views = require("./api/routes/views");

// config variables
const server = express();
dotenv.config();

// configure server settupers
server.set("view engine", "ejs");
server.set("views", "frontend/views");

// middlewares
server.use("/style", express.static(__dirname + "\\frontend\\style"));
server.use("/js", express.static(__dirname + "\\frontend\\js"));
server.use("/images", express.static(__dirname + "\\frontend\\images"));

// routes
server.use("/", views);

// server listening
const port = process.env.PORT;
server.listen(port, () => console.log(`Server running on port ${port}...`));


