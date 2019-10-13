import React, { Component } from 'react';
import { createUser, rewriteUser } from 'source/index';
import { showError } from 'utils/index';

// const Inputs = ({ name, secondName, email }) => (
class Inputs extends Component {
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

  changeValue = field => ({ target }) => {
    this.setState({ [field]: target.value });
  };
  onSubmit(e) {
    e.preventDefault();

    rewriteUser(this.props.id, this.state)
      .then(() => {
        this.props.updateUsersList();
      })
      .catch(showError);

    this.props.setOpen(false);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
            <input type="text" onChange={this.changeValue('firstName')} placeholder={this.props.name} /><br/>
            <input type="text" onChange={this.changeValue('secondName')} placeholder={this.props.secondName} /><br/>
            <input type="email" onChange={this.changeValue('email')} placeholder={this.props.email}/><br/>
          <button>Сохранить</button>
        </form>
      </>
    );
  }
}

export default Inputs;
