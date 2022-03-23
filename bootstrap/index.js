const route = require('../route');
database = require('../config/database');
const express = require('express');
const db = require('../models');
const Model = db.users;
const app = express();
const port = 3001
print = () =>{
    console.log("Hello Prottoy");
}
const mainApp = () =>{
    if(database.sync.force){
        db.sequelize.sync({force:true})
    }
app.use('/',route )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}


module.exports = mainApp;