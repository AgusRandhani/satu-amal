import { Router } from "express";
import RecipientController from "./app/controllers/RecipientController";
import DistrictController from "./app/controllers/DistrictController";
import UserController from "./app/controllers/UserController";
import DonationPaymentController from "./app/controllers/DonationPaymentController";

const router = new Router();

// user
router.post("/user", UserController.create);
router.post("/user/login", UserController.login);
router.put("/user/logout", UserController.logout);
router.get("/user/profile/:id", UserController.getProfile);
router.put("/user/profile/:id", UserController.editProfile);
router.get("/user/donation-history/:id", UserController.getDonationHistory);
router.post("/user/otp", UserController.verifyOtp);

// districts
router.get("/districts", DistrictController.index);

// recipient
router.post("/recipients", RecipientController.create);
router.get("/recipients", RecipientController.index);
router.put("/recipients/:id/add_items", RecipientController.addItems);
router.put(
  "/recipients/:id/confirm_registration",
  RecipientController.confirmRegistration
);
router.put(
  "/recipients/:id/confirm_package_prepared",
  RecipientController.packagePrepared
);
router.put(
  "/recipients/confirm_packages_pickup",
  RecipientController.packagePickup
);
router.put(
  "/recipients/:id/package_received",
  RecipientController.packageReceived
);
router.put("/recipients/:id/latest_report", RecipientController.latestReport);
router.put("/recipients/:id/past_report", RecipientController.pastReport);

// donation-payment
router.post("/payments/:id/unpaid", DonationPaymentController.createPayment);
router.put("/payments/:id/paid", DonationPaymentController.confirmPaidPayment);
router.get("/payments", DonationPaymentController.index);
router.put("/payments/:id/verified", DonationPaymentController.verifyPayment);

export default router;
