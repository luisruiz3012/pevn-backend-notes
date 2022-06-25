const express = require("express");
const cors = require("cors");
const {boomErrorHandler, sequelizeErrorHandler, notFound} = require("./middlewares/error.handler");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

router(app);

app.use(notFound);
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);

app.listen(3000, () => console.log("listening on port 3000"));
