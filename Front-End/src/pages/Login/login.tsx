import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import api from "../../services/api";

import "./login.css"

interface iResponsePostUser {
    data: number | any
}

function Login() {

    const [CPF, setCPF] = useState(String);
    const [Password, setPassword] = useState(String);

    const history = useHistory();

    async function Login(e: FormEvent) {
        e.preventDefault();
        const response: iResponsePostUser = await api.post('Entrar', {
            CPF: CPF,
            Password: Password
        })
        if(response.data === 201) {
            setCPF('');
            setPassword('');
            history.push('/');
        }
        else { alert(response.data['err']) }
    }

    return (
        <div>
            <Header/>
            <div className="LoginMain">
                <h1 className="LoginTitle">Já tem cadastro?</h1>
                <h2 className="LoginSubTitle">Acesse sua conta</h2>

                <form>
                    <label htmlFor="User">CPF</label>
                    <input id="User" type="text" value={CPF} onChange={(e) => {
                        setCPF(e.target.value)
                    }}/>

                    <label htmlFor="Password">Senha</label>
                    <input id="Password" type="password" value={Password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>

                    <Link to="/Entrar/Novo-Login">Esqueci minha senha</Link>

                    <button onClick={Login}>CONTINUAR</button>
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