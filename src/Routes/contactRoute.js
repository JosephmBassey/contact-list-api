const express = require('express');
const contactController = require('../Controllers/contactController')
const router = express.Router()

router.post('/contact',contactController.storeContact)
router.get('/contact/:id', contactController.getSingleContact)
router.get('/contacts', contactController.getAllContact)
router.delete('/contact/:id', contactController.deleteContact)
router.put('/contact/:id', contactController.updateContact)

module.exports = router;