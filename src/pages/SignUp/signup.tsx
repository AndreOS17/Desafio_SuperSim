import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

import "./signup.css";

function SignUp() {
    return (
        <div>
            <Header/>
            <div className="SignUpMain">
                <h1 className="SignUpTitle">Senha de acesso</h1>
                <h2 className="SignUpSubTitle">
                    Para solicitar sua senha de acesso, preencha seu CPF:
                </h2>

                <form>
                    <label htmlFor="User">CPF</label>
                    <input id="User" type="text"/>

                    <button type="submit">CONTINUAR</button>
                </form>
                
            </div>
            <Footer/>
        </div>
    )
}

export default SignUp;