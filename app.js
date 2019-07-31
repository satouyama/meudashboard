const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.send("hello world")
});
app.listen(()=>{
  console.log("listening on port " + port)
});