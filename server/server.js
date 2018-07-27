const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4200;


const app = express();
const recipe = require('./routes/recipe.routes');
app.use(function (req,res,next) {
    res.setHeader("Access-Control-Allow-Origin",  "*");
    res.setHeader('Access-Control-Allow-Methods', "PUT, PATCH, GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use('/recipe', recipe);
app.listen(port, () => {
    console.log(`server is listening on ${port}`)
});