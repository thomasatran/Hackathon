const express = require('express');
const bodyParser = require('body-parser');

let recipe = require('./routes/recipe.routes');
let user = require('./routes/user.routes');
const port = process.env.PORT || 4200;


const app = express();
app.use(function (req,res,next) {
    res.setHeader("Access-Control-Allow-Origin",  "*");
    res.setHeader('Access-Control-Allow-Methods', "PUT, PATCH, GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use('/recipe', recipe);
app.use('/user', user);
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
});