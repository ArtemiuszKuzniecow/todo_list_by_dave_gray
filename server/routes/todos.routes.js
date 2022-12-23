const express = require("express");
const todos = require("../data/db.json");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      if (todos) {
        res.status(200).send(todos.todos);
      }
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  })
  .post(async (req, res) => {
    try {
      const newTodo = req.body;
      todos.todos.push(newTodo);
      res.status(201).send(newTodo);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  });

router
  .route("/:id")
  .patch(async (req, res) => {
    try {
      const updatedTodo = req.body;
      todos.todos = [...todos.todos, updatedTodo];
      res.send(200);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  })
  .delete(async (req, res) => {
    try {
      const removesTodo = req.body;
      console.log(removesTodo);
      todos.todos = todos.todos.filter((t) => t.id !== removesTodo);
      return res.send(null);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  });

module.exports = router;
