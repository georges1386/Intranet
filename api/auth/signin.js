const express = require("express");
const Hash = require("../../security/hash");
const Clean = require("../../security/cleaner");
const Encode = require("../../security/encode");
const { parse } = require("node:url");

var router = express.Router();

router.get("/signin", function(req, res) {
    let data = {};
    if(req.query.error) {
        data.error = req.query.error;
        res.json(error);
    }
    res.end();
});

router.post("/signin", function(req, res) {
    let email = Clean.clean(req.body.email) || undefined;
    let password = Clean.clean(req.body.password) || undefined;

    let response = {};

    if(!Clean.isClean(email)) {
        response.error = "true";
        response.type = "email";
        response.email = "L'addresse email est invalide";
        res.json(response);
    }

    if(!Clean.isInvalid(password)) {
        response.error = "true";
        response.type = "password";
        response.password = "Le mot de passe est invalide";
        res.json(response);
    }
    

    email = Encode.encodeData(email);
    password = Hash.hashPassword(password);


    // test with the value in Database
    // if correct, set the cookie
});



module.exports = router;