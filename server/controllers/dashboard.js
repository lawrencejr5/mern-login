const User = require("../models/user");
const dashboard = async (req, res) => {
  try {
    const { username, isAdmin } = req.user;
    res.status(200).json({ msg: "nyash", username, isAdmin });
  } catch (error) {
    console.log(error);
  }
};

module.exports = dashboard;
