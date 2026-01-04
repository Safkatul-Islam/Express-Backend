const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("This is the Home page.");
})

app.get('/about', (req, res) => {
    res.send("About the Server!🚀")
})

app.listen(3000, () => {
  console.log("Server is live!");
});
