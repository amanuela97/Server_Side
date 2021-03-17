'use strict';
// catController
const {getAllCats,getCat,addCat,updateCat,deleteCat} = require('../models/catModel');

const cat_list_get = async (req, res) => {
  const cats = await getAllCats();
  await res.json(cats);
};

const cat_get =  async (req, res) => {
  let cat = await getCat(req.params.id);
  await res.json(cat);
};

const cat_create_post = async (req, res) => {
  const params = [
    req.body.name,
    req.body.age,
    req.body.weight,
    req.body.owner,
    req.file.filename,
];
  const response =  await addCat(params);
  await res.json(response);
};

const cat_update_put = async (req, res) => {
  const params = [
      req.body.name,
      req.body.age,
      req.body.weight,
      req.body.owner,
      req.body.id,
  ];
  const user = await updateCat(params);
  await res.json(user);
};

const cat_delete = async (req, res) => {
  const params = [req.params.id];
  const cat = await deleteCat(params);
  await res.json(cat);
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post,
  cat_update_put,
  cat_delete
};
