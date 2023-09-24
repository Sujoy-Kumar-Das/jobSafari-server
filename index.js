const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
require("dotenv").config();

// middleware funtions
app.use(cors());
app.use(express.json());

// database
const { dbConnect } = require("./src/models/dbConnect");
dbConnect();

// get routers path
const testRouter = require("./src/router/testRouter/testRouter");
const getAllJobPost = require("./src/router/getRouters/getAllJObPost");
const getTestimonial = require("./src/router/getRouters/getTestimonial");
const getJobDetail = require("./src/router/getRouters/getJobDetailRouter");
const getPeopleControler = require("./src/router/getRouters/getPeoplesRoute");

// post routers path
const storeUser = require("./src/router/postRouters/storeUserRouter");
const postJob = require("./src/router/postRouters/postJobRouter");
// get routers
app.use(testRouter);
app.use(getAllJobPost);
app.use(getTestimonial);
app.use(getJobDetail);
app.use(getPeopleControler);

// post routes
app.use(storeUser);
app.use(postJob);

app.listen(PORT, () => {
  console.log("server is running");
});
