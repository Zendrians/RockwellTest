import { CronJob } from "cron";
import { scrapHtml } from "../utils/htmlScrapper.js";
import TempStorage from "../utils/tempStorage.js";
import isAlivePing from "../utils/isAlivePing.js";

export const scrapByUrlCron = async (req, res) => {
  try {
    const { url, cronExpression } = req.body;
    if (!url || !cronExpression) throw new Error("Missing parameters");

    console.log(`Task sheduled to scrap <${url}, on <${cronExpression}>`);

    // If needed, save the job ref to a variable to stop it or use its methods
    CronJob.from({
      cronTime: cronExpression,
      onTick: fetchAndScrap.bind(this, url),
      start: true,
    });

    res.status(202).json({ message: "Task successfully scheduled" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not schedule task" });
  }
};

export const getScrapData = async (req, res) => {
  try {
    res.status(200).json({ ...TempStorage.getScrapData() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

async function fetchAndScrap(url) {
  try {
    const isALive = isAlivePing(url);
    if (!isALive) return;
    const webResponse = await fetch(url);
    if (webResponse.ok) {
      const baseHtml = await webResponse.text();
      const scrapedData = scrapHtml(baseHtml);
      console.log(scrapedData);
      TempStorage.storeScrapData(scrapedData);
    } else {
      console.log("not valid to scrape");
    }
  } catch (err) {
    console.error(err);
  }
}
