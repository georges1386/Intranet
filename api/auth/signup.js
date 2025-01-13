const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    res.end();
});


router.post("/", (req, res) => {
    let firstName = req.body["first-name"];
    let lastName = req.body["last-name"];
    let birthDate = req.body["birth-date"];
    let livingPlace = req.body["living-place"];
    let password = req.body["password"];

    if(
        !lastName ||
        !birthDate ||
        !livingPlace ||
        !password
    ) {
        res.json({ error: true });
    }
    res.json({ creation: true });

    console.log(firstName);
    console.log(lastName);
    console.log(birthDate);
    console.log(livingPlace);
    console.log(password);
});

module.exports = router;
