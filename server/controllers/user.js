const User = require("../models/user");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;

    if (!fullname || !username || !password)
      return res
        .status(400)
        .json({ stat: false, msg: "All fields are required" });

    // Check db if user already exists
    const olderUser = await User.findOne({ username });
    if (olderUser)
      return res
        .status(200)
        .json({ stat: false, msg: "username already exists" });

    // Add user data to db
    const user = await User.create({ fullname, username, password });
    res.status(200).json({
      stat: true,
      msg: `${username}, you've been registered successfully`,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if field is empty
    if (!username || !password)
      return res.status(400).json({ msg: "Behave yourself" });

    // Check if user actually exists
    const user = await User.findOne({ username, password });
    if (!user) return res.status(400).json({ msg: "Oga go create account" });

    const token = jwt.sign({ user }, process.env.JWT_SECRET);
    res.status(200).json({ msg: `Welcome back ${username}`, username, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
