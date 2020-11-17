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
    // Hint: This is where you need to verify the JWT
    // Hint: You will see this function being passed to authenticated action routes in code. See backend/routes/users.js to explore
    let authenticated = false;
    let token = req.headers

    if(!authenticated) res.status(401)


    next();
}


module.exports = { generateAccessToken, authenticateToken };
