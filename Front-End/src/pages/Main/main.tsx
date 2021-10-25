import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import api from "../../services/api";

import Check_Icon from "../../assets/Images/check.png";
import Home_Header from "../../assets/Images/Home_Header.png";

import logo_yahoo from "../../assets/Images/logo_yahoo.png";
import logo_forbes from "../../assets/Images/logo_forbes.png";
import logo_estadao from "../../assets/Images/logo_estadao.png";
import logo_valor_economico from "../../assets/Images/logo_valor_economico.png";
import logo_exame from "../../assets/Images/logo_exame.png";
import logo_pegn from "../../assets/Images/logo_pegn.png";

import "./main.css"

function Main() {

    const [values, setValues] = useState([] as number[]);

    async function getValues() {
        const response: [] | any = await api.get('/');
        setValues(response.data)
    }

    useEffect(() => {
        getValues();
    }, [values])

    return (
        <div> 
            <Header/>
            <div className="Main">
                <div className="EContainer_Main">
                    <div className="ECM_Content">
                       <h1 className="Main_Title">Empréstimo pessoal online</h1> 
                       <div className="EOptions">
                           {values.map(val => {
                               return ( <button>R${val}</button> )
                           })}
                       </div>
                       <div className="CheckText">
                           <img src={Check_Icon} alt="Ícone de Check"/>
                           <p>Taxa de aprovação referência do mercado</p>
                       </div>
                       <div className="CheckText">
                           <img src={Check_Icon} alt="Ícone de Check"/>
                           <p>Pequenas parcelas que cabem no seu bolso</p>
                       </div>
                       <div className="CheckText">
                           <img src={Check_Icon} alt="Ícone de Check"/>
                           <p>Dinheiro na conta em até 30 minutos</p>
                       </div>
                       <button className="PedidoBT">Peça seu empréstimo agora</button>
                    </div>
                    <img className="HH_Img" src={Home_Header} alt="Pessoa Segurando Dinheiro" />
                </div>
                <div className="InfoLinks">
                    <img src={logo_yahoo} alt="" />
                    <img src={logo_forbes} alt="" />
                    <img src={logo_estadao} alt="" />
                    <img src={logo_valor_economico} alt="" />
                    <img src={logo_exame} alt="" />
                    <img src={logo_pegn} alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;
