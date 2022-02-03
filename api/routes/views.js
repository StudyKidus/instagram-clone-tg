const express = require("express");

const views = express.Router();

views.get("/login", (req, res) => {
    res.render("login");
})

views.get("/signup", (req, res) => {
    res.render("signup");
})

module.exports = views;