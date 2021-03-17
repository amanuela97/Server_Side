'use strict';
// userController
const userModel = require('../models/userModel');
const {users} = userModel;

const user_list_get = (req, res) => {
  res.json(users.filter(user => {
    delete user.password;
    return user;
  }));
};

const user_get =  (req, res) => {
  let user = users.filter(user => {
    delete user.password;
    if(user.id == req.params.id){
      return user;
    }
  });
  res.json(user);
};

module.exports = {
  user_list_get,
  user_get
};
