require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express().use('*', cors());
const { sequelize, models } = require('./models');
const seedData = require('./seed');

const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/inventory', async (req, res) => {
  const data = req.body;

  await models.Inventory.create(data)
    .catch((error) => {
      const message = `Error adding flower to inventory: ${error}`;
      res.status(400).send(message);
      throw Error(message);
    });

  res.status(201).send({data});
});

app.get('/inventory', async (req, res) => {
  const result = await models.Inventory.findAll()
    .catch((error) => {
      const message = `Error fetching flower inventory: ${error}`;
      res.status(400).json(message);
      throw Error(message);
    });

  res.status(200).send(result);
});

sequelize.sync({ force: true }).then(async () => {
  models.Inventory.bulkCreate(seedData);
  app.listen(port, () => {
    console.log(`Flower shop is running on port ${port}`);
  });
});
