const express = require('express');
const router = express.Router();
const {User} = require('./../models/user');

router.post('/create', async (req, res) => {

    let value = await User.create({
        name: "Roy",
        password: "abc123",
        favoriteRecipes: ["Chicken", "Chicken Noodle Soup"],
        groceryList: ["Chicken", "Broth"]
   });
    res.send("route to create a user is connected");
});



module.exports = router;
