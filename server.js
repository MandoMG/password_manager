const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const passwords = require('./server/routes/api/passwords');

// api routes
app.use('/api/passwords', passwords);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));