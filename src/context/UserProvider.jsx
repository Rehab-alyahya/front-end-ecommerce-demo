import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getAllUsers, deleteUser, updateUser } from '../services/UserService';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async (pageNumber = 1, pageSize = 10) => {
    setIsLoading(true);
    try {
      const response = await getAllUsers(pageNumber, pageSize);
      setUsers(response.data.items);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeUser = async (id) => {
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== id));
  };

  const modifyUser = async (id, userData) => {
    const updatedUser = await updateUser(id, userData);
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.userId === id ? updatedUser : user))
    );
  };

  return (
    <UserContext.Provider
      value={{ users, fetchUsers, removeUser, modifyUser, isLoading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
