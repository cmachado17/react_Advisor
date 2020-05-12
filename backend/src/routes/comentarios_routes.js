const express = require("express");
const cnn = require("../connection");

const router = express.Router();

router.get("/", (req, res) => {
  cnn.query(
    "SELECT * FROM opiniones INNER JOIN clientes ON opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id",
    (err, result, fields) => {
      res.json(result);
    }
  );
});

router.get("/:clienteid", (req, res) => {
  cnn.query(
    `SELECT * FROM opiniones INNER JOIN clientes ON opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id WHERE opi_cliente_id = ${req.params.clienteid}`,
    (err, result, fields) => {
      res.json(result);
    }
  );
});


router.get("/:comentariosUsuarios", (req, res) => {
  cnn.query(
    `SELECT * FROM opiniones INNER JOIN clientes on opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id WHERE opi_user_id = ${req.params.comentariosUsuarios} `,
    (err, result, fields) => {
      res.json(result);
    }
  );
});


module.exports = router;
