const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, err => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("there are error in connecting");
  }
});

require("./contact.model");

