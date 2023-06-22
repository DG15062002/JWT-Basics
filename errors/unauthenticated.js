//jshint esversion:8
const CustomAPIError = require('./custom-error');
const {StatusCodes} = require('http-status-codes');
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    // this.statusCode = statusCode;
    // this.statusCode = 401;
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
