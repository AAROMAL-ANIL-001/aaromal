const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routers/userRoutes");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/iroid")
  .then(() => console.log("Db connected"))
  .catch(() => console.log("error in db"));

app.use(cors());
app.use("/", userRoute);

app.listen(5000, () => console.log("listening on 5000"));
