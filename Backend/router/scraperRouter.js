import express from "express";
import { scrapByUrl } from "../controllers/scraper.js";

const router = express.Router();

router.post("/scrap", scrapByUrl);

export default router;
