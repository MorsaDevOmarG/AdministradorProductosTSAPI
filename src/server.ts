import express from 'express';

const server = express();

// Routing - req: es lo que recibe el servidor o lo que tu estas enviando, res: es lo que el servidor responde
server.get('/', (req, res) => {
  // res.send('Hello, World!');
  // res.json('Hello, World!');

  res.json('Desde GET');
});

server.post("/", (req, res) => {
  res.json("Desde POST");
});

server.put("/", (req, res) => {
  res.json("Desde PUT");
});

server.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

server.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default server;