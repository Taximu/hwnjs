import sortArray from 'sort-array';
import usersModel from '../models/users.data.js';

function create(user) {
  usersModel.push(user);
  console.log(usersModel);
}

function findUserInCollection(id) {
  for (let index = 0; index < usersModel.length; index += 1) {
    const user = usersModel[index];
    if (user.id === id) {
      return user;
    }
  }
  return null;
}

function findById(id) {
  const user = findUserInCollection(id);
  return user;
}

function findAll(loginSubstring, limit) {
  const array = [];
  let arrayLength = limit;
  if (arrayLength > usersModel.length) {
    arrayLength = usersModel.length;
  }
  for (let index = 0; index < limit; index += 1) {
    const elem = usersModel[index].login;
    if (typeof elem === 'string' && elem.indexOf(loginSubstring) > -1) {
      array.push(usersModel[index]);
    }
  }
  if (array.length > 0) {
    return sortArray(array, {
      by: 'login',
      order: 'asc',
    });
  }
  return array;
}

function update(id, user) {
  const existingUser = findById(id);
  existingUser.login = user.login;
  existingUser.age = user.age;
}

function deleteUserById(id) {
  const user = findUserInCollection(id);
  console.log(user);
  user.isDeleted = true;
  console.log(user);
}

export {
  create,
  findUserInCollection,
  findById,
  findAll,
  update,
  deleteUserById,
};
