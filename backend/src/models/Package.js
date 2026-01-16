const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  duration: { type: String }, // Add this to match your Atlas data!
  description: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Package', PackageSchema, 'packages');