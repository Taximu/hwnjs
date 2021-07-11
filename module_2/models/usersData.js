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
      allowNull: false,
      validate: {
        is: ['^[a-zA-Z0-9]{16,30}$', 'i'],
      },
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
