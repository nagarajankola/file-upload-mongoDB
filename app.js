const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoute");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/products", productRouter);

// Default route for reference
app.get("/", (req, res) => {
  res.send("Hola!");
});

module.exports = app;
