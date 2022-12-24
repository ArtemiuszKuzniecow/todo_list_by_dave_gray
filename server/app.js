const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));
    console.log(chalk.cyanBright("MongoDB connected"));
    app.listen(8080, () => {
      console.log(
        chalk.cyanBright(`Server has been started on port ${PORT}...`)
      );
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
start();
