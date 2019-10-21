import React from 'react';
import UsersListEdit from './UsersListEdit';
import { rewriteUser } from 'source/index';

const UsersList = ({ data, deleteUser, updateUsersList }) => {
  const rewriteData = (id, data) => {
    rewriteUser(id, data).then(res => console.log(res));
  };

  return (
    <div className="UsersList">
      {data.length !== 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <p>{`First name: ${item.firstName}`}</p>
              <p>{`Second name: ${item.secondName}`}</p>
              <p>{`Email: ${item.email}`}</p>
              <UsersListEdit
                updateUsersList={updateUsersList}
                rewrite={rewriteData}
                deleteUser={deleteUser}
                item={item}
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
