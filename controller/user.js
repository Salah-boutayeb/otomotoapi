const asyncHandler = require("express-async-handler");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const models = require("../models");
/*  **************************generate jwt *******************************  */

const generateJwt = (id) => {
  return jwt.sign({ id }, process.env.JWTSECRET, {
    expiresIn: "30d",
  });
};

/*  *****************************************************  */
// @desc: user registration
// @route: POST /api/users/signup
// @access: public
const registerUser = asyncHandler(async (req, res) => {
  console.log("signup");
  const { lastName, firstName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("please fill all fields");
  }
  // sheck if user already exists
  const userExists = await models.User.findOne({ where: { email } });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  // hashPassword
  const salt = await bycrypt.genSalt(10);
  const hashPassword = await bycrypt.hash(password, salt);
  const user = await models.User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
  /* create user */
  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateJwt(user.id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

/*  *********************************************************  */
// @desc: user registration
// @route: GET /api/users/login
// @access: public
const userLogin = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("please fill all fields");
  }
  // sheck if user already exists
  const userExists = await models.User.findOne({ where: { email } });
  if (userExists && (await bycrypt.compare(password, userExists.password))) {
    console.log("existss");
    res.status(201).json({
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      token: generateJwt(userExists.id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
/***************************************************************/
// @desc: user registration
// @route: GET /api/users/me
// @access: public
const getUser = asyncHandler(async (req, res) => {
  const { id, name, email } = await models.User.findOne({
    where: { id: req.user.id },
  });

  res
    .json({
      id: id,
      name,
      email,
    })
    .status(200);
});
/*  *********************************************************  */

module.exports = {
  registerUser,
  userLogin,
  getUser,
};
