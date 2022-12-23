const express = require("express");
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
    app.listen(8080, () => {
      console.log(
        chalk.greenBright(`Server has been started on port ${PORT}...`)
      );
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
start();
