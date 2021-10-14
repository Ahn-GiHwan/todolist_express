const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todosRouter = require("./routes/todosRouter");
const mongoDBKey = require("./key");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/public", express.static(__dirname + "/public"));

mongoose
  .connect(mongoDBKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/", todosRouter);

app.listen(5000, () => {
  console.log("hello express");
});
