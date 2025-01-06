const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router/router')
const { swaggerUi, swaggerSpec } = require('./src/swagger/swager');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', router);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});