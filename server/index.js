const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', () => res.send('Heyooooo'));

app.listen(port, () => {
  console.log(`Flower shop is listening on port ${port}`);
});
