const express = require("express");
const router = express.Router();
const cnn = require("../connection");

router.get("/:user", (req, res) => {
  let sql = `SELECT publicaciones.pub_id AS id, pub_titulo AS nombre, pub_precio AS precio, pub_imagen AS imagen
    FROM publicaciones, favoritos 
    WHERE favoritos.user_id = ${req.params.user}
    AND publicaciones.pub_id = favoritos.pub_id`;

  let values = [req.params.user];

  cnn.query(sql, values, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

router.post("/", (req, res) => {
  let sqlInsert = `INSERT INTO favoritos VALUES (?, ?)`;

  let values = [req.body.userId, req.body.pubId];

  cnn.query(sqlInsert, values, (err, result, fields) => {
    if (err) {
      res.json({
        status: "error",
        message: "Error al agregar a favorito",
      });
    } else {
      res.json({
        status: "ok",
        message: "Agregado a favoritos",
      });
    }
  });
});

router.delete("/", (req, res) => {
  let sqlDelete = `DELETE FROM favoritos WHERE user_id = ? AND pub_id = ?`;

  let values = [req.body.userId, req.body.pubId];

  cnn.query(sqlDelete, values, (err, result, fields) => {
    if (err) {
      res.json({
        status: "error",
        message: "Error al quitar el favorito",
      });
    } else {
      res.json({
        status: "ok",
        message: "Favorito eliminado",
      });
    }
  });
});