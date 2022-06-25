const { ValidationError } = require("sequelize");

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json({error: output.payload.message});
  }
  next(err);
}

function sequelizeErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      error: err.message
    });
  }
  next(err);
}

function notFound(err, req, res, next) {
  if(err.statusCode == "404") {
    res.status(404).json({error: "404 Page Not Found"});
  }
  console.log(err);
  next(err);
}

module.exports = {boomErrorHandler, sequelizeErrorHandler, notFound};
