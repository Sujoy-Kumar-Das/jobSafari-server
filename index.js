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
const getUserData = require("./src/router/getRouters/getUserDataRouter");
const myResume = require("./src/router/getRouters/getMyResume");
const getAllUsers = require("./src/router/getRouters/getAllUsersRouter");
// post routers path
const storeUser = require("./src/router/postRouters/storeUserRouter");
const postJob = require("./src/router/postRouters/postJobRouter");
const postResume = require("./src/router/postRouters/postMyResume");
const postJobApplication = require("./src/router/postRouters/postJobApplicationRouter");
// make admin routers path
const makeAdmin = require("./src/router/postRouters/makeAdminRouter");
// delete routers path
const deleteUser = require("./src/router/deleteRouters/deleteUserRouter");

// get routers
app.use(testRouter);
app.use(getAllJobPost);
app.use(getTestimonial);
app.use(getJobDetail);
app.use(getPeopleControler);
app.use(getUserData);
app.use(myResume);
app.use(getAllUsers);

// post routes
app.use(storeUser);
app.use(postJob);
app.use(postResume);
app.use(postJobApplication);
// pathc router
app.use(makeAdmin);
// delete routes
app.use(deleteUser);

app.listen(PORT, () => {
  console.log("server is running");
});
