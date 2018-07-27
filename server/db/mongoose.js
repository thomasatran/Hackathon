var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

mongoose.connect("mongodb://localhost:27017/hackathon" , option).then(function (err, db) {
       if(err){
           return console.log(err);
       }else{
           console.log("DB Connected");



    }
});

module.exports = {mongoose};
