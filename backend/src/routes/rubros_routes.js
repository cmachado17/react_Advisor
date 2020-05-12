const express = require('express');
const cnn = require('../connection');

const router = express.Router();

router.get('/', (req, res) =>{
    cnn.query('SELECT * FROM tags_rubros', (err, result, fields) =>{
        res.json(result);
    });
} )

module.exports = router;