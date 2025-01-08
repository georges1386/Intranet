const express = require("express");
const Hash = require("../../security/hash");
const Encode = require("../../security/encode");
const Cleaner = require("../../security/cleaner");


var router = express.Router();


router.get("/signup", function(req, res) {
    let data = {};
    if(req.query.error) {
        data.error = req.query.error;
        res.json(error);
    }
    res.end();
});


router.post("/signup", function(req, res) {
    
});




module.exports = router;