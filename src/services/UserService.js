import axios from 'axios';

const baseURL = 'http://localhost:5021/api/users';

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
  const params = new URLSearchParams();

  params.append('pageNumber', pageNumber);
  params.append('pageSize', pageSize);

  if (searchValue) {
    params.append('search', searchValue);
  }

  if (sortOrder) {
    params.append('sortOrder', sortOrder);
  }

  const response = await axios.get(`${baseURL}?${params.toString()}`);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${baseURL}/${id}`, userData);
  return response.data;
};