import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

import "./login.css"

function Login() {
    return (
        <div>
            <Header/>
            <div className="LoginMain">
                <h1 className="LoginTitle">Já tem cadastro?</h1>
                <h2 className="LoginSubTitle">Acesse sua conta</h2>

                <form>
                    <label htmlFor="User">CPF</label>
                    <input id="User" type="text"/>

                    <label htmlFor="Password">Senha</label>
                    <input id="Password" type="password"/>

                    <Link to="/Entrar/Novo-Login">Esqueci minha senha</Link>

                    <button type="submit">CONTINUAR</button>
                    <button className="CancelBT">
                        <Link to="/Entrar/Novo-Login">PRIMEIRO ACESSO</Link>
                    </button>
                </form>

            </div>
            <Footer/>
        </div>
    )
}

export default Login;