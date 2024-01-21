import express from "express";
import { scrapByUrlCron } from "../controllers/scraper.js";

const router = express.Router();

router.post("/scrap/cron", scrapByUrlCron);

export default router;
