//jshint esversion:8
const CustomAPIError = require('./custom-error');
const {StatusCodes} = require('http-status-codes');
class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    // this.statusCode = statusCode;
    // this.statusCode = 400;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
