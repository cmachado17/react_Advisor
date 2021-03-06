import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.png";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import "./styles/NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const [mostrarLoginModal, setMostrarLoginModal] = useState(false);

  const handleMostrarLoginModal = () => {
    setMostrarLoginModal(true);
  };

  const handleOcultarLoginModal = () => {
    setMostrarLoginModal(false);
  };

  const [mostrarRegisterModal, setMostrarRegisterModal] = useState(false);

  const handleMostarRegisterModal = () => {
    setMostrarRegisterModal(true);
  };

  const handleOcultarRegisterModal = () => {
    setMostrarRegisterModal(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-green font-weight-bold sticky-top text-center"
        collapseOnSelect
      >
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              style={{ height: "4rem", marginRight: "0.5rem" }}
              src={logo}
              alt="logo"
            ></img>
            <Navbar.Text>React-Advisor</Navbar.Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {props.admin === true ? (
              <Nav.Link href="#home">
                <Link to="/admin">Uso Interno</Link>
              </Nav.Link>
            ) : null}
            {!props.user ? (
              <>
                <Button
                  className="btn-violet m-2"
                  onClick={handleMostrarLoginModal}
                >
                  Iniciar Sesion
                </Button>
                <Button
                  className="btn-violet m-2"
                  onClick={handleMostarRegisterModal}
                >
                  Registrarse
                </Button>
              </>
            ) : (
              <NavDropdown alignRight title={props.user.nombre}>
                {!props.admin === true ? (
                  <>
                    <NavDropdown.Item href="#">
                      <Link to={"/mi-usuario/" + props.user.id}>
                        <i className="fas fa-comments"></i> Mis comentarios
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" onClick={props.handleLogout}>
                      <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                    </NavDropdown.Item>
                  </>
                ) : (
                  <NavDropdown.Item href="#" onClick={props.handleLogout}>
                    <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginModal
        show={mostrarLoginModal}
        handleHide={handleOcultarLoginModal}
        handleLoginSuccess={props.handleLoginSuccess}
      />
      <RegisterModal
        show={mostrarRegisterModal}
        handleHide={handleOcultarRegisterModal}
      />
    </>
  );
};

export default NavigationBar;
