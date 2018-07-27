const mongoose = require('mongoose');
// const tunnel = require('tunnel-ssh');

mongoose.connect(`mongodb://localhost:27017/Recipe`);

module.exports = {mongoose};
