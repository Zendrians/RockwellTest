import { scrapHtml } from "../utils/htmlScrapper.js";

export const scrapByUrl = async (req, res) => {
  const { url, cronExpression } = req.body;

  try {
    const webResponse = await fetch(url);
    if (
      webResponse.ok &&
      webResponse.headers.get("content-type") === "text/html"
    ) {
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
