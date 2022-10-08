const express = require("express");
const bodyParser = require("body-parser");
const comments = require('./routes/comments')
const contacts = require('./routes/contacts')
const products = require('./routes/products')
const vehicles = require('./routes/vehicles')
let counter = 0
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(comments)
app.use(contacts)
app.use(products)
app.use(vehicles)


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
