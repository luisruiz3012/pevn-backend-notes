const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());

router(app);

app.listen(3000, () => console.log("listening on port 3000"));
