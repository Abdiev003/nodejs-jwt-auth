const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoute = require("./routes/user.js")

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

app.use("/user", userRoute)

app.get("/", (req, res) => {
  res.send("Authentication");
});

const CONNECTION_URL = "mongodb://root:12345@localhost:27017/?authSource=admin";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
