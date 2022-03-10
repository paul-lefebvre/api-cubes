import jwt from "jsonwebtoken";
import model from "../models/index.js";
const { User } = model;

export function checkUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.user = null;
        // res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.user = user;
        next();
      }
    });
  } else {
    res.user = null;
    next();
  }
}

export function authenticateToken(req, res) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err) => {
    if (err) {
      return res.sendStatus(401).json("no token" + err);
    }
    return (
      res.json({ acces_token: token })
      //req.user = user;
      //console.log(decodedToken.id)
    );
    // next();
  });
}
