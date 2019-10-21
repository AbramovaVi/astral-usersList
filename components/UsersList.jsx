import React from 'react';
import UsersListEdit from './UsersListEdit';

const UsersList = ({ data, deleteUser, updateUsersList }) => {
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
