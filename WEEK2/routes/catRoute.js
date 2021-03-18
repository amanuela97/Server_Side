'use strict';
// catRoute
const express = require('express');
const {
  cat_list_get,
  cat_get,
  cat_create_post
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

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/', upload.single('cat'), cat_create_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can modify cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});


module.exports = router;
