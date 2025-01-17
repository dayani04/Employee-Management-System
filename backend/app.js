const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/employeeRoutes");

const app = express();
const cors = require("cors")

app.use(express.json()); 
app.use(cors());
app.use("/employees", router);

mongoose
  .connect(
    "mongodb+srv://admin:pSLXbTj04PJzY1aA@cluster0.6um4a.mongodb.net/Employee-Mangement-System?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
