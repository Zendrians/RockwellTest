export const scrapByUrl = async (req, res) => {
  const { url, cronExpression } = req.body;

  try {
    const webResponse = await fetch(url);
    if (webResponse.ok) {
      // console.log(webResponse.headers);
      const baseHtml = await webResponse.text();
      // console.log(baseHtml);
      res.status(200).send(baseHtml);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }

  // res.status(200).send("Route working");
};
