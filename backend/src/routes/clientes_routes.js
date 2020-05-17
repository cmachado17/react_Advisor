const express = require("express");
const cnn = require("../connection");

const router = express.Router();

router.get("/", (req, res) => {
    cnn.query("SELECT * FROM clientes", function(err, result, fields){
        res.json(result);
    })
});

router.get("/", (req, res) => {
  cnn.query(
    "SELECT * FROM clientes INNER JOIN tags_zona ON clientes_tag_zona_id = tags_zona_id",
    (err, result, fields) => {
      res.json(result);
    }
  );
});

router.get('/searchRubro/:rubro', (req, res) => {
  cnn.query(
    `SELECT * FROM clientes INNER JOIN tags_rubros ON clientes_tag_rubro_id = tags_rubro_id WHERE clientes_tag_rubro_id=${req.params.rubro}`
  , (err, result, fields) => {
    res.json(result);
  })
})



router.get("/:cliente", (req, res) => {
  cnn.query(
    `SELECT * FROM clientes WHERE clientes_id = ${req.params.cliente}`,
    (err, result, fields) => {
      res.json(result);
    }
  );
});

router.get("/:barrio/:rubro", (req, res) => {
  let sql = `SELECT * FROM clientes WHERE clientes_tag_zona_id = ${req.params.barrio} AND clientes_tag_rubro_id = ${req.params.rubro}`;

  cnn.query(sql, (err, result, fields) => {
    res.json(result);
  });
});

//***********************15/5 BUSCADOR ***************************/

router.get("/search/buscador/:terminoBuscado", (req, res) => {
  let sqlSearch = `SELECT * FROM clientes WHERE cliente_nombre LIKE ?`;

  let values = [`%${req.params.terminoBuscado}%`];

  cnn.query(sqlSearch, values, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
