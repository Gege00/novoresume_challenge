const jwt = require('jsonwebtoken');

const generateAccessToken = (id) => {
    if(!id) throw new Error('id cannot be null')

    const details={};
    details.maxAge= process.env.JWT_MAXAGE || 3600; //let's say the max token age is not defined in the env
    details.secret = process.env.TOKEN_SECRET;

    const token = jwt.sign(
      {"id":id},
      details.secret,
      {
       expiresIn: details.maxAge,
       algorithm: 'HS256'
      }
    )

    return token;
}

const authenticateToken = (req, res, next) => {

try {
  let token = req.headers.authorization;
  const authenticated = jwt.verify(token, process.env.TOKEN_SECRET)
  if(!authenticated) throw new Error("Authentication issue!")
  next();
} catch (e) {
    return res.status(401).send(e.message)
}



}


module.exports = { generateAccessToken, authenticateToken };
