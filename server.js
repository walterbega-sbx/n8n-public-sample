const express = require('express');
const routes = require('./src/index');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});