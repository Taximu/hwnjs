import {
  create,
  findById,
  findAll,
  update,
  deleteUserById,
} from '../services/userService.js';

export const createUser = (req, res) => {
  create(req.body);
  res.send('User was created');
};

export const getUserById = (req, res) => {
  const user = findById(req.params.userId);
  res.send(user);
};

export const getUsers = (req, res) => {
  const users = findAll(req.query.loginSubstring, req.query.limit);
  res.send(users);
};

export const updateUser = (req, res) => {
  update(req.params.userId, req.body);
  res.send('User updated successfully!');
};

export const deleteUser = (req, res) => {
  deleteUserById(req.params.userId);
  res.send('User was deleted');
};
