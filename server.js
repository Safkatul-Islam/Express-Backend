const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors({
  origin: ['http://localhost:5500']
}))

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express.js");
});

app.get("/about", (req, res) => {
  res.send("This is the about page!🚀");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "keyboard", stock: "50" },
    { id: 2, name: "mouse", stock: 100 },
  ]);
});

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const products = [
    { id: 1, name: "keyboard", stock: "50" },
    { id: 2, name: "mouse", stock: 100 },
  ]

  const requestedProduct = products.find((product) => product.id === id);
  
  res.json(requestedProduct);
})

app.get('/message', (req, res) => {
  res.json({ message: "Hello from the express backend😏" })
})

app.post('/message', (req, res) => {
  const { name, message } = req.body;

  console.log('New Response: ', name, message);
  res.json({ message: "Thank you for your message" });
})

app.listen(3000, () => {
  console.log("The Server is live!");
});
