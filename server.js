// This software is free software. See AUTHORS and LICENSE for more
// information on the copying conditions.

"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const uuid = require("uuid4");
const fs = require("fs");
const app = express();
app.use(bodyParser.json({limit: "50mb"}));

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

app.post("/report/", (request, response) => {
    console.log("OPEN");
    //console.log(request.body);
    response.json({
        report_id: uuid()
    });
});

app.post("/report/:reportId", (request, response) => {
    console.log("UPDATE");
    console.log(request.params.reportId);
    //console.log(request.body);
    filePath = __dirname + '/report/:reportId';
    fs.appendFile(filePath, request.body, function () {
        respond.end();
    });
    response.json({});
});

app.post("/report/:reportId/close", (request, response) => {
    console.log("CLOSE");
    console.log(request.params.reportId);
    //console.log(request.body);
    response.json({});
});

app.listen(process.env.PORT || 8080, () => {
    console.log("App running");
});
