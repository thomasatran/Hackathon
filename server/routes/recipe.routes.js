const express = require('express');
const router = express.Router();

const {Recipe} = require('./../models/recipe');


//use this in python getmylist
// let body = "recipes": [{
// 		"ingredients": [
// 		{
//             "name": "Beef Filet",
//             "quantity": 16,
//             "unit": "ounce"
//         }, {
//             "name": "Potatoes",
//             "quantity": 16,
//             "unit": "ounce"
//         }
//         ]
//
// 	}]
router.post('/create', async(req, res) => {

     let value = await Recipe.create({
        recipeID: 6,
        name: "Salad with Croutons",
        categories:[
            'Thai',
            'Korean'
        ],
        ingredients: [{
            "name": "chicken",
            "quantity": 8,
            "unit": "ounce"
        }, {
            "name": "bread",
            "quantity": 8,
            "unit": "pieces"
        }],
        ingredientStrings:["salad", "bread",'Chicken'],
        cookTime: 10,
        totalClicksPerRecipe: 25,
        instructions: "Heat up a pan on medium, place Sausage in pan for 5 minutes, meanwhile toasting the bun. After 5 minutes, assemble sausage and bun on a plate to eat"
    });

    console.log(""+ value);

    res.send("route to create a recipe is connected");

});


router.post('/search', async (req, res) => {
    let num = parseInt(req.body.CookTime);
    console.log(req.body.Ingredients);
    // let value = await Recipe.find( {ingredientStrings: { $elemMatch: req.body.results}});
    let value = await Recipe.find( { ingredientStrings:  { $all:  req.body.Ingredients}});
    console.log(value);
     // let value2 = await Array.from(value).find( {ingredients: { $elemMatch: { "name": req.body.results[1]}}});;

    //let value2 = await value.find({ingredients: { $elemMatch: { "name": "bread"}}});
    // res.send("route to searching for a recipe is connected and here is what we have: "  + JSON.stringify(value, null, 2));
    res.send('done');

});

router.post('/looseSearch', async (req, res) => {

    // let value = await Recipe.find( {ingredientStrings: { $elemMatch: req.body.results}});
    let value = await Recipe.find( {ingredientStrings:  { $in:  req.body.results}});
    
     // let value2 = await Array.from(value).find( {ingredients: { $elemMatch: { "name": req.body.results[1]}}});;

    //let value2 = await value.find({ingredients: { $elemMatch: { "name": "bread"}}});
    // res.send("route to searching for a recipe is connected and here is what we have: "  + JSON.stringify(value, null, 2));
    res.send(value);

});


module.exports = router;
