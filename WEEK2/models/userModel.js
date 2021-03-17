'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_user');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getUser = async (id) => {
  try{
    const [rows] = await promisePool.execute(`SELECT * FROM wop_user WHERE user_id = ${id}`);
    return rows;
  }catch(e){
    console.log('error', e.message);
  }
};

const addUser = async (body) => {
  try{
    await promisePool.execute(
      `INSERT INTO wop_user (name,email,password) VALUES ('${body.name}', '${body.email}', '${body.passwd}')`);
    return "successfully added user";
  }catch(e){
    console.log('error',e.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addUser
};

