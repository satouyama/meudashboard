const express = require('express');

const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.send("haehasheahsehaesha")
});
app.listen(port, ()=>{
  console.log("listening on port " + port)
});