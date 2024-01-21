import express from "express";
import {
  getScrapData,
  scrapByUrlCron,
} from "../controllers/scraperController.js";

const router = express.Router();

router.get("/scrap/cron", getScrapData);
router.post("/scrap/cron", scrapByUrlCron);

export default router;
