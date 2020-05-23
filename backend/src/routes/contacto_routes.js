const express = require("express");
const cnn = require("../connection");
const router = express.Router();

//TRAER MENSAJES DE CONTACTO GENERAL

router.get("/general", (req, res) => {
  let sql = "SELECT *, DATE_FORMAT(cg_fecha,'%d/%m/%Y') AS niceDate FROM contacto_general";

  cnn.query(sql, (err, result, fields) => {
    res.json(result);
  });
});

//TRAER MENSAJES DE CONTACTO EMPRESARIAL

router.get("/empresarial", (req, res) => {
  let sql = "SELECT *, DATE_FORMAT(ce_fecha,'%d/%m/%Y') AS niceDate FROM contacto_empresarial";

  cnn.query(sql, (err, result, fields) => {
    res.json(result);
  });
});

//AÑADIR MENSAJES DE CONTACTO GENERAL

router.post("/general", (req, res) => {
  let sqlInsert =
    "INSERT INTO contacto_general (cg_nombre, cg_email, cg_telefono, cg_comentario, cg_fecha) VALUES (?,?,?,?,?)";

  values = [
    req.body.nombre,
    req.body.email,
    req.body.telefono,
    req.body.comentario,
    req.body.fecha
  ];

  cnn.query(sqlInsert, values, (err, result, fields) => {
    if (err) {
      console.log(err);
    }
    res.send({
      status: "ok",
      message:
        "Mensaje enviado correctamente, nos pondremos en contacto a la brevedad",
    });
  });
});

//AÑADIR MENSAJES DE CONTACTO EMPRESARIAL

router.post("/empresarial", (req, res) => {
    let sqlInsert =
      "INSERT INTO contacto_empresarial (ce_nombre, ce_email, ce_telefono, ce_empresa, ce_barrio, ce_direccion, ce_descripcion, ce_fecha) VALUES (?,?,?,?,?,?,?,?)";
  
    values = [
      req.body.nombre,
      req.body.email,
      req.body.telefono,
      req.body.empresa,
      req.body.barrio,
      req.body.direccion,
      req.body.descripcion,
      req.body.fecha
    ];
  
    cnn.query(sqlInsert, values, (err, result, fields) => {
      if (err) {
        console.log(err);
      }
      res.send({
        status: "ok",
        message:
          "Mensaje enviado correctamente, nos pondremos en contacto a la brevedad",
      });
    });
  });

module.exports = router;
