import express from 'express';
import {Client} from 'pg';

require("dotenv").config({
  path: ".env.local",
});

const app = express();
const port = process.env.PORT;

app.get("/", async (req, res) => {
  
  const client = new Client({
    user: 'username',
    host: '127.0.0.1',
    database: 'test',
    password: 'password',
    port: 5433,
  })
  await client.connect()
  const resdb = await client.query('SELECT NOW()')
  await client.end()
  console.log(resdb.rows);

  res.send("Hello world! Este es de mi repos");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
