const bcrypt = require('bcryptjs');


exports.hash = async (value = '12345') =>{
   
    var hash = await bcrypt.hash(value, 8);

    this.verify(value,hash);
//   console.log();

}

exports.verify =async (v1,v2) =>{
    var result =  await bcrypt.compare(v1, v2);
    console.log(result);

    return result;
} 

