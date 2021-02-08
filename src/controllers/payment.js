const paymentService = require('../services/payment');

class Payment {
  static async processPayment(request, response) {
    try {
      const { amount, token } = request.body;
      const status = await paymentService.makePayment(amount, token);
      return response.status(200).send({ status: status ? 'confirmed' : 'cancelled' });
    } catch (error) {
      return response.status(500).send({ status: false, message: error.message });
    }
  }
}

module.exports = Payment;
