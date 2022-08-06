import asyncHandler from ("express-async-handler");
import bycrypt from ("bcryptjs");
import jwt from ("jsonwebtoken");
import User from ("../models/user");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decodedToken.id).select("-password");

      next();
    } catch (error) {
      res.status(400);
      console.error("error authorization");
      throw new Error("no authorization");
    }
  }

  if (!token) {
    res.status(400);

    throw new Error("no authorization,no token");
  }
});

module.exports = { protect };
