import express from "express";
import { checkAuth, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { login, logout, signup } from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);
router.put("/update-profile",protectRoute, updateProfile);
router.get("/check",protectRoute,checkAuth)
export default router;
