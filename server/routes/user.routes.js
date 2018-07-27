const express = require('express');
const router = express.Router();
const {User} = require('./../models/user');
const fetch = require('node-fetch');

router.post('/getGroceryList', async (req, res) => {
    let value = await User.find( {name:  "Roy"});
    // let whatever = JSON.parse(value);
     // res.send(value[0]);
    let body = JSON.stringify(value[0]);
    let url = 'http:localhost:5000/getmylist';

    fetch('http://localhost:5000/getmylist', {
        method: 'POST',
        body:    body,
        headers: {         
            'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => res.send(json));

});

router.post('/create', async (req, res) => {

    let value = await User.create({
        name: "Roy",
        password: "abc123",
        favoriteRecipes: [{
        "_id" :"5b5acbbf9e633e436c611fb9",
        "ingredients" : [
        {
            "name" : "chicken",
            "quantity" : 8,
            "unit" : "ounce"
        },
        {
            "name" : "bread",
            "quantity" : 2,
            "unit" : "slices"
        }
    ],
    "ingredientStrings" : [
        "chicken",
        "bread"
    ],
    "recipeID" : "6",
    "name" : "chicken Sandwich",
    "cookTime" : 10,
    "totalClicksPerRecipe" : 25,
    "instructions" : "Heat up a pan on medium, place Sausage in pan for 5 minutes, meanwhile toasting the bun. After 5 minutes, assemble sausage and bun on a plate to eat"
},
{
    "_id" : "5b5acbd9587fda322441ed93",
    "ingredients" : [
        {
            "name" : "chicken",
            "quantity" : 8,
            "unit" : "ounce"
        },
        {
            "name" : "salad",
            "quantity" : 2,
            "unit" : "pieces"
        }
    ],
    "ingredientStrings" : [
        "chicken",
        "salad"
    ],
    "recipeID" : "6",
    "name" : "chicken Salad",
    "cookTime" : 10,
    "totalClicksPerRecipe" : 25,
    "instructions" : "Heat up a pan on medium, place Sausage in pan for 5 minutes, meanwhile toasting the bun. After 5 minutes, assemble sausage and bun on a plate to eat"
},
{
    "_id" :"5b5acc0ae82bb42f6803db3e",
    "ingredients" : [
        {
            "name" : "chicken",
            "quantity" : 8,
            "unit" : "ounce"
        },
        {
            "name" : "bread",
            "quantity" : 8,
            "unit" : "pieces"
        }
    ],
    "ingredientStrings" : [
        "salad",
        "bread"
    ],
    "recipeID" : "6",
    "name" : "Salad with Croutons",
    "cookTime" : 10,
    "totalClicksPerRecipe" : 25,
    "instructions" : "Heat up a pan on medium, place Sausage in pan for 5 minutes, meanwhile toasting the bun. After 5 minutes, assemble sausage and bun on a plate to eat",
    "__v" : 0
},
{
    "_id" : "5b5aed453b82663f74255689",
    "ingredients" : [
        {
            "name" : "Avocado",
            "quantity" : 8,
            "unit" : "ounce"
        },
        {
            "name" : "Bread",
            "quantity" : 2,
            "unit" : "pieces"
        }
    ],
    "ingredientStrings" : [
        "Avocado",
        "Bread"
    ],
    "categories" : [
        "American"
    ],
    "recipeID" : "6",
    "name" : "Avocado Toast",
    "cookTime" : 10,
    "totalClicksPerRecipe" : 25,
    "instructions" : "Heat up a pan on medium,place Sausage in pan for 5 minutes,toasting the bun,After 5 minutes, assemble sausage and bun on a plate to eat"
},{
    "_id" : "5b5aeee20b3df738c0197eb5",
    "ingredients" : [
        {
            "name" : "Pasta",
            "quantity" : 8,
            "unit" : "ounce"
        },
        {
            "name" : "Tomatoes",
            "quantity" : 10,
            "unit" : "pieces"
        }
    ],
    "ingredientStrings" : [
        "Pasta",
        "Tomatoes"
    ],
    "categories" : [
        "Italian"
    ],
    "recipeID" : "6",
    "name" : "Spaghetti",
    "cookTime" : 10,
    "totalClicksPerRecipe" : 25,
    "instructions" : "Heat up a pan on medium,place Sausage in pan for 5 minutes,toasting the bun,After 5 minutes, assemble sausage and bun on a plate to eat"
}],
        groceryList: []
   });
    res.send("route to create a user is connected");
});



module.exports = router;
