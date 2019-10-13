const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');
let { users } = require('./data');
const { rewrite } = require('./utils/index');
// TODO users to data.js
// let users = [
//   {
//     //TODO id
//     firstName: 'Pavel',
//     secondName: 'Efimov',
//     email: 'test@gmail.com'
//   }
// ];

const app = express();

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/user', (req, res) => {
  users.push(req.body);

  res.sendStatus(200);
});

app.delete('/user', (req, res) => {
  // TODO make something;
  users = users.filter(user => user.id != req.query.id);
  res.sendStatus(200);
});

app.post('/rewrite', (req, res) => {
  // console.log(req.body);
  // console.log(req.query);

  const id = req.body.params.id;
  // const firstName = req.body.params.data.firstName;
  // const secondName = req.body.params.data.secondName;
  // const email = req.body.params.data.email;
  const data = req.body.params.data;

  const result = rewrite(users, id, data);

  res.send(result);
});

app.listen(5000, () => console.log('port 5000'));
