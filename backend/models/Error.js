const mongoose = require('mongoose');

const ErrorSchema = new mongoose.Schema({
  name: String,
  severity: String,
  description: String,
});

const Error = mongoose.model('Error', ErrorSchema);

module.exports = Error;
