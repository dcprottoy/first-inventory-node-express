const jwt = require('jsonwebtoken');





exports.token = (value) =>{

 let token =  jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: '1h' });
// console.log(token)
  this.verify(token);
// return token;
    
}

exports.verify = (value) => {
    try {
        var decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWF0IjoxNjQ5MjQwMDk3LCJleHAiOjE2NDkyNDM2OTd9.BA3KMux5gvIXm1Bblikwuef9j4pjdVQ6Uw05iW7dIrc", 'secret');
        console.log(decoded)
      } catch(err) {
        console.log(err.name)
      }
      


}