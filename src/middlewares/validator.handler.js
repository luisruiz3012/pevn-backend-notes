const boom = require("@hapi/boom");

function schemaValidator(schema, type) {
  return (req, res, next) => {
    const details = req[type];
    const {error} = schema.validate(details, { abortEarly: false});

    if (error) {
      next(boom.badRequest(error));
    }

    next();
  };
}

module.exports = schemaValidator;
