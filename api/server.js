const express = require("express");
const app = express();
const router = require("./routes/router");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json({ limit: "200mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api", router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server corriendo en ", PORT);
});
