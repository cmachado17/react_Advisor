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
    `SELECT * FROM opiniones INNER JOIN clientes ON opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id WHERE opi_cliente_id = ${req.params.clienteid}`,
    (err, result, fields) => {
      res.json(result);
    }
  );
});

//Para mostrar los comentarios de un solo usuario
// router.get("/user/:id", (req, res) => {
//   let sql = `SELECT * FROM opiniones INNER JOIN clientes on opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id WHERE opi_user_id = ${req.params.id} `;

//   cnn.query(sql, (err, result, fields) => {
//     if (err) throw err;

//     res.json(result);
//   });
// });

//Para mostrar los comentarios de un solo usuario
router.get("/user/:comentariosUsuarios", (req, res) => {
  cnn.query(
    `SELECT * FROM opiniones INNER JOIN clientes on opi_cliente_id = clientes_id INNER JOIN usuarios on opi_user_id = user_id WHERE opi_user_id = ${req.params.comentariosUsuarios} `,
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

// router.put("/:id", (req, res) => {
//   let imageFileName = "";

//   let sqlUpdate = `UPDATE publicaciones SET pub_titulo = ?,
//    pub_precio= ?`;

//    let values = [
//      req.body.productName,
//      req.body.productPrice
//    ]

//   if (req.files) {
//     //Borro el archivo de la imagen anterior
//     conexion.query(
//       "SELECT pub_imagen FROM publicaciones WHERE pub_id=" + req.params.id,
//       (err, result, fields) => {
//         if (err) {
//           console.log("Error");
//         } else {
//           fs.unlink("../public/images/" + path.basename( result[0].pub_imagen)),
//             (err) => {
//               if (err) throw err;

//               console.log("archivo borrado");
//             };
//         }
//       }
//     );

//     let productImage = req.files.productImage;

//     imageFileName = Date.now() + path.extname(productImage.name);

//     productImage.mv("../public/images/" + imageFileName, (err) => {
//       if (err) {
//         console.log(err);
//       }
//     })
//     sqlUpdate += ', pub_imagen = ?'
//     values.push(process.env.IMAGES_URL + imageFileName);
//   }else{
//     console.log('No hay archivo')
//   }

//   sqlUpdate += 'WHERE pub_id = ?';
//   values.push(req.params.id);

//   conexion.query(sqlUpdate, values,  (err, result, fields) => {
//   *********************FALTA COMPLETAR ACA**********************
//   })

// });

module.exports = router;

//FALTA COMPLETAR ESTO
// conexion.query(sqlInsert, (err, result, fields)=>{
//   if (err){
//     res.json(
//       {
//         status:'error',
//         message: 'error al realizar la publicacion'
//       }
//     )
//   }else{
//     res.json(
//       {
// status: 'ok',
//message: 'publicacion realizada correctamente'

//       }
//     )
//   }
// })

//*************** */ 15/5 ELIMINAR COMENTARIO***********************


