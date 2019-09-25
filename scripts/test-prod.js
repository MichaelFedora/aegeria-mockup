const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*', methods: 'GET' }));

app.use('/', express.static('./docs-prod'));

console.log('Serving on 0.0.0.0:6262!');
app.listen(6262, '0.0.0.0');
