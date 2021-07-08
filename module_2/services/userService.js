import {
  createAsync,
  findByIdAsync,
  findAllAsync,
  updateAsync,
  deleteAsync,
} from '../data-access/userDtoService.js';

export const create = async (userData) => {
  const result = await createAsync(userData);
  return result;
};

export const findById = async (id) => {
  const user = await findByIdAsync(id);
  return user;
};

export const findAll = async (loginSubstring, limit) => {
  const users = await findAllAsync(loginSubstring, limit);
  return users;
};

export const update = async (id, user) => {
  const result = await updateAsync(id, user);
  return result;
};

export const deleteUserById = async (id) => {
  const result = await deleteAsync(id);
  return result;
};
