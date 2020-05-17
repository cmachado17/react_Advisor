const express = require('express');
const cnn = require('../connection');
const router = express.Router();

router.get('/general', (req, res) => {
    let sql = 'SELECT * FROM contacto_general'

    cnn.query(sql, (err, result, fields) => {
        res.json(result);
    })
})

router.get('/empresarial', (req, res) => {
    let sql = 'SELECT * FROM contacto_empresarial'

    cnn.query(sql, (err, result, fields) => {
        res.json(result);
    })
})


module.exports = router;