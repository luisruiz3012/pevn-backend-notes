const { Model, DataTypes, Sequelize } = require("sequelize");

const NOTES_NAME = "notes";

const NoteSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING
  },
  completed: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  createAt: {
    allowNull: false,
    field: "created_at",
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}

class Note extends Model {
  static associate() {
    // Todo
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTES_NAME,
      modelName: "Note",
      timestamps: false
    }
  }
}

module.exports = { NOTES_NAME, NoteSchema, Note };
