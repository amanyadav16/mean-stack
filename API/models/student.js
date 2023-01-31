const mongoose = require("mongoose");
const adressSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  state: {
    type: String,
  },
});
const studentSchema = new mongoose.Schema({
  enrollmentId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  year: {
    type: String,
  },
  semester: {
    type: String,
  },
  address: {
    type: adressSchema,
  },
});

module.exports = mongoose.model("", studentSchema, "studentData"); //pass table name here
