import express from "express";
import { getHome } from "../controllers/homeController.js";

const router = express.Router();
router.get("api", getHome);

export default router;

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/upparkrishna032-ops/cicd.git
git push -u origin main