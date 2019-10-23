import React from 'react';
import { rewriteUser } from 'source/index';
import { showError } from 'utils/index';
import { useState } from 'react';

const UsersListInputs = props => {
  const { item, setOpen } = props;
  const [user, setUsers] = useState(item);
  const changeValue = e => {
    const { name, value } = e.target;
    setUsers(prevState => ({ ...prevState, [name]: value }));
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
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100px', margin: 'auto'}}>
        <input
          type="text"
          onChange={changeValue}
          name="firstName"
          placeholder={firstName}
        />
        <input
          type="text"
          onChange={changeValue}
          placeholder={secondName}
          name="secondName"
        />
        <input
          type="email"
          onChange={changeValue}
          placeholder={email}
          name="email"
        />
        <button>Сохранить</button>
      </form>
    </>
  );
};

export default UsersListInputs;
