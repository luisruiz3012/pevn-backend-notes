class NotesServices {
  constructor() {}

  async create() {}

  async find() {}

  async findOne(id) {
    return id;
  }

  async update(id, changes) {
    return {
      id,
      changes
    };
  }

  async delete(id) {
    return id;
  }
}

module.exports = NotesServices;
