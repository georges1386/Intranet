const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    if(req.cookies["token"]) {
        res.json({ login: true });
    }
    res.json({ login: false });
});

router.post("/", (req, res) => {;
    let username = req.body["username"];
    let password = req.body["password"];

    console.log(username);
    console.log(password);

    if(username == "root" && password == "root") {
        res.json({ login: true });
    } else {
        res.json({ login: false });
    }
});

module.exports = router;
