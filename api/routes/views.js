const express = require("express");

const views = express.Router();

views.get("/", (req, res) => {
    res.render("login");
})

module.exports = views;