const { client } = require("./dbConnect");

const allJobPostCollections = client.db("jobSafari").collection("jobPosts");
const testimonialCollections = client.db("jobSafari").collection("testimonial");
const usersCollections = client.db("jobSafari").collection("usersInfo");
const resumeCollections = client.db("jobSafari").collection("resumes");

const jobApplicationCollections = client
  .db("jobSafari")
  .collection("jobApplications");


const blogCollections = client
.db("jobSafari")
.collection("blogs");

module.exports = {
  allJobPostCollections,
  testimonialCollections,
  usersCollections,
  resumeCollections,
  jobApplicationCollections,
  blogCollections
};
