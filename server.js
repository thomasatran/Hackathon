const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

var {mongoose} = require('./db/mongoose');
const recipe = require('./routes/recipe.routes');
const grocery = require('./routes/grocery.routes');


app.use('/recipe', recipe);
app.use('/grocery', grocery);

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
});


module.exports = app;
