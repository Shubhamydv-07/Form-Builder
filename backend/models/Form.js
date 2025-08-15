const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: String,
  type: { type: String, required: true },
  label: String,
  placeholder: String,
  options: [String],
  imageUrl: String,
  config: mongoose.Mixed,
  required: { type: Boolean, default: false }
});

const FormSchema = new mongoose.Schema({
  title: String,
  description: String,
  headerImage: String,
  questions: [QuestionSchema],
  createdAt: { type: Date, default: Date.now },
  creatorId: String
});

module.exports = mongoose.model('Form', FormSchema);