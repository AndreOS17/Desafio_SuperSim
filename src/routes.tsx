import React from "react";

import { Switch, BrowserRouter, Route } from "react-router-dom";

import Main from './pages/Main/main'; // Página Base
import Info from './pages/Info/info'; // Página de Informações da Empresa
import Login from './pages/Login/login'; // Página de SignIn
import SignUp from './pages/SignUp/signup'; // Página de Cadastro

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/Quem-Somos" component={Info} />
            <Route path="/Entrar" exact component={Login} />
            <Route path="/Entrar/Novo-Login" component={SignUp} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
