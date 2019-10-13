import React, { useState } from 'react';
import Inputs from './Inputs';
import { rewriteUser } from 'source/index';

const Edit = ({ deleteUser, id, name, secondName, email, rewrite, updateUsersList }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const edit = () => setOpenEdit(!openEdit);

  return (
    <>
      <button onClick={deleteUser(id)}>Удалить</button>
      <button onClick={edit}>Изменить</button>
      <br />
      {openEdit && (
        <Inputs
          name={name}
          secondName={secondName}
          email={email}
          id={id}
          updateUsersList={updateUsersList}
          rewrite={rewrite}
          setOpen={setOpenEdit}
        />
      )}
    </>
  );
};

export default Edit;
