const express = require('express');
const router = express.Router();
const {Recipe} = require('./../models/recipe');

router.post('/create', async(req, res) => {

     let value = await Recipe.create({
        recipeID: 1,
        name: "Chicken ",
        ingredients: ["chicken", "noodle"],
        cookTime: 45,
        totalClicksPerRecipe: 5
    });

    console.log(""+ value);

    res.send("route to create a recipe is connected");

});


router.post('/search', (req, res) => {
    res.send("route to searching for a recipe is connected");

});


module.exports = router;
