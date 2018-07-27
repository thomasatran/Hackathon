const {mongoose} = require('./../db/mongoose');

let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteRecipes: [],
    groceryList: []
});

let User = mongoose.model('User', UserSchema);
module.exports = {User};
