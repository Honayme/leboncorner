const jwt = require('jsonwebtoken'),
      SECRET = 'secret'; //TODO https://www.youtube.com/watch?v=F0HLIe3kNvM


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

//TODO Rename utils and not Helper cuz this is something different
