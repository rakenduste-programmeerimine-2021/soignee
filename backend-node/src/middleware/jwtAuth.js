const jwt = require("jsonwebtoken")
const { TokenExpiredError } = jwt;
require("dotenv").config()

exports.verifyJWT = (req, res, next) => {
  try {
    if (!req.headers["authorization"]) throw Error("Access denied");
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (e) {
    return res.status(401).send({ error: e.message })
  }
}

exports.catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }
  return res.sendStatus(401).send({ message: "Unauthorized!" });
}

// module.exports = verifyJWT