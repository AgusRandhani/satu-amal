import { Router } from "express";
import DonationController from "./app/controllers/DonationController";
import DistrictController from "./app/controllers/DistrictController";

const router = new Router();

// districts
router.get("/districts", DistrictController.index);

// donations
router.get("/donations", DonationController.index);
router.post("/donations", DonationController.store);
router.get("/donations/:id", DonationController.show);
router.put("/donations/:id", DonationController.update);
router.put("/donations/:id/add-attachments", DonationController.addAttachment);
router.delete("/donations/:id", DonationController.destroy);

export default router;
