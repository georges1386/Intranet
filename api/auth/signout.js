const express = require("express");
const cookieParser = require("cookie-parser");

var router = express.Router();


router.get("/signout", function(req, res) {
    if(req.cookie.token) {
        res.cookie("token", "", { maxAge: -1 });
    }
});



module.exports = router;