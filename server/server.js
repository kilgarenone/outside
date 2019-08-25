const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const mountRoutes = require("./routes");

const publicDirPath = path.join(__dirname, "./public"); // __dirname will be the path to the dir of this particular file(server.js) is in. then you dot dot to where you want to go
const viewsDirPath = path.join(__dirname, "./templates/views");
const partialsDirPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsDirPath);
hbs.registerPartials(partialsDirPath);

app.use(express.static(publicDirPath));

mountRoutes(app);

module.exports = app;
