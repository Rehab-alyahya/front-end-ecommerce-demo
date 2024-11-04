import axios from 'axios';

const baseURL = 'http://localhost:5021/api/products';

// baseURL?pageNumber=1&pageSize=10&search=lala&sortOrder=name_asc

export const getAllProducts = async (
  pageNumber = 1,
  pageSize = 5,
  searchValue = '',
  sortOrder = 'name_asc'
) => {
  const response = await axios.get(
    `${baseURL}?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${searchValue}&sortOrder=${sortOrder}`
  );
  console.log(response);
  return response.data;
};

export const getProductById = async (id) => {
  console.log(`${baseURL}/${id}`);
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};
