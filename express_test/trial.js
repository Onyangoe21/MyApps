const express = require("express");
const app = express();


app.get('/me', (req, res) => {
    res.send("Hello! Edwin here!");
})

app.listen(3000);