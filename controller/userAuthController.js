const encryption = require('../tools/encryption');

exports.auth = (req,res)=>{
      encryption.hash();
      res.send("collected");
}