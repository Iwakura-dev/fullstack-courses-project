const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRouter = require("../routes/post.routes");

const PORT = process.env.port || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", postRouter);

app.listen(PORT, () => {
  console.log(`Server has been started in the port ---->> ${PORT}`);
});
