const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    if(req.cookies["token"]) {
        res.clearCookie("token");
    }
    res.json({ logout: true });
});


module.exports = router;
