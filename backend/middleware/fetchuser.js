
//for jsonwebtoken:
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'jagdish';

const fetchuser = (req, res, next) => {


    //get the user from the jwt token and add Id to request to object:
    const token = req.header('auth-token');

    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token....." });
    }

    try {
        //from this token we draw(nikalna) 
        //here I'm verifying my jwt_secret and token
        const data = jwt.verify(token, JWT_SECRET);

        //from here we find the user:
        req.user = data.user;
        next();
 
        
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token.." });
    }

}


module.exports = fetchuser;