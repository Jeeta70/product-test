require("dotenv").config()
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var dev_db_url =
  "mongodb+srv://ajrana70:B8570OsPjITPJ6No@booniecluster.ylyjpvd.mongodb.net/instance";
var port = process.env.PORT || 6000;
var product = require("./routes/product");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);
app.get("/",(req, res) => {
  res.send("<h1>The server is runnnig at port 9000</h1>")
})

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Server is up and running on port numner " + port);
    });
  });

