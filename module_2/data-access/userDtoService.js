import Sequelize from 'sequelize';
import User from '../models/usersData.js';

export const createAsync = async (userData) => {
  const result = await User.create(userData);
  return result;
};

export const findByIdAsync = async (userId) => {
  const result = await User.findByPk(userId);
  return result;
};

export const findAllAsync = async (loginSubstring, limit = 10) => {
  const whereCondition = loginSubstring
    ? { login: { [Sequelize.Op.like]: `%${loginSubstring}%` } }
    : { login: { [Sequelize.Op.like]: `%@%` } };

  const users = await User.findAll({
    limit: parseInt(limit, 10),
    where: whereCondition,
    order: [['login', 'ASC']],
  });
  return users;
};

export const updateAsync = async (userId, userData) => {
  const result = await User.update(
    { login: userData.login, age: userData.age },
    {
      where: {
        id: userId,
      },
    },
  );
  return result;
};

export const deleteAsync = async (userId) => {
  const result = await User.update(
    { isDeleted: true },
    {
      where: {
        id: userId,
      },
    },
  );
  return result;
};
