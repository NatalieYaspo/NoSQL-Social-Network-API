const express = require('express');
const db = require('./config/connection');
// Require model
const { Book } = require('./models'); //Change this name

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', async (req, res) => { //Change this route
  try {
    // Using model in route
    const result = await Book.find({}); //Change this route
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});