const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@drivetestdb.i5cg8me.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", function () {
  console.log("Application is connected to Databse");
});
