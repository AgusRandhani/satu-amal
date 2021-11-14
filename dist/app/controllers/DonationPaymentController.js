"use strict";Object.defineProperty(exports, "__esModule", {value: true});// donation-payment
class DonationPaymentController {
  async index(req, res) {
    res.send("welcome to index");
  }

  async createPayment(req, res) {
    res.send("under development");
  }

  async confirmPaidPayment(req, res) {
    res.send("under development");
  }

  async verifyPayment(req, res) {
    res.send("under development");
  }
}

exports. default = new DonationPaymentController();
