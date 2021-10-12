const express = require("express");
const mongoose = require("mongoose");
const todosRouter = require("./routes/todosRouter");
const mongoDBKey = require("./key");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
