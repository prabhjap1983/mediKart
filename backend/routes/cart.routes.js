import express from "express";
import { authUser } from "../middlewares/authUser.js";
import { updateCart, getCart } from "../controllers/cart.controller.js";

const router = express.Router();

// Get cart
router.get("/", authUser, getCart);

//Update cart
router.post("/update", authUser, updateCart);

export default router;
