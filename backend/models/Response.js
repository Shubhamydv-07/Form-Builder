const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  questionId: String,
  value: mongoose.Mixed
});

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
  submittedAt: { type: Date, default: Date.now },
  answers: [AnswerSchema]
});

module.exports = mongoose.model('Response', ResponseSchema);