const express = require("express");
const cnn = require("../connection");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  cnn.query("SELECT * FROM clientes", function (err, result, fields) {
    res.json(result);
  });
});

router.get("/", (req, res) => {
  cnn.query(
    "SELECT * FROM clientes INNER JOIN tags_zona ON clientes_tag_zona_id = tags_zona_id",
    (err, result, fields) => {
      res.json(result);
    }
  );
});

router.get("/searchRubro/:rubro", (req, res) => {
  cnn.query(
    `SELECT * FROM clientes INNER JOIN tags_rubros ON clientes_tag_rubro_id = tags_rubro_id WHERE clientes_tag_rubro_id=${req.params.rubro}`,
    (err, result, fields) => {
      res.json(result);
    }
  );
});

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

//***********************BUSCADOR ***************************/

router.get("/search/buscador/:terminoBuscado", (req, res) => {
  let sqlSearch = `SELECT * FROM clientes WHERE cliente_nombre LIKE ?`;

  let values = [`%${req.params.terminoBuscado}%`];

  cnn.query(sqlSearch, values, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Agregar cliente

router.post("/", (req, res) => {
  console.log(req.body);

  console.log(req.files.logo);

  let imageFileName = "";

  if (req.files) {
    let logo = req.files.logo;

    //Nobre unico a cada archivo

    imageFileName = Date.now() + path.extname(logo.name);

    logo.mv("./public/images/" + imageFileName, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("No hay archivo");
  }

  let sqlInsert = `INSERT INTO clientes (cliente_nombre, clientes_descripcion, clientes_logo, clientes_tag_zona_id, clientes_tag_rubro_id, cliente_puntuacion, cliente_direccion, cliente_website, cliente_ubicacion) VALUES('${req.body.nombre}', '${req.body.descripcion}', 'http://localhost:5000/images/${imageFileName}', ${req.body.zona}, ${req.body.rubro}, '${req.body.puntuacion}', '${req.body.direccion}', '${req.body.sitioWeb}', '${req.body.ubicacionMaps}' )`;

  cnn.query(sqlInsert, (err, result, fields) => {
    if (err) {
      console.log("Error");
    }
    res.send({
      status: "ok",
      message: "Cliente añadido correctamente",
    });
  });
});

//ELIMINAR CLIENTE

router.delete('/:idCliente', (req, res) => {
  let sqlDelete = 'DELETE FROM clientes where clientes_id = ?'

  values = [req.params.idCliente];

  cnn.query(sqlDelete, values, (err, result, fields) => {
      if (err) {
      res.json({
        status: "error",
        message: "Error al eliminar el cliente",
      });
    } else {
      res.json({
        status: "ok",
        message: "Cliente eliminado correctamente",
      });
    }
  })
})

module.exports = router;
