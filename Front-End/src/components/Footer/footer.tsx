import React from "react";
import { Link } from "react-router-dom";

import LogoM_SS from "../../assets/Images/logoM_SS.png";

import icon_YT from "../../assets/Images/icon_YT.svg";
import icon_TT from "../../assets/Images/icon_TT.svg";
import icon_FB from "../../assets/Images/icon_FB.svg";
import icon_IG from "../../assets/Images/icon_IG.svg";
import icon_IN from "../../assets/Images/icon_IN.svg";

import './footer.css'

export default function Footer() {
    return (
        <footer className="mainFooter">
            <div className="container">
                <div className="LinksGrid">
                    <ul>
                        <li className="ListTitle">SuperSim</li>
                        <li><a href="#">Empréstimo com garantia de celular</a></li>
                        <li><a href="#">Empréstimo sem garantia</a></li>
                        <li><a href="#">Sobre a SuperSim</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <ul>
                        <li className="ListTitle">Políticas e Termos</li>
                        <li><a href="#">Termos e condições</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Responsabilidade</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Solicitar Empréstimo</a></li>
                        <li><a href="#">Entrar</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Empréstimo pessoal</a></li>
                        <li><a href="#">Crédito pessoal online</a></li>
                        <li><a href="#">Como conseguir dinheiro</a></li>
                        <li><a href="#">Dinheiro emprestado</a></li>
                        <li><a href="#">Empréstimo sem burocracia</a></li>
                    </ul>
                    <ul>
                        <li className="ListTitle">Ajuda</li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Perguntas Frequentes</a></li>
                        <li><a href="">Vagas</a></li>
                    </ul>
                </div>

                <div className="SearchBox">
                    <p>Páginas</p>
                    <select>
                        <option selected disabled>Selecione...</option>

                        <option value="#">Admitad</option>
                        <option value="#">Adzappy</option>
                        <option value="#">app</option>
                        <option value="#">Blog | Dicas para dinheiro rápido e mais</option>
                        <option value="#">cenariocapital</option>
                        <option value="#">Cityads</option>
                        <option value="#">Como conseguir dinheiro</option>
                        <option value="#">Como conseguir crédito pessoal online</option>
                        <option value="#">Empréstimos sem burocracias</option>
                        <option value="#">Crédito pessoal fácil, seguro e online</option>
                        <option value="#">Precisa de dinheiro urgente?</option>
                        <option value="#">Onde conseguir empréstimo online seguro</option>
                        <option value="#">Dinheiro emprestado</option>
                        <option value="#">Dinheiro rápido</option>
                        <option value="#">Como fazer um empréstimo online</option>
                        <option value="#">Como funciona o Crédito Pessoal Online</option>
                        <option value="#">Simular empréstimo pessoal online</option>
                        <option value="#">Como quitar minhas dívidas</option>
                        <option value="#">Contato | Fale com a SuperSim empréstimos</option>
                        <option value="#">Dicas sobre Dívida Ativa</option>
                        <option value="#">EasyCredito</option>
                        <option value="#">Empréstimo com Garantia de Celular</option>
                        <option value="#">Empréstimo online para negativados</option>
                        <option value="#">Empréstimo online urgente</option>
                        <option value="#">Empréstimo para MEI</option>
                        <option value="#">Empréstimo pessoal sem garantia</option>
                        <option value="#">Empréstimos Online</option>
                        <option value="#">Empréstimos para autônomo</option>
                        <option value="#">FAQ - Perguntas frequentes sobre empréstimos</option>
                        <option value="#">iGoal</option>
                        <option value="#">Indexa</option>
                        <option value="#">Kindico</option>
                        <option value="#">LeadMedia</option>
                        <option value="#">Login na SuperSim Empréstimos online</option>
                        <option value="#">Trocar senha na SuperSim Empréstimos online</option>
                        <option value="#">Lomadee</option>
                        <option value="#">MUV</option>
                        <option value="#">Neoleads</option>
                        <option value="#">O que é um empréstimo pessoal</option>
                        <option value="#">Empréstimo pessoal online</option>
                        <option value="#">Empréstimo online urgente</option>
                        <option value="#">Simular crédito pessoal fácil e rápido</option>
                        <option value="#">Quem Somos | A empresa de inclusão financeira</option>
                        <option value="#">Renegociação de dívidas - Como fazer</option>
                        <option value="#">Serasa</option>
                        <option value="#">SuperSim | Empréstimo online responsável e sem sustos</option>
                        <option value="#">SuperSim | Empréstimo online urgente</option>
                        <option value="#">SuperSim | Salva</option>
                        <option value="#">Termos e Condições nos Empréstimos online</option>
                        <option value="#">SuperSim | Política de privacidade dos empréstimos</option>
                        <option value="#">SuperSim | Termo de Autorização do Banco Central SCR</option>
                        <option value="#">SuperSim | Termos e Condições de uso nos Empréstimos</option>
                        <option value="#">Vagas</option>
                    </select>
                </div>

                <div className="LogosGrid">
                    <div></div>
                    <div className="LogoSS">
                        <Link to="/">
                            <img src={LogoM_SS} alt="Logo Minimalista da SuperSim"/>
                        </Link>
                    </div>
                    <div className="Icons">
                        <a href="#"><img src={icon_YT} alt="Ícone do YouTube" /></a>
                        <a href="#"><img src={icon_TT} alt="Ícone do Twitter" /></a>
                        <a href="#"><img src={icon_FB} alt="Ícone do Facebook" /></a>
                        <a href="#"><img src={icon_IG} alt="Ícone do Instagram" /></a>
                        <a href="#"><img src={icon_IN} alt="Ícone do LinkedIn" /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
