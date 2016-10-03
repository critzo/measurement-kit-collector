// This software is free software. See AUTHORS and LICENSE for more
// information on the copying conditions.

"use strict";

const express = require("express");
const uuid = require("uuid4");

const app = express();

app.post("/report/", (_, response) => {
    response.json({
        report_id: uuid()
    });
});

app.post("/report/:reportId", (_, response) => {
    //console.log(request.params.reportId);
    response.json({});
});

app.post("/report/:reportId/close", (_, response) => {
    response.json({});
});

app.listen(process.env.PORT || 8080, () => {
    console.log("App running");
});
