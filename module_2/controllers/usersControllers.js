import {
  create,
  findById,
  findAll,
  update,
  deleteUserById,
} from '../services/userService.js';

export const createUser = async (req, res) => {
  const result = await create(req.body);
  if (result != null) {
    res.send(result);
  } else {
    res.send(JSON.stringify('User was not created.'));
  }
};

export const getUserById = async (req, res) => {
  const user = await findById(req.params.userId);
  if (user != null) {
    res.send(user);
  } else {
    res.send(
      JSON.stringify(`User with id: ${req.params.userId} was not found.`),
    );
  }
};

export const getUsers = async (req, res) => {
  const users = await findAll(req.query.loginSubstring, req.query.limit);
  if (users != null) {
    res.send(users);
  } else {
    res.send(JSON.stringify('No users found'));
  }
};

export const updateUser = async (req, res) => {
  const result = await update(req.params.userId, req.body);
  if (result == 1) {
    res.send(JSON.stringify('User was updated'));
  } else {
    res.send(JSON.stringify('Something went wrong'));
  }
};

export const deleteUser = async (req, res) => {
  const result = await deleteUserById(req.params.userId);
  if (result == 1) {
    res.send(JSON.stringify('User was deleted'));
  } else {
    res.send(JSON.stringify('Something went wrong'));
  }
};
