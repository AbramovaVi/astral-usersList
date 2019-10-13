import React from 'react';
import { useState } from 'react';
import Edit from './Edit';
import { rewriteUser } from 'source/index';

const UsersList = ({ data, deleteUser, updateUsersList }) => {

  const rewriteData = (id, data) => {
    rewriteUser(id, data).then(res => console.log(res));
  };

  return (
    <div>
      {data.length !== 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <p>{`Id: ${item.id}`}</p>
              <p>{`First name: ${item.firstName}`}</p>
              <p>{`Second name: ${item.secondName}`}</p>
              <p>{`Email: ${item.email}`}</p>
              <Edit
                updateUsersList={updateUsersList}
                rewrite={rewriteData}
                deleteUser={deleteUser}
                id={item.id}
                name={item.firstName}
                secondName={item.secondName}
                email={item.email}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h4>Нет данных</h4>
      )}
    </div>
  );
};

export default UsersList;
