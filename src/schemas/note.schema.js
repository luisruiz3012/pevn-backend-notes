const joi = require("joi");

const title = joi.string().min(3).max(25);
const description = joi.string();

const createNoteSchema = joi.object({
  title: title.required(),
  description: description,
});

module.exports = createNoteSchema;
