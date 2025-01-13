const { createServer } = require("node:http");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

var app = express();
var server = createServer(app);

// middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// requests logger
app.use((req, res, next) => {
    console.log(`${req.ip} - - [${new Date().toLocaleString()}] "${req.method} ${req.path}"`);
    next();
});

// configuring routes
const signin = require("./api/auth/signin");
const signup = require("./api/auth/signup");
const signout = require("./api/auth/signout");

app.use("/api/auth/signin", signin);
app.use("/api/auth/signup", signup);
app.use("/api/auth/signout", signout);


server.listen(process.env.HTTP_PORT, process.env.HTTP_HOST, () => {
    console.log(`Server is listening at http://${process.env.HTTP_HOST}:${process.env.HTTP_PORT}`);
});
