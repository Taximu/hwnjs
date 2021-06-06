import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/users.controllers.js';
import creationValidator from '../services/creationValidator.js';
import updateValidator from '../services/updateValidator.js';

export default (app) => {
  // Create a new user
  app.post('/users', creationValidator, createUser);

  // Get a user by Id
  app.get('/users/:userId', getUserById);

  // Get Users
  app.get('/users', getUsers);

  // Update a user by Id
  app.put('/users/:userId', updateValidator, updateUser);

  // Delete a user by Id
  app.delete('/users/:userId', deleteUser);
};
