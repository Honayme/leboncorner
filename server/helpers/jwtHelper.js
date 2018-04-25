const jwt = require('jsonwebtoken'),
      SECRET = 'secret'; //TODO Use more strong key and put it in a .env variable


const generateUserToken = (userData) => {
    return jwt.sign({
      userId: userData.id
    },
      SECRET,
      {
        expiresIn: '1h'
      })
};


module.exports = {
  generateUserToken
};
