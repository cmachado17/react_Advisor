const express = require("express");
const cnn = require("../connection");
const path = require("path");

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

router.post("/", (req, res) => {
  console.log(req.body);

  console.log(req.files.fotoComentario.name);

  let imageFileName = "";

  if (req.files) {
    let fotoComentario = req.files.fotoComentario;

    //Nombre unico a cada uno de los archivos
    imageFileName = Date.now() + path.extname(fotoComentario.name);

    fotoComentario.mv('./public/images/' + imageFileName, (err) =>{
      if (err){
        console.log(err);
      }
    })
  }else{
    console.log('No hay archivo');
  }

  res.send({ status: "testing..." });
});

module.exports = router;
