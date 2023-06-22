//jshint esversion:8
const CustomAPIError = require('./custom-error');
const BadRequestError = require('./bad-request');
const UnauthenticatedError = require('./unauthenticated');


module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
};
