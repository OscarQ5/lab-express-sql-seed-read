const cors = require("cors");
const express = require("express");
const app = express();
const songsController = require("./controllers/songController.js")

app.use(cors());
app.use(express.json());
app.use("/songs", songsController);

app.get("/", (req, res) => {
    res.send("Welcome to the Tuner app!");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})

module.exports = app;