// api.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/manhwas', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM manhwas');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching manhwas' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});