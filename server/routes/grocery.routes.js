const express = require('express');
const router = express.Router();


router.post('/create', (req, res) => {
    res.send("route to create a grocery list is connected");

});



module.exports = router;
