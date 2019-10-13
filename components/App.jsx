import React, { Component } from 'react';

import Form from './Form';
import UsersList from './UsersList';

import { getUsers, deleteUser } from 'source';

import { showError } from 'utils';

class App extends Component {
  state = {
    users: []
  };

  updateUsersList = () => {
    getUsers()
      .then(({ data }) => this.setState({ users: data }))
      .catch(showError);
  };

  deleteUser = id => () => {
    deleteUser(id)
      .then(() => {
        this.updateUsersList();
      })
      .catch(showError);
  };

  componentDidMount() {
    getUsers()
      .then(({ data }) => this.setState({ users: data }))
      .catch(showError);
  }

  render() {
    const { updateUsersList, deleteUser } = this;
    const { users } = this.state;

    return (
      <div>
        <UsersList
          data={users}
          deleteUser={deleteUser}
          updateUsersList={updateUsersList}
        />
        <Form updateUsersList={updateUsersList} />
      </div>
    );
  }
}

export default App;
