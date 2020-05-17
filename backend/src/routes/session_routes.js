const express = require("express");
const router = express.Router();
const cnn = require("../connection");

router.post("/", (req, res) => {
  let sql = `SELECT * FROM usuarios WHERE user_nombre = ?
  AND user_password = ?`;

  let values = [req.body.user, req.body.password];

  cnn.query(sql, values, (err, result, fields) => {
    if (err) {
      res.json({
        status: "error",
        message: "No es posible acceder en este momento",
      });
    } else {
      if (result.length == 1) {
        req.session.user = req.body.userId;
        req.session.userId = result[0].user_id
        res.json({
          status: "ok",
          message: "sesion iniciada",
          loggedUser: {
            id: result[0].user_id,
            nombre: result[0].user_nombre,
          },
         
        });
      }
      else {
        res.json({
          status: "error",
          message: "Usuario y/o contraseña no validos",
        });
      }
    }
  });
});

router.post('/register', (req, res) => {
  let sql = `INSERT INTO usuarios (user_nombre, user_email, user_password) VALUES ('${req.body.nombreUsuario}','${req.body.emailNuevoUsuario}', '${req.body.passwordNuevoUsuario}')`

  cnn.query(sql, (err, result, fields) => {
    if(err){
      res.json({
        status:'error',
        message: 'Error al crear el usuario'
      })
    }else{
      res.json({
        status: 'ok',
        message: 'Usuario creado'
      })
    }
  } )
})


router.delete("/", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({
        status: "error",
        message: "Error al cerrar sesión",
      });
    } else {
      res.clearCookie("reactAdvisor");
      res.json({
        status: "ok",
        message: "Sesion cerrda",
      });
    }
  });
});

module.exports = router;
