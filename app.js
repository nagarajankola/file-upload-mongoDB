const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoute");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// app.use(require('./routes/productRoute'));
app.use("/api/v1/products", productRouter);


app.get("/", (req, res) => {
  res.send("Hola!");
});

module.exports = app;
