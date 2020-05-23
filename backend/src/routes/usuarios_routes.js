const express = require("express");
const cnn = require("../connection");

const router = express.Router();

router.get("/", (req, res) => {
  cnn.query("SELECT * FROM usuarios", function (err, result, fields) {
    res.json(result);
  });
});

router.get("/:id", (req, res) => {
  cnn.query(
    "SELECT * FROM usuarios WHERE user_id = " + req.params.id,
    function (err, result, fields) {
      res.json(result);
    }
  );
});

// router.post("/", (req, res) => {
//   let sql =
//     "INSERT INTO usuarios(user_nombre, user_email, user_password) VALUES ('Ricardo10', 'ricardo@gmail.com', 'ricardo123')";
//   cnn.query(sql, function (err, result, fields) {
//     if (err) throw err;

//     res.send('usuario cargado');

//   });
// });

router.delete("/:idUsuario", (req, res) => {
  let sqlDelete = "DELETE FROM usuarios WHERE user_id = ?";

  values = [req.params.idUsuario];

  cnn.query(sqlDelete, values, (err, result, fields) => {
    if (err) {
      res.json({
        status: "error",
        message: "Error al eliminar el usuario",
      });
    } else {
      res.json({
        status: "ok",
        message: "Usuario eliminado correctamente",
      });
    }
  });
});

router.put("/", (req, res) => {
  res.send("peticion put");
  console.log("peticion put");
});

module.exports = router;
