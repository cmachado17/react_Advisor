import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Slider from "./components/Slider";
import BarraFiltros from "./components/BarraFiltros";
import MasVisitados from "./components/MasVisitados";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DetalleCliente from "./components/DetalleCliente";
import PiePagina from "./components/PiePagina";
import MiUsuario from "./components/MiUsuario";
import Busqueda from "./components/Busqueda";
import SobreNosotros from "./components/SobreNosotros";
import SumaTuEmpresa from "./components/SumaTuEmpresa";
import Contactanos from "./components/Contactanos";
import Admin from "./components/Admin";
import AdminCasilla from "./components/AdminCasilla";
import AdminClientes from "./components/AdminClientes";
import AdminModeracion from "./components/AdminModeracion";
import AdminUsuarios from "./components/AdminUsuarios";
import ScrollToTop from "./components/ScrollToTop";
import Buscador from "./components/Buscador";
import Favoritos from "./components/Favoritos";

const App = () => {
  const [usuario, setUsuario] = useState(null);
  const [searchPub, setSearchPub] = useState(null);

  const onLoginSuccess = (loggedUser) => {
    setUsuario(loggedUser);
  };

  const onLogout = () => {
    let url = "http://localhost:5000/auth";

    fetch(url, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUsuario(null);
      });
  };

  const handleSearchPubs = (terminoBuscado) => {
    if (terminoBuscado === "") {
      terminoBuscado = null;
    }
    setSearchPub(terminoBuscado);
  };

  return (
    <Router>
      <ScrollToTop />
      <NavigationBar
        user={usuario}
        handleLoginSuccess={onLoginSuccess}
        handleLogout={onLogout}
      />

      <Switch>
        <Route
          exact
          path="/"
          children={
            <>
              <Buscador onSearchPubs={handleSearchPubs} />
              <Slider />
              <BarraFiltros />
              <MasVisitados />
            </>
          }
        />

        <Route
          exact
          path="/detalle-cliente/:id"
          children={
            <>
              <Buscador onSearchPubs={handleSearchPubs} />
              <DetalleCliente user={usuario} />
            </>
          }
        />
        <Route
          exact
          path="/busqueda"
          children={
            <>
              <Buscador onSearchPubs={handleSearchPubs} />
              <Busqueda searchPub={searchPub} />
            </>
          }
        />
        <Route exact path="/about-us" children={<SobreNosotros />} />
        <Route exact path="/suma-tu-empresa" children={<SumaTuEmpresa />} />
        <Route exact path="/contactanos" children={<Contactanos />} />

        <Route exact path="/admin" children={<Admin user={usuario} />} />

        <Route exact path="/admin/clientes" children={<AdminClientes />} />
        <Route exact path="/admin/usuarios" children={<AdminUsuarios />} />
        <Route exact path="/admin/casilla" children={<AdminCasilla />} />
        <Route exact path="/admin/moderacion" children={<AdminModeracion />} />

        {usuario && (
          <>
            <Route exact path="/mi-usuario/:id" children={<MiUsuario />} />
            <Route exact path="/favoritos" children={<Favoritos />} />
          </>
        )}
        <Redirect to={{ pathname: "/" }} />
      </Switch>
      <PiePagina />
    </Router>
  );
};

export default App;
