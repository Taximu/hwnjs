import {
  createAsync,
  findByIdAsync,
  findAllAsync,
} from '../data-access/userDtoService.js';

export const create = async (userData) => {
  const result = await createAsync(userData);
  console.log(result);
};

export const findById = async (id) => {
  const user = await findByIdAsync(id);
  return user;
};

export const findAll = async (loginSubstring, limit) => {
  const users = await findAllAsync(loginSubstring, limit);
  return users;
};

export const update = (id, user) => {
  const existingUser = findById(id);
  existingUser.login = user.login;
  existingUser.age = user.age;
};

export const deleteUserById = (id) => {
  const user = findById(id);
  user.isDeleted = 'true';
};
