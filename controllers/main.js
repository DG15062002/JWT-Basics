//jshint esversion:8
//check username, password in post(login) request
//if exist create new JWT
//send back to front-end

//setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken');
// const CustomAPIError = require('../errors/custom-error');
const {BadRequestError} = require('../errors');

const login = async (req,res)=>{
  const {username,password} = req.body;
  // mongoose validation
  // Joi
  // check in the controller

  if(!username || !password){
    // throw new CustomAPIError('Please provide email and password',400);
    throw new BadRequestError('Please provide email and password');
  }

  //just for demo, normally provided by DB!!
  const id = new Date().getDate();

//try to keep payload small, better experience for user
// just for demo, in production use long,complex and unguessable string value!!!
  const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});
  // console.log(username,password);
  // res.send('Fake Login/Register/Signup Route');
  res.status(200).json({msg:`user created`,token});
};

const dashboard = async (req,res)=>{
  // console.log(req.user);
  const luckyNumber = Math.floor(Math.random()*100);
  res
  .status(200)
  .json({
    msg:`Hello, ${req.user.username}`,
    secret:`Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
//   const authHeader = req.headers.authorization;
//
// if(!authHeader || !authHeader.startsWith('Bearer ')){
//   throw new CustomAPIError('No token provided ',401);
// }
//
// const token = authHeader.split(' ')[1];
// console.log(token);
  // console.log(req.headers);
  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   console.log(decoded);
  //
  // } catch (error) {
  //   throw new CustomAPIError('Not authorized to access this route ',401);
  // }

};

module.exports = {
  login, dashboard
};