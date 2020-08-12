const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const lists = require("./routes/lists");

const app = express();
app.use(express.json());

app.use("/api/v1/lists", lists);

const PORT = process.env.PORT || 6900;

app.listen(PORT, console.log("서버 가동"));
