const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to service 1")
})

app.listen(3001, () => console.log("Service 1 running"))