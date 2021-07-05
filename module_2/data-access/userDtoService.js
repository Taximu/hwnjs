import Sequelize from 'sequelize';
import User from '../models/usersData.js';
import dotEnv from 'dotenv';

const findAllAsync = async () => {
  dotEnv.config();
  const sequelize = new Sequelize(`${process.env.DB_NAME}`);

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const users = await User.findAll();
  console.log('All users:', JSON.stringify(users, null, 2));
};

export default findAllAsync;
