const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
require("dotenv").config();

/************************** middleware funtions *********************/

app.use(cors());

app.use(express.json());

/************************** database ******************************/

const { dbConnect } = require("./src/models/dbConnect");

dbConnect();

/*******************  get routers path *********************************/

const testRouter = require("./src/router/testRouter/testRouter");

const getAllJobPost = require("./src/router/getRouters/getAllJObPost");

const getTestimonial = require("./src/router/getRouters/getTestimonial");

const getJobDetail = require("./src/router/getRouters/getJobDetailRouter");

const getPeopleControler = require("./src/router/getRouters/getPeoplesRoute");

const getUserData = require("./src/router/getRouters/getUserDataRouter");

const myResume = require("./src/router/getRouters/getMyResume");

const getAllUsers = require("./src/router/getRouters/getAllUsersRouter");

const getMyJobApplications = require("./src/router/getRouters/getMyJobApplications");

const getBlogs = require("./src/router/getRouters/getBlogsRouter");

const getMyBlogs = require("./src/router/getRouters/getMyBlogsRouter");

const getBlogDetail = require("./src/router/getRouters/getBlogDetailRouter");

const getMyJobPosts = require("./src/router/getRouters/getMyJobPostsRouter");

const getIsAdmin = require("./src/router/getRouters/isAdminRouter");

const getJwtToken = require("./src/router/getRouters/getJwtToken");

/********************  post routers path ************************************/

const storeUser = require("./src/router/postRouters/storeUserRouter");

const postJob = require("./src/router/postRouters/postJobRouter");

const postResume = require("./src/router/postRouters/postMyResume");

const postJobApplicationRouter = require("./src/router/postRouters/storeJobApplicationRouter");

const postBlog = require("./src/router/postRouters/postBlogRouter");

/*********************** make admin routers path ***********************/

const makeAdmin = require("./src/router/postRouters/makeAdminRouter");

/****************************** delete routers path  **************************/

const deleteMyProfile = require("./src/router/deleteRouters/deleteMyProfileRouter");

const deleteJobApplication = require("./src/router/deleteRouters/deleteJobApplicationRouter");

const deleteMyBlog = require("./src/router/deleteRouters/deleteMyBlogRouter");

const deleteMyJobPost = require("./src/router/deleteRouters/deleteMyJobPostRouter");

const deleteUserByAdmin = require("./src/router/deleteRouters/deleteUserRouter");

/************************** get routers  ************************/

app.use(testRouter);

app.use(getAllJobPost);

app.use(getTestimonial);

app.use(getJobDetail);

app.use(getPeopleControler);

app.use(getUserData);

app.use(myResume);

app.use(getAllUsers);

app.use(getMyJobApplications);

app.use(getBlogs);

app.use(getMyBlogs);

app.use(getBlogDetail);

app.use(getMyJobPosts);

app.use(getIsAdmin);

app.use(getJwtToken);

/***************************** post routes ******************************/

app.use(storeUser);

app.use(postJob);

app.use(postResume);

app.use(postJobApplicationRouter);

app.use(postBlog);

/********************************** pathc router **********************/

app.use(makeAdmin);

/******************************* delete routes   **********************/

app.use(deleteMyProfile);

app.use(deleteJobApplication);

app.use(deleteMyBlog);

app.use(deleteMyJobPost);

app.use(deleteUserByAdmin);

app.listen(PORT, () => {
  console.log("server is running");
});
