require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.connectionString);
const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const studentsRouter = require("./routes/students");
app.use("/students", studentsRouter);

app.listen(3000, () => {
  console.log("server is running");
});
