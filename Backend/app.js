import express from "express";
import cors from "cors";
import scraperRoutes from "./router/scraperRouter.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', scraperRoutes);

app.listen(PORT, () => {
  console.log(`App listnening on ${PORT}`);
});
