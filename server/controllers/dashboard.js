const User = require("../models/user");
const dashboard = async (req, res) => {
  try {
    const { username } = req.user;
    res.status(200).json({ msg: "nyash", username });
  } catch (error) {
    console.log(error);
  }
};

module.exports = dashboard;
