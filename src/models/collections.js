const { client } = require("./dbConnect");

const allJobPostCollections = client.db("jobSafari").collection("jobPosts");
const testimonialCollections = client.db("jobSafari").collection("testimonial");
const usersCollections = client.db("jobSafari").collection("usersInfo");
const resumeCollections = client.db("jobSafari").collection("resumes");

const jobApplicationCollections = client
  .db("jobSafari")
  .collection("jobApplications");

module.exports = {
  allJobPostCollections,
  testimonialCollections,
  usersCollections,
  resumeCollections,
  jobApplicationCollections
};
