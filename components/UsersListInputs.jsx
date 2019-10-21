import React from 'react';
import { rewriteUser } from 'source/index';
import { showError } from 'utils/index';
import { useState } from 'react';

const UsersListInputs = props => {
  const { users } = props;
  const { setOpen } = props;
  const [user, setUsers] = useState(users);
  const changeValue = field => ({ target }) => {
    setUsers({ [field]: target.value });
  };
  const onSubmit = e => {
    e.preventDefault();

    const { id } = props.item;
    rewriteUser(id, user)
      .then(() => {
        props.updateUsersList();
      })
      .catch(showError);

    setOpen(false);
  };

  const { firstName, secondName, email } = props.item;
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={changeValue('firstName')}
          placeholder={firstName}
        />
        <br />
        <input
          type="text"
          onChange={changeValue('secondName')}
          placeholder={secondName}
        />
        <br />
        <input
          type="email"
          onChange={changeValue('email')}
          placeholder={email}
        />
        <br />
        <button>Сохранить</button>
      </form>
    </>
  );
};

export default UsersListInputs;
