import Sequelize from 'sequelize';
import user from '../models/usersData.js';
import dotEnv from 'dotenv';

dotEnv.config();
export const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.DB_HOST}`,
    dialect: `${process.env.DB_DIALECT}`,
  },
);

const Op = Sequelize.Op;

export const createAsync = async (userData) => {
  const result = await user.create(userData);
};

export const findByIdAsync = async (userId) => {
  const result = await user.findByPk(userId);
  console.log(JSON.stringify(result, null, 2));
  return JSON.stringify(result, null, 2);
};

export const findAllAsync = async (loginSubstring, limit) => {
  const users = await user.findAll({
    limit: parseInt(limit),
    where: {
      login: {
        [Op.like]: `%${loginSubstring}%`,
      },
    },
    order: [['login', 'ASC']],
  });
  return JSON.stringify(users, null, 2);
};
