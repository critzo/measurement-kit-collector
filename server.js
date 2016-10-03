// This software is free software. See AUTHORS and LICENSE for more
// information on the copying conditions.

"use strict";

const express = require("express");
const uuid = require("uuid4");

const app = express();

app.post("/report/", (request, response) => {
    console.log("OPEN");
    console.log(request.body);
    response.json({
        report_id: uuid()
    });
});

app.post("/report/:reportId", (request, response) => {
    console.log("UPDATE");
    console.log(request.params.reportId);
    console.log(request.body);
    response.json({});
});

app.post("/report/:reportId/close", (_, response) => {
    console.log("CLOSE");
    console.log(request.params.reportId);
    console.log(request.body);
    response.json({});
});

app.listen(process.env.PORT || 8080, () => {
    console.log("App running");
});
