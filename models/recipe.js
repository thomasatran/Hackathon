const {mongoose} = require('./../db/mongoose');

let RecipeSchema = new mongoose.Schema({
    recipeID: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    ingredients: [],
    cookTime: {
        type: Number,
        required: true
    },
    totalClicksPerRecipe: {
        type: Number,
        required: true
    },
    instructions: {
        type: String
    }
});

let Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {Recipe};
