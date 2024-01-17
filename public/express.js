const express = require('express');
const app = express();
const port = 3000;
//const funct = require(__dirname + '/main.js');
app.use(express.static('public')); // Assuming your static files (like HTML, CSS, and JS) are in a 'public' folder

app.get('/', (req, res) => {
    //res.send("hello world")
  res.sendFile(__dirname + '/index.html');
  //funct();
});

app.get('/newpage', (req, res) => {
  res.sendFile(__dirname + '/newpage.html');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
