import * as cheerio from "cheerio";

export function scrapHtml(htmlString) {
  const $ = cheerio.load(htmlString);
  const headers = [];
  $("pre").each((i, el) => {
    headers.push({
      tag: el.name,
      text: $(el)
        .text()
        .replace(/\s{3,}/g, " ")
        .trim(),
    });
  });
  if (headers.length === 0) {
    const textOnly = $("html *")
      .contents()
      .map((i, el) => {
        return el.type === "text" ? `${$(el).text()} ` : "";
      })
      .get()
      .join("");
    return {
      type: "text",
      data: textOnly.replace(/\s{3,}/g, " ").substring(0, 999),
    };
  }
  return { type: "headers", data: headers };
}
