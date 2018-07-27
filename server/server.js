const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4200;
const app = express();

var {mongoose} = require('./db/mongoose');
const recipe = require('./routes/recipe.routes');
const grocery = require('./routes/grocery.routes');
const user = require('./routes/user.routes');


app.use('/recipe', recipe);
app.use('/grocery', grocery);
app.use('/user', user);

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
