const express = require("express")
const app = express();
const proxy = require("express-http-proxy")

app.get("/", (req, res) => {
    res.send("Welcome to gateway")
})

app.use("/service1", proxy("http://localhost:3001"))
app.use("/service2", proxy("http://localhost:3002"))

app.listen(3000, () => console.log("Gateway running"))