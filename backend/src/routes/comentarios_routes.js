const express = require("express");
const cnn = require("../connection");
const path = require("path");
const fs = require("fs");

const router = express.Router();

//Para mostrar los comentarios de todos los clientes
router.get("/", (req, res) => {
  cnn.query(
    "SELECT * FROM opiniones INNER JOIN clientes ON opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id",
    (err, result, fields) => {
      res.json(result);
    }
  );
});

//Para mostrar los comentarios de un solo cliente
router.get("/:clienteid", (req, res) => {
  cnn.query(
    `SELECT *, DATE_FORMAT(opi_fecha,'%d/%m/%Y') AS niceDate FROM opiniones INNER JOIN clientes ON opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id WHERE opi_cliente_id = ${req.params.clienteid}`,
    (err, result, fields) => {
      res.json(result);
    }
  );
});

//Para mostrar un comentario especifico

router.get("/admin/comentario/:id", (req, res) => {
  cnn.query(
    `SELECT * FROM OPINIONES WHERE opi_id = ${req.params.id}`,
    (err, result, fields) => {
      res.json(result);
    }
  );
});

//Para mostrar los comentarios de un solo usuario
router.get("/user/:comentariosUsuarios", (req, res) => {
  cnn.query(
    `SELECT *, DATE_FORMAT(opi_fecha,'%d/%m/%Y') AS niceDate FROM opiniones INNER JOIN clientes on opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id WHERE opi_user_id = ${req.params.comentariosUsuarios} `,
    (err, result, fields) => {
      res.json(result);
    }
  );
});

//Para cargar comentarios a la BD
router.post("/", (req, res) => {
  console.log(req.body);

  console.log(req.files.fotoComentario.name);

  let imageFileName = "";

  if (req.files) {
    let fotoComentario = req.files.fotoComentario;

    //Nombre unico a cada uno de los archivos
    imageFileName = Date.now() + path.extname(fotoComentario.name);

    fotoComentario.mv("./public/images/" + imageFileName, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("No hay archivo");
  }

  let sqlInsert = `INSERT INTO opiniones(opi_texto, opi_puntaje_id, opi_user_id, opi_foto, opi_cliente_id, opi_fecha) VALUES('${req.body.reseniaComentario}', ${req.body.puntajeComentario}, ${req.body.userNameComentario}, 'http://localhost:5000/images/${imageFileName}', ${req.body.idDelCliente}, '${req.body.fechaComentario}')`;

  cnn.query(sqlInsert, (err, result, fields) => {
    if (err) {
      console.log("Error");
    }
    res.send({
      status: "ok",
      message: "Comentario añadido correctamente",
    });
  });
});

// ELIMINAR COMENTARIO

router.delete("/miusuario/:idComentario", (req, res) => {
  let sqlDelete = `DELETE FROM opiniones
  WHERE opi_id = ?`;

  values = [req.params.idComentario];

  cnn.query(sqlDelete, values, (err, result, fields) => {
    if (err) {
      res.json({
        status: "error",
        message: "Error al eliminar la publicación",
      });
    } else {
      res.json({
        status: "ok",
        message: "Comentario eliminado correctamente",
      });
    }
  });
});

module.exports = router;
