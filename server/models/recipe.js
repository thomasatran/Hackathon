const {mongoose} = require('./../db/mongoose');
let RecipeSchema = new mongoose.Schema({
    orderID: {
        type: String,
    
    },
    instructions: [],
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    ingredientStrings:[],
    categories: {
        type:Array
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
