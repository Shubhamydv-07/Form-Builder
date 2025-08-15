const Response = require('../models/Response'); // Adjust path to your Response model

exports.submitResponse = async (req, res, next) => {
  try {
    const { answers } = req.body;
    const formId = req.params.id; // This comes from the route parameter
    
    console.log('Submitting response for form:', formId);
    console.log('Answers:', answers);
    
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ 
        error: 'Answers array is required' 
      });
    }

    const response = await Response.create({ 
      formId: formId, 
      answers: answers 
    });
    
    res.status(201).json(response);
  } catch (err) { 
    console.error('Error submitting response:', err);
    next(err); 
  }
};

exports.getResponses = async (req, res, next) => {
  try {
    const formId = req.params.id; // This comes from the route parameter
    console.log('Getting responses for form:', formId);
    
    const responses = await Response.find({ 
      formId: formId 
    }).sort({ submittedAt: -1 });
    
    res.json(responses);
  } catch (err) { 
    console.error('Error getting responses:', err);
    next(err); 
  }
};