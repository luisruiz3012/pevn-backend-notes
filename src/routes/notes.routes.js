const express = require("express");
const schemaValidator = require("../middlewares/validator.handler");
const createNoteSchema = require("../schemas/note.schema");
const router = express.Router();

const NotesServices = require("../services/notes.service");
const service = new NotesServices();

router.get('/', async (req, res) => {
  const notes = await service.find();
  res.status(200).json(notes);
});

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const note = await service.findOne(id);
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
});

router.post("/",
schemaValidator(createNoteSchema, "body"),
async(req, res, next) => {
  try {
    const body = req.body;
    const note = await service.create(body);
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async(req, res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const note = await service.update(id, body);

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async(req, res, next) => {
  try {
    const {id} = req.params;
    const note = await service.delete(id);
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
