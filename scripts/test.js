const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*', methods: 'GET' }));

app.use((req, res, next) => {
  const host = req.headers.origin || req.headers.host || req.ip;
  console.log(`${req.method} ${req.hostname}${req.originalUrl} from ${host} (ip: ${req.ip}, ips: [${req.ips}])`);
  next();
});
app.use('/', express.static('./build'));

console.log('Serving on 0.0.0.0:6262!');
app.listen(6262, '0.0.0.0');
