require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const ConnectDb = require("./db/conn");
const notFound = require("./middleware/not-found");
const router = require("./routes/main");

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.use(notFound);

// Connecting to db and listening on port 5000
const port = process.env.PORT || 5000;
const startServer = async () => {
  try {
    const url = process.env.MONGO_URI;
    await ConnectDb(url);
    app.listen(port, () => console.log(`App listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
startServer();
