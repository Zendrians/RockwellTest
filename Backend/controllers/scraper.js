import { CronJob } from "cron";
import { scrapHtml } from "../utils/htmlScrapper.js";

export const scrapByUrl = async (req, res) => {
  const { url, cronExpression } = req.body;

  try {
    const webResponse = await fetch(url);
    if (webResponse.ok) {
      const baseHtml = await webResponse.text();
      const scrapedData = scrapHtml(baseHtml);
      res.status(200).json({
        data: scrapedData,
      });
    } else {
      res.status(400).send("Not valid");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

export const scrapByUrlCron = async (req, res) => {
  const { url, cronExpression } = req.body;
  if (!url || !cronExpression) throw new Error("params missing");

  console.log(url, cronExpression);

  // If needed, save the job ref to a variable to stop it or use its methods
  CronJob.from({
    cronTime: cronExpression,
    onTick: fetchAndScrap.bind(this, url),
    start: true,
  });

  res.send("Task successfully scheduled");
};

async function fetchAndScrap(url) {
  try {
    const webResponse = await fetch(url);
    if (webResponse.ok) {
      const baseHtml = await webResponse.text();
      const scrapedData = scrapHtml(baseHtml);
      console.log(scrapedData);
    } else {
      console.log("not valid");
    }
  } catch (err) {
    console.error(err);
  }
}
