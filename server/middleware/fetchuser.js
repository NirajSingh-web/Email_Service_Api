const jwt = require("jsonwebtoken");
const confiq = require("./../config");
const jwtsecret = confiq.jwtsecret||'Changer@&123';
const fetchuser = (req, res, next) => {
  try {
    if (req.header) {
      const token = req.header("Authorization");
      if (!token) {
       return res.status(401).json("invalid Token");
      }
      if (token) {
        const data = jwt.verify(token, jwtsecret);
        req.users = data;
        next();
      }
    }
  } catch (e) {
    console.log(e.message);
    res.status(401).json("Internal issue");
  }
};
module.exports = { fetchuser };
