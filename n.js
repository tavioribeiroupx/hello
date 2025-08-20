const express = require('express');
const app = express();
const port = 3050;

app.get('/', (req, res) => {
  res.send('Bom dia mundo, este é o meu primeiro servidor Express!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});