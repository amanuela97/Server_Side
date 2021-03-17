'use strict';
// catRoute
const express = require('express');
const {cat_list_get, cat_get} = require('../controllers/catController');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename:  (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage });

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/',upload.single('cat'), (req, res) => {
  res.send('From this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can modify cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});

module.exports = router;
