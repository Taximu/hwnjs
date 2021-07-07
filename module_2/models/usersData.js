import DataTypes from 'sequelize';
import { sequelize } from '../data-access/userDtoService.js';

const user = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    login: {
      type: DataTypes.STRING(50),
    },
    password: {
      type: DataTypes.STRING(50),
    },
    age: {
      type: DataTypes.INTEGER,
    },
    isDeleted: {
      type: DataTypes.SMALLINT,
    },
  },
  {
    timestamps: false,
    tableName: 'tblUser',
    freezeTableName: false,
  },
);

export default user;
