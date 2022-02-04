const express = require("express");

const views = express.Router();

views.get("/login", (req, res) => {
    res.render("login");
})

views.get("/signup", (req, res) => {
    res.render("signup");
})

views.get("/confirm_email", (req, res) => {
    res.render("confirm_email");
})

module.exports = views;