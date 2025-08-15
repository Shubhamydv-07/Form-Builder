const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/', formController.createForm);        // POST /api/forms
router.get('/', formController.listForms);          // GET /api/forms
router.get('/:id', formController.getForm);         // GET /api/forms/:id
router.put('/:id', formController.updateForm);      // PUT /api/forms/:id

module.exports = router;