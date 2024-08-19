import express from "express";
import { getAllFoodItems, getFoodItemById } from "../controllers/foodItemsController.js";

const router = express.Router();

router.get("/", getAllFoodItems);
router.get("/:id", getFoodItemById);

export default router;
