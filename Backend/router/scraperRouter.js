import express from "express";
import { scrapByUrl, scrapByUrlCron } from "../controllers/scraper.js";

const router = express.Router();

router.post("/scrap", scrapByUrl);
router.post("/scrap/cron", scrapByUrlCron);

export default router;
