import express from 'express';
import { UserController } from './controllers/user-controller';

require("dotenv").config({
  path: ".env.local",
}); 

const app = express();
const port = process.env.PORT;

const userController = new UserController();


app.get("/", userController.getMoment.bind(userController));

app.get("/test", (req, res) => {
  res.send("Hola mundo")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
