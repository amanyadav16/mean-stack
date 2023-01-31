const express = require("express");
const router = express.Router();
const Student = require("../models/student");

//getting all
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//adding one
router.post("/", async (req, res) => {
  const student = new Student({
    enrollmentId: req.body.enrollmentId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    year: req.body.year,
    semester: req.body.semester,
    address: req.body.address,
  });
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//getting one
router.get("/:name", (req, res) => {
  res.send("get student with name: " + req.params.name);
});

//update one
router.put("/:firstName", async (req, res) => {
  const s = await Student.findOne({ firstName: req.params.firstName });
  try {
    const response = await Student.findByIdAndUpdate(s.id, req.body, {
      new: true,
    });
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//delete one
router.delete("/:enrollmentId", async (req, res) => {
  try {
    const deleteLog = await Student.deleteOne({
      enrollmentId: req.params.enrollmentId,
    });
    res.json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
