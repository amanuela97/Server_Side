'use strict';
// catController
const catModel = require('../models/catModel');

const {cats} = catModel;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get =  (req, res) => {
  let cat = cats.filter(cat => cat.id == req.params.id);
  res.json(cat);
};

module.exports = {
  cat_list_get,
  cat_get
};
