const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  review: { type: String, required: true },
  tripTaken: { type: String },
  img: { type: String },
  rating: { type: Number, default: 5 }
});

module.exports = mongoose.model('Testimonial', TestimonialSchema, 'testimonials');