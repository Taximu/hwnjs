import DataTypes from 'sequelize';
import sequelize from '../services/util.js';

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
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING(50),
    },
    age: {
      type: DataTypes.INTEGER,
    },
    isDeleted: {
      type: DataTypes.SMALLINT,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    tableName: 'tblUser',
    freezeTableName: false,
  },
);

export default user;
