const { models } = require("../libs/sequelize");
const boom = require("@hapi/boom");

class NotesServices {
  constructor() {}

  async create(data) {
    const note = await models.Note.create(data);
    return note;
  }

  async find() {
    const notes = await models.Note.findAll();
    return notes;
  }

  async findOne(id) {
    const note = await models.Note.findByPk(id);

    if (!note) {
      throw boom.notFound("Note not found");
    }

    return note;
  }

  async update(id, changes) {
    const note = await this.findOne(id);
    await note.update(changes);
    return note;
  }

  async delete(id) {
    const note = await this.findOne(id);
    await note.destroy();
    return { message: "Note deleted successfully"};
  }
}

module.exports = NotesServices;
