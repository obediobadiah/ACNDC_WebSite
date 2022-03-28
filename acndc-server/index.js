const express = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send("Hello Obedi")
})

app.listen('3001', () =>{
    console.log("Running to port 3001");
})