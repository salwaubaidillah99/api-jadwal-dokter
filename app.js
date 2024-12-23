const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router/router')

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', router);
app.use('/api', router);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});