import React, { useState } from 'react';
import UserListInputs from './UsersListInputs';

const UsersListEdit = ({ deleteUser, item, updateUsersList }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const edit = () => setOpenEdit(!openEdit);

  return (
    <>
      <button onClick={deleteUser(item.id)}>Удалить</button>
      <button onClick={edit}>{openEdit ? 'Отменить' : 'Изменить'}</button><br/>
      {openEdit && (
        <UserListInputs
          item={item}
          updateUsersList={updateUsersList}
          setOpen={setOpenEdit}
        />
      )}
    </>
  );
};

export default UsersListEdit;
