const express = require("express");
// const recipe = require('./Recipe');
const router = require('./router/index');
const bodyParser =require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json())
app.use(router)
// app.use('/recipe', recipe);
// app.use(router)
app.listen(3000, () => {
  console.log("Running on port 3000");
});