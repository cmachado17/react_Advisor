const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  if (req.body.user == "pepe" && req.body.password === "1234") {
    res.json({
      status: "ok",
      message: "sesion iniciada",
      loggedUser: {
        id: 125,
        nombre: "Pepe Garcia",
      },
    });
  } else {
    res.json({
      status: "error",
      message: "Usuario y/o contraseña no validos",
    });
  }
});

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
