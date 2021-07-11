import {
  create,
  findById,
  findAll,
  update,
  deleteUserById,
} from '../services/userService.js';

export const createUser = async (req, res) => {
  const result = await create(req.body);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send('User was not created');
  }
};

export const getUserById = async (req, res) => {
  const user = await findById(req.params.userId);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send(`User with id: ${req.params.userId} was not found`);
  }
};

export const getUsers = async (req, res) => {
  const users = await findAll(req.query.loginSubstring, req.query.limit);
  if (users) {
    res.send(users);
  } else {
    res.status(404).send('User was not created');
  }
};

export const updateUser = async (req, res) => {
  const result = await update(req.params.userId, req.body);
  if (result) {
    res.send(JSON.stringify('User was updated'));
  } else {
    res.status(404).send('Something went wrong');
  }
};

export const deleteUser = async (req, res) => {
  const result = await deleteUserById(req.params.userId);
  if (result) {
    res.send(JSON.stringify('User was deleted'));
  } else {
    res.status(404).send('Something went wrong');
  }
};
