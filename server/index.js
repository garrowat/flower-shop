require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize, Inventory } = require('./models');

const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/inventory', (req, res) => {
  const data = req.body;
  res.status(201).send({data});
});

app.get('/inventory', (req, res) => res.send('Heyooooo'));

sequelize.sync({ force: true }).then(async () => {
  app.listen(port, () => {
    console.log(`Flower shop is running on port ${port}`);
  });
});