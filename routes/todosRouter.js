const express = require("express");
const Todos = require("../Schema/todosSchema");
const path = require("path");

const router = express.Router();

router.route("/").get((req, res) => {
  const html = path.join(__dirname, "..", "index.html");
  res.sendFile(html);
});

router.route("/todos").get((req, res) => {
  Todos.find().then((todos) => {
    res.json(todos);
  });
});

router.route("/addTodos").post((req, res) => {
  const { value } = req.body;

  const todos = new Todos({
    value,
    isCheck: false,
  });

  todos
    .save()
    .then(() => {
      res.send(`addTodos value:${value}`);
    })
    .catch((e) => {
      res.send(e);
      console.log(e);
    });
});

router.route("/modifyTodo").patch((req, res) => {
  const { id, value } = req.body;
  Todos.findOne({ id }, (err, todo) => {
    if (err) {
      console.log(err);
    } else {
      Todos.updateOne({ id }, { $set: { value: value } }, (err, todo) => {
        if (err) {
          console.log(err);
        } else {
          res.send("변경 완료");
          console.log(todo);
        }
      });
    }
  });
});

router.route("/delete").delete((req, res) => {
  const { id } = req.body;

  Todos.deleteOne(
    {
      _id: id,
    },
    (err, todo) => {
      if (err) {
        console.log(err);
        res.send("삭제 실패");
      } else {
        console.log(todo);
        res.send("삭제 성공");
      }
    }
  );
});

module.exports = router;
