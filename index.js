require('dotenv').config();
const express = require("express");
const app = express();
const port =3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get("/login",(req,res)=>{
    res.send("<h1>Welcome user.</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
