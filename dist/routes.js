"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _RecipientController = require('./app/controllers/RecipientController'); var _RecipientController2 = _interopRequireDefault(_RecipientController);
var _DistrictController = require('./app/controllers/DistrictController'); var _DistrictController2 = _interopRequireDefault(_DistrictController);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _DonationPaymentController = require('./app/controllers/DonationPaymentController'); var _DonationPaymentController2 = _interopRequireDefault(_DonationPaymentController);

const router = new (0, _express.Router)();

// user
router.post("/user", _UserController2.default.create);
router.post("/user/login", _UserController2.default.login);
router.put("/user/logout", _UserController2.default.logout);
router.get("/user/profile/:id", _UserController2.default.getProfile);
router.put("/user/profile/:id", _UserController2.default.editProfile);
router.get("/user/donation-history/:id", _UserController2.default.getDonationHistory);
router.post("/user/otp", _UserController2.default.verifyOtp);

// districts
router.get("/districts", _DistrictController2.default.index);

// recipient
router.post("/recipients", _RecipientController2.default.create);
router.get("/recipients", _RecipientController2.default.index);
router.put("/recipients/:id/add_items", _RecipientController2.default.addItems);
router.put(
  "/recipients/:id/confirm_registration",
  _RecipientController2.default.confirmRegistration
);
router.put(
  "/recipients/:id/confirm_package_prepared",
  _RecipientController2.default.packagePrepared
);
router.put(
  "/recipients/confirm_packages_pickup",
  _RecipientController2.default.packagePickup
);
router.put(
  "/recipients/:id/package_received",
  _RecipientController2.default.packageReceived
);
router.put("/recipients/:id/latest_report", _RecipientController2.default.latestReport);
router.put("/recipients/:id/past_report", _RecipientController2.default.pastReport);

// donation-payment
router.post("/payments/:id/unpaid", _DonationPaymentController2.default.createPayment);
router.put("/payments/:id/paid", _DonationPaymentController2.default.confirmPaidPayment);
router.get("/payments", _DonationPaymentController2.default.index);
router.put("/payments/:id/verified", _DonationPaymentController2.default.verifyPayment);

exports. default = router;
