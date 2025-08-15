const Form = require('../models/Form'); // Adjust path to your Form model

exports.createForm = async (req, res, next) => {
  try {
    const form = await Form.create(req.body);
    res.status(201).json(form);
  } catch (err) {
    next(err);
  }
};

exports.listForms = async (req, res, next) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (err) {
    next(err);
  }
};

exports.getForm = async (req, res, next) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.json(form);
  } catch (err) {
    next(err);
  }
};

exports.updateForm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedForm = await Form.findByIdAndUpdate(id, req.body, { 
      new: true,
      runValidators: true 
    });
    
    if (!updatedForm) {
      return res.status(404).json({ error: 'Form not found' });
    }
    
    res.json(updatedForm);
  } catch (err) {
    next(err);
  }
};