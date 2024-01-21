import { CronJob } from "cron";
import { scrapHtml } from "../utils/htmlScrapper.js";

export const scrapByUrlCron = async (req, res) => {
  const { url, cronExpression } = req.body;
  if (!url || !cronExpression) throw new Error("Missing parameters");

  console.log(url, cronExpression);

  // If needed, save the job ref to a variable to stop it or use its methods
  CronJob.from({
    cronTime: cronExpression,
    onTick: fetchAndScrap.bind(this, url),
    start: true,
  });

  res.status(202).json({ message: "Task successfully scheduled" });
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
