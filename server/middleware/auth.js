const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer "))
    return res.status(201).json({ msg: "Unauthorized" });

  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { user } = decoded;
    req.user = { ...user };
    next();
  } catch (err) {
    res.status(400).json({ msg: `An err occured \n ${err}` });
  }
};

module.exports = auth;
