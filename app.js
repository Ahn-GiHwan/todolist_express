import express from "express";
import mongoose from "mongoose";
import mongoDBKey from "./key";
import todosRouter from "./routes/todosRouter";

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
