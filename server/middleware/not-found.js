const notFound = (req, res) => {
  res.status(404).send("You are lost my guy");
};
module.exports = notFound;
