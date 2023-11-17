import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "../routes/course.routes.js";

const PORT = process.env.port || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server has been started in the port ---->> ${PORT}`);
});
