const PORT = process.env.PORT || 3000;

const express = require('express');
const pg = require('pg');

const app = express();

app.use(express.static('public'));
app.use(express.json());



app.listen(PORT, () =>
  console.log(`Server is up and running at port ${PORT} 🚀`)
);
