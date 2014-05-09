/* jshint node:true */
"use strict";

var stat = require("node-static"),
    http = require("http");

var file = new stat.Server("./static");

var server = http.createServer(function (request, response) {
    console.log("request!");
    request.on("end", function () {
        console.log("Serving file!");
        file.serve(request, response);
    }).resume();
}).listen(process.env.port || 8887);

