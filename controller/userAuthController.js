const encryption = require('../tools/encryption');
const token = require('../tools/token').token;
exports.auth = (req,res)=>{
      encryption.hash();
       token('five');
      
      res.send("collected");

}