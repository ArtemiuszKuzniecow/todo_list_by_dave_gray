const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const list = await Todo.find();
      res.status(200).send(list);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  })
  .post(async (req, res) => {
    try {
      const newTodo = await Todo.create({
        ...req.body,
      });
      res.status(201).send(newTodo);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  });

router
  .route("/:id")
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedTodo);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const removedTodo = Todo.findById(id);
      await removedTodo.deleteOne();
      return res.send(null);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong. Try it later." });
    }
  });

module.exports = router;
