const mongoose = require('mongoose');

let RecipeSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    totalClicksPerRecipe: {
        type: Number,
        required: true
    }
});

let Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {Recipe};
