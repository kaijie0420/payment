const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

class Payment {
  static async makePayment(amount, token) {
    try {
      const amountInCent = amount * 100;
      const mockedToken = 'tok_mastercard';

      // amount is in cents
      const charge = await stripe.charges.create({
        amount: amountInCent,
        currency: 'myr',
        source: mockedToken,
      });

      // Randomise status here
      const { created } = charge;
      return created % 2 === 0;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Payment;
