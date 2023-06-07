const express = require("express");
const router = express.Router();
const userModals = require("../models/userModals");

router.post("/api/signup", async (req, res) => {
  console.log("yolo", req.body);
  const addtodo = new userModals({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const saveItem = await addtodo.save();
  res.status(200).json(saveItem);
});
router.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await userModals.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Successful login
    res.status(200).json({ user, message: "Login successful" });
    console.log("success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
