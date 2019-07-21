const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

require("./config/config");
require("./model/db");

const rtsContact = require("./routes/contact.route");

const app = express();

//app.use(multer({ storage: storage,fileFilter:fileFilter }).array('images',100))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", rtsContact);
// Point static path to dist
app.use(express.static(path.join(__dirname, "yanhamer/dist/yanhamer")));
//app.use(express.static(__dirname + "./public"));
//app.use("/", express.static("./public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "yanhamer/dist/yanhamer/index.html"));
});
/*var distDir = __dirname + "/dist/";
app.use(express.static(distDir));*/
// start serve
port = process.env.PORT || 4000;
app.listen(port, () => console.log(`http://localhost:${port}`));
