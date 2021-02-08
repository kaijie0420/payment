const router = require('express').Router();
const paymentController = require('./controllers/payment');

router.post('/processPayment', paymentController.processPayment);

module.exports = router;
