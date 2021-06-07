import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/usersControllers.js';
import creationValidator from '../middleware/creationValidator.js';
import updateValidator from '../middleware/updateValidator.js';
import express from 'express'

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:userId', getUserById);

router.post('/users', creationValidator, createUser);

router.put('/users/:userId', updateValidator, updateUser);

router.delete('/users/:userId', deleteUser);

export default router;
