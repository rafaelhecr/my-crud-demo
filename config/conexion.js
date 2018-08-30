const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/config", { useNewUrlParser: true });
module.exports = mongoose;