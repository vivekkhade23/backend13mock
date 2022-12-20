const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://Vivekkhade:vivek@cluster0.czgoiwd.mongodb.net/mock13?retryWrites=true&w=majority");
};

module.exports = connect;
