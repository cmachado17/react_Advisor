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
  let sqlSearch = `SELECT * FROM clientes INNER JOIN tags_zona ON clientes_tag_zona_id = tags_zona_id INNER JOIN tags_rubros on clientes_tag_rubro_id = tags_rubro_id WHERE cliente_nombre LIKE ? `;

  let values = [`%${req.params.terminoBuscado}%`];

  cnn.query(sqlSearch, values, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
});

//Agregar cliente

router.post("/", (req, res) => {
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

//EDITAR CLIENTE

router.put("/:id", (req, res) => {
  let imageFileName = "";

  let sqlUpdate = `UPDATE clientes SET cliente_nombre = ?,
   clientes_descripcion = ?,
     clientes_tag_zona_id = ?,
     clientes_tag_rubro_id= ?,
      cliente_puntuacion = ?, 
      cliente_direccion = ?,
       cliente_website = ?,
        cliente_ubicacion = ?`;

  let values = [
    req.body.nombre,
    req.body.descripcion,
    req.body.zona,
    req.body.rubro,
    req.body.puntuacion,
    req.body.direccion,
    req.body.sitioWeb,
    req.body.ubicacionMaps,
  ];

  if (req.files) {
    //Borrar imagen anterior

    cnn.query(
      `SELECT clientes_logo FROM clientes WHERE clientes_id = ${req.params.id}`,
      (err, result, fields) => {
        if (err) {
          console.log("error");
        } else {
          //determinar ruta de borrado
          fs.unlink(
            "./public/images/" + path.basename(result[0].clientes_logo),
            (err) => {
              if (err) throw err;
              console.log("Archivo borrado");
            }
          );
        }
      }
    );

    let logo = req.files.logo;

    //Nobre unico a cada archivo

    imageFileName = Date.now() + path.extname(logo.name);

    logo.mv("./public/images/" + imageFileName, (err) => {
      if (err) {
        console.log(err);
      }
    });

    sqlUpdate += ", clientes_logo = ?";

    values.push(`http://localhost:5000/images/${imageFileName}`);
  } else {
    console.log("No hay archivo");
  }
  sqlUpdate += " WHERE clientes_id = ?";

  console.log(sqlUpdate);

  values.push(req.params.id);

  cnn.query(sqlUpdate, values, (err, result, fields) => {
    if (err) {
      res.send(console.log(err));
    }
    res.json({
      status: "ok",
      message: "Cliente modificado correctamente",
    });
  });
});

//ELIMINAR CLIENTE

router.delete("/:idCliente", (req, res) => {
  let sqlDelete = "DELETE FROM clientes where clientes_id = ?";

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
  });
});

module.exports = router;
