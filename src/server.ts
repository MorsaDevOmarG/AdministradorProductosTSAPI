import express from 'express';

const server = express();

// Routing - req: es lo que recibe el servidor o lo que tu estas enviando, res: es lo que el servidor responde
server.get('/', (req, res) => {
  res.send('Hello, World!');
  res.json('Hello, World!');
});

export default server;