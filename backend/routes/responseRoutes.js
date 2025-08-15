const express = require('express');
const router = express.Router({ mergeParams: true });
const responseController = require('../controllers/responseController');

// POST /api/forms/:id/responses
router.post('/', responseController.submitResponse);
// GET /api/forms/:id/responses
router.get('/', responseController.getResponses);

module.exports = router;