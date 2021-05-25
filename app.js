const express = require('express');
const hbs = require('hbs');

const app = express();

// Setup view engine
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

// App routes
const routes = require('./config/routes.config');
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port ${port}`));
