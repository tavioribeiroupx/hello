const express = require('express');
const app = express();
const port = 3050;

app.get('/', (req, res) => {
  res.send('Bom dia, tudo bem, Usuário? Estou aqui para te ajudar!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});