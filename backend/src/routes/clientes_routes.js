const express = require("express");
const cnn = require("../connection");

const router = express.Router();

// router.get("/", (req, res) => {
//     cnn.query("SELECT * FROM clientes", function(err, result, fields){
//         res.json(result);
//     })
// });

router.get('/', (req, res) => {
    cnn.query("SELECT * FROM clientes INNER JOIN tags_zona ON clientes_tag_zona_id = tags_zona_id", (err, result, fields) => {
        res.json(result);
    })
})

router.get('/:cliente', (req, res)=>{
    cnn.query(
        `SELECT * FROM clientes WHERE clientes_id = ${req.params.cliente}`, (err, result, fields) => {
            res.json(result);
        }
    )
})

router.get('/:barrio/:rubro', (req, res) => {

    let sql = `SELECT * FROM clientes WHERE clientes_tag_zona_id = ${req.params.barrio} AND clientes_tag_rubro_id = ${req.params.rubro}`;

    cnn.query(sql, (err, result, fields) => {
        res.json(result);
    })
})


module.exports = router;
