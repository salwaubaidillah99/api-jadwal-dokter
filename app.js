const express = require('express');
const bodyParser = require('body-parser');
const jadwalDokterRouter = require('./src/router/jadwalDokterRouter');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', jadwalDokterRouter);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});