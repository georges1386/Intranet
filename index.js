const { createServer } = require("node:http");
const express = require("express");

var app = express();
var server = createServer(app);

app.get("/", (req, res) => {
    res.json({listen: "true"});
});

server.listen(process.env.PORT, process.env.HTTP_HOST, () => {
    console.log(`Server is listening at http://${process.env.HTTP_HOST}:${process.env.PORT}`);
});
