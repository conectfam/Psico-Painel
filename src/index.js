import React from "react";
import ReactDOM from "react-dom";

import * as gtag from "../lib/gtag";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Importações dos estilos globais
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'leaflet/dist/leaflet.css';
import './App.css';
import './assets/css/custom.css';
// Importações dos componentes do site
import Header from "./components/Header";
import CarouselHeader from './components/CarouselHeader';
import ContentBody from './components/ContentBody';
import Technology from "./components/Technology";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminLayout from "layouts/Admin.js";
import AdminLogin from "layouts/AdminLogin.js";
import UserLogin from "views/UserLogin.js";
import Register from "layouts/Register.js";
import PrimeiroAcesso from "views/PrimeiroAcesso";



const root = ReactDOM.createRoot(document.getElementById("root"));

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() =>
        <div className="background-effect">
          <Header />
          <CarouselHeader />
          <ContentBody />
          <Technology />
          <Contact />
          <Footer />
        </div>
      } />
      <Route path="/admin" render={(props) => isAuthenticated() ? <AdminLayout {...props} /> : <Redirect to="/login" />} />
      <Route path="/Painel" component={AdminLogin} />
      <Route path="/PrimeiroAcesso" component={PrimeiroAcesso} />
      <Route path="/usuario" render={(props) => isAuthenticated() ? <AdminLayout {...props} /> : <Redirect to="/UserLogin" />} />
      <Route path="/Login" component={UserLogin} />
      <Redirect from="*" to="/Login" />
    </Switch>
  </BrowserRouter>
);



<script async src="//static.zotabox.com/4/d/4da5e12916aa183ffd04f337867909d9/widgets.js"></script>
