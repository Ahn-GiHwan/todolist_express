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
      Todos.find().then((todos) => {
        res.json(todos);
      });
    })
    .catch((e) => {
      res.send(e);
      console.log(e);
    });
});

router.route("/modifyTodo").patch((req, res) => {
  const { id, value } = req.body;

  Todos.updateOne({ _id: id }, { $set: { value } }, (err, todo) => {
    if (err) {
      console.log(err);
    } else {
      console.log(todo);
      Todos.find().then((todos) => {
        res.json(todos);
      });
    }
  });
});

router.route("/isCheck").patch((req, res) => {
  const { id } = req.body;

  Todos.findOne({ _id: id }, (err, todo) => {
    if (err) {
      console.log(err);
    } else {
      const changeCheck = todo.isCheck ? false : true;
      Todos.updateOne(
        { _id: id },
        { $set: { isCheck: changeCheck } },
        (err, todo) => {
          if (err) {
            console.log(err);
          } else {
            Todos.find().then((todos) => {
              res.json(todos);
            });
          }
        }
      );
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
        Todos.find().then((todos) => {
          res.json(todos);
        });
      }
    }
  );
});

module.exports = router;
