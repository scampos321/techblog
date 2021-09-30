const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./controllers')
app.engine(".hbs", exphbs({ extname: ".hbs"}));
app.set("view engine", ".hbs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.listen(PORT, () => console.log("Now listening to ${PORT}"))