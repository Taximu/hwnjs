import usersModel from '../models/usersData.js';

export const create = (user) => {
  usersModel.push(user);
}

export const findById = (id) => {
  const user = usersModel.find(element => element.id === id);
  return user;
}

export const findAll = (loginSubstring, limit) => {
  const array = usersModel.filter(elem => (typeof elem.login === 'string' && elem.login.indexOf(loginSubstring) > -1));
  return array.slice(0, limit).sort((o1,o2) => o1.login.localeCompare(o2.login));
}

export const update = (id, user) => {
  const existingUser = findById(id);
  existingUser.login = user.login;
  existingUser.age = user.age;
}

export const deleteUserById = (id) => {
  const user = findById(id);
  user.isDeleted = 'true';
}
