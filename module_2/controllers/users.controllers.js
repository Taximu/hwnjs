/* eslint-disable import/extensions */
import {
  create,
  findById,
  findAll,
  update,
  deleteUserById,
} from '../services/userService.js';

// Creates and Saves a new User
function createUser(req, res) {
  create(req.body);
  res.send('User was created');
}

// Find a single User with a UserId
function getUserById(req, res) {
  const user = findById(req.params.userId);
  res.send(user);
}

// Retrieve and return all Users from the memory
function getUsers(req, res) {
  const users = findAll(req.query.loginSubstring, req.query.limit);
  res.send(users);
}

// Update a User identified by the UserId in the request
function updateUser(req, res) {
  update(req.params.userId, req.body);
  res.send('User updated successfully!');
}

// Delete a User with the specified UserId in the request
function deleteUser(req, res) {
  deleteUserById(req.params.userId);
  res.send('User was deleted');
}

module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
};
