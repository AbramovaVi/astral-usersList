import React, { Component } from 'react';

import { createUser } from 'source';
import { showError } from 'utils';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      secondName: '',
      email: ''
    };

    this.changeValue = this.changeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeValue = field => ({ target }) =>
    this.setState({ [field]: target.value });

  onSubmit(e) {
    e.preventDefault();

    const { updateUsersList } = this.props;

    createUser(this.state)
      .then(() => {
        updateUsersList();
      })
      .catch(showError);

    this.setState({ firstName: '', secondName: '', email: '' });
  }

  render() {
    const { changeValue } = this;
    const { firstName, secondName, email } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="Form">
        <label>
          Имя
          <input
            required
            type="text"
            onChange={changeValue('firstName')}
            value={firstName}
          />
        </label>
        <label>
          Фамилия
          <input
            required
            type="text"
            onChange={changeValue('secondName')}
            value={secondName}
          />
        </label>
        <label>
          Email
          <input type="email" onChange={changeValue('email')} value={email} />
        </label>
        <button>Сохранить</button>
      </form>
    );
  }
}

export default Form;
