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

export const getUserById = async (req, res) => {
  const user = await findById(req.params.userId);
  res.send(user);
};

export const getUsers = async (req, res) => {
  const users = await findAll(req.query.loginSubstring, req.query.limit);
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
