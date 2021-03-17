'use strict';
// userController
const userModel = require('../models/userModel');
const {getAllUsers,getUser,addUser} = userModel;

const user_list_get = async (req, res) => {
  const users = await getAllUsers();
  res.json(users.filter(user => {
    delete user.password;
    return user;
  }));
};

const user_get = async (req, res) => {
  const user = await getUser(req.params.id);
  res.json(user.filter(property => {
    delete property.password;
    return property;
  }));
};

const user_create_post = async (req, res) => {
  const response =  await addUser(req.body);
  res.json(response);
};

module.exports = {
  user_list_get,
  user_get,
  user_create_post
};
