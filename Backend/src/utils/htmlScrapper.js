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
  if (headers.length === 0) {
    const textArr = [];
    $("html body *")
      .contents()
      .filter((i, el) => {
        return (
          el.type === "text" &&
          el.parent.name !== "script" &&
          el.parent.name !== "noscript" &&
          el.parent.name !== "style"
        );
      })
      .each((i, el) => {
        textArr.push($(el).text().trim());
      });

    return {
      type: "text",
      data: textArr
        .join(" ")
        .replace(/\s{3,}/g, " ")
        .substring(0, 999),
    };
  }
  return { type: "headers", data: headers };
}
