import * as cheerio from "cheerio";

export const scrapByUrl = async (req, res) => {
  const { url, cronExpression } = req.body;

  try {
    const webResponse = await fetch(url);
    if (
      webResponse.ok &&
      webResponse.headers.get("content-type") === "text/html"
    ) {
      const baseHtml = await webResponse.text();
      const $ = cheerio.load(baseHtml);
      const headers = [];
      $("h1, h2, h3, h4, h5, h6").each((i, el) => {
        headers.push({
          tag: el.name,
          text: $(el)
            .text()
            .replace(/\s{3,}/g, " ")
            .trim(),
        });
      });
      res.status(200).json({
        data: headers,
      });
    } else {
      res.status(400).send("Not valid");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
