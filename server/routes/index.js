const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/todos", require("./todos.routes"));

module.exports = router;
