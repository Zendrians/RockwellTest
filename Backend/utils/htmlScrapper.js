import * as cheerio from "cheerio";

export function scrapHtml(htmlString) {
  const $ = cheerio.load(htmlString);
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
  return headers;
}
