'use strict';
// catRoute
const express = require('express');
const {
  cat_list_get,
  cat_get,
  cat_create_post
  ,cat_update_put
  ,cat_delete
} = require('../controllers/catController');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename:  (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage });

router.route('/').
get(cat_list_get).
post(upload.single('cat'),cat_create_post)
.put(cat_update_put);


router.route('/:id')
.get(cat_get)
.delete(cat_delete);


module.exports = router;
