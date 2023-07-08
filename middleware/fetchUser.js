// middle ware to fetch user from jwt token and add it to req object
const jwt = require("jsonwebtoken");
const JWT_SECRET = "this is a secret";
const fetchUser = async (req, res, next) => {
  //get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    // we pass the user in the request object now
    req.user = data.user;
    next(); //this is important to move to the next  middleware function
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};
module.exports = fetchUser;
