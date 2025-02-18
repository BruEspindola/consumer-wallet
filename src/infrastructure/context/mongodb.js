const mongoose = require("mongoose");
const environment = require("../../../env");

const connect = () => {
  try {
    return mongoose.connect(environment.mongoDBUri);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};
