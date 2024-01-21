import express from "express";
import cors from "cors";
import scraperRouter from "./src/router/scraperRouter.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", scraperRouter);

app.listen(PORT, () => {
  console.log(`App listnening on ${PORT}`);
});
