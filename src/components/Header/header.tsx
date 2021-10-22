import React from "react";
import { Link } from "react-router-dom";
import Logo_SS from "../../assets/Images/logo_SS.png";

import './header.css';

export default function Header() {
    return (
        <header className="mainHeader">
            <Link to="/">
                <img src={Logo_SS} alt="SuperSim Logo" className="Logo"/>
            </Link>
            <div className="Links">
                <Link to="/Quem-Somos">Quem Somos</Link>
                <a href="#">Como Funciona</a>
                <a href="#">Crédito</a>
                <a href="#">Produtos</a>
                <a href="#">Ajuda</a>
                <a href="#">Blog</a>
                <Link to="/Entrar">Entrar</Link>
                <button>Solicitar Empréstimo</button>
            </div>
        </header>
    );
}
