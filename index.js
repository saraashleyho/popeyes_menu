const PORT = process.env.PORT || 3000;

const express = require('express');
const pg = require('pg');

const app = express();
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`
  CREATE TABLE IF NOT EXISTS clicks(
    id SERIAL PRIMARY KEY,
    pageX int NOT NULL,
    pageY int NOT NULL,
    findFirstDataId varchar(128) NOT NULL,
    theItemThatGotClicked varchar(128) NOT NULL,
    howLongBeforetheClick int NOT NULL,
    userid varchar NOT NULL
  );    
`);


app.use(express.static('public'));
app.use(express.json());


app.post('/clicks', async function(request, response) {
  const { pageX, pageY, findFirstDataId, theItemThatGotClicked, howLongBeforetheClick, userId  } = request.body;
  console.log(request.body)

  const result = await db.query(
    `INSERT INTO clicks (pageX, pageY, findFirstDataId, theItemThatGotClicked, howLongBeforetheClick, userId)  VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [pageX, pageY, findFirstDataId, theItemThatGotClicked, howLongBeforetheClick, userId ]
  );
  response.json(result.rows[0]);
}
);



app.listen(PORT, () =>
  console.log(`Server is up and running at port ${PORT} 🚀`)
);
