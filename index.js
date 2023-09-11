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

// get routers path
const testRouter = require("./src/router/testRouter/testRouter");
const getAllJobPost = require("./src/router/getRouters/getAllJObPost");
const getTestimonial = require("./src/router/getRouters/getTestimonial");
const getSearchJob = require("./src/router/getRouters/searchJob");
const getJobDetail = require("./src/router/getRouters/getJobDetailRouter");


// get routers
app.use(testRouter);
app.use(getAllJobPost);
app.use(getTestimonial);
app.use(getSearchJob);
app.use(getJobDetail);



app.listen(PORT, () => {
  console.log("server is running");
});
