const jwt = require('jsonwebtoken');

exports.token = (value) =>{

 let token =  jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: '1h' });

return token;
    
}

exports.verify = (value) => {
    try {
        var decoded = jwt.verify(value, 'secret');
        console.log(decoded)
      } catch(err) {
        console.log(err.name)
      }
      


}