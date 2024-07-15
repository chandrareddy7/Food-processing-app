import express from "express";
import checkRole from "../middleware/checkRole.js";
import {
  addFoodItem,
  deleteFoodItem,
  viewOrders,
  updateOrderStatus,
} from "../controllers/vendorController.js";

const router = express.Router();

router.post("/food-items", addFoodItem);
router.delete("/food-items/:id", deleteFoodItem);
router.get("/orders", viewOrders);
router.put("/orders/:id", updateOrderStatus);

export default router ;
