import axios from 'axios';

const baseURL = 'http://localhost:5021/api/users';
const authURL = 'http://localhost:5021/api/auth';

export const createUser = async (userData) => {
  const response = await axios.post(`${baseURL}/`, userData);
  return response.data;
};

export const getAllUsers = async (
  pageNumber = 1,
  pageSize = 5,
  searchValue = '',
  sortOrder = 'name_asc'
) => {
  const token = localStorage.getItem('token');
  const params = new URLSearchParams();

  params.append('pageNumber', pageNumber);
  params.append('pageSize', pageSize);

  if (searchValue) {
    params.append('search', searchValue);
  }

  if (sortOrder) {
    params.append('sortOrder', sortOrder);
  }

  const response = await axios.get(`${baseURL}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getUserById = async (id) => {
  console.log('id: ' + id);
  const token = localStorage.getItem('token');
  const response = await axios.get(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteUser = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = async (id, userData) => {
  console.log(id);
  console.log(userData);
  const token = localStorage.getItem('token');
  const response = await axios.put(`${baseURL}/${id}`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${authURL}/signin`, credentials);
  return response.data;
};
