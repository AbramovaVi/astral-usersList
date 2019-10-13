import Axios from 'axios';

const getUsers = () => Axios.get('/users');
const createUser = user =>
  Axios.post('/user', {
    ...user,
    id: Math.floor(Math.random() * (100 - 3)) + 3
  });
const deleteUser = id => Axios.delete('/user', { params: { id } });

const rewriteUser = (id, data) => Axios.post('/rewrite', { params: {id, data }});

export { getUsers, createUser, deleteUser, rewriteUser };
