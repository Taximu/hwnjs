import pkg from 'sequelize';
const { Sequelize, DataTypes } = pkg;

const User = Sequelize.define('User', {
  ID: {
    type: DataTypes.UUIDV4,
    allowNull: false,
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
    type: DataTypes.BOOLEAN,
  },
});

export default User;
