const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
require("dotenv").config();

// middleware funtions
app.use(cors());

// database
const { dbConnect } = require("./src/models/dbConnect");
dbConnect();

// routes

// get routers
const testRouter = require("./src/router/testRouter");
const getAllJobPost = require("./src/router/getAllJObPost");

// get routers
app.use(testRouter);
app.use(getAllJobPost);

app.listen(PORT, () => {
  console.log("server is running");
});
