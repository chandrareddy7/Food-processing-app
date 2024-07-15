import express from "express";
import checkRole from "../middleware/checkRole.js";
import {
  viewCart,
  addToCart,
  userOrders,
  placeOrder,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/cart", viewCart);
router.post("/cart", addToCart);
router.get("/orders", userOrders);
router.post("/orders", placeOrder);

export default router;
