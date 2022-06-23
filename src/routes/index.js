const express = require("express");

const notesRoutes = require("../routes/notes.routes");

function apiRouter(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/notes", notesRoutes);
}

module.exports = apiRouter;
