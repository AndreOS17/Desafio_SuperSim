import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

import banner_ESS from "../../assets/Images/banner_ESS.jpg";

import EC_img from "../../assets/Images/EC_img.jpg";
import TC_img from "../../assets/Images/TC_img.jpg";

import logo_yahoo from "../../assets/Images/logo_yahoo.png";
import logo_forbes from "../../assets/Images/logo_forbes.png";
import logo_estadao from "../../assets/Images/logo_estadao.png";
import logo_valor_economico from "../../assets/Images/logo_valor_economico.png";
import logo_exame from "../../assets/Images/logo_exame.png";
import logo_pegn from "../../assets/Images/logo_pegn.png";

import FB1_img from "../../assets/Images/FB1_img.png";
import FB2_img from "../../assets/Images/FB2_img.png";
import FB3_img from "../../assets/Images/FB3_img.png";
import FB4_img from "../../assets/Images/FB4_img.png";
import FB5_img from "../../assets/Images/FB5_img.png";
import FB6_img from "../../assets/Images/FB6_img.png";

import "./info.css";

function Info() {
    return (
        <div>
            <Header/>
            <div className="InfoMain">
                <h1>Inclusão financeira de verdade</h1>

                <p>
                    O nosso <strong> SIM </strong> 
                    facilmente se traduz a um conceito muito simples: <strong> Confiança nas pessoas</strong>. 
                </p>

                <img src={banner_ESS} alt="Banner da Equipe SuperSim" className="banner_ESS"/>

                <h2 className="SubTitle">Prazer, somos a SuperSim</h2>

                <p className ="InfoText">
                    Bancos burocráticos, estresse com a família e amigos, papeladas e filas de espera. 
                    Conseguir crédito pessoal não precisa ser sofrido assim!
                </p>
                <p className ="InfoText">
                    A SuperSim é uma facilitadora para você conseguir seu crédito pessoal com ofertas personalizadas 
                    para cada perfil, faremos o possível para dizer SIM para que você saia com o dinheiro depositado 
                    em sua conta.
                </p>

                <div className="VContainer">
                    <h2 className="SubTitle">Como a SuperSim consegue a maior taxa de aprovação?</h2>
                    <div>
                        <iframe width="1040" height="615" src="https://www.youtube.com/embed/XgHYdiqodp0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <p className="InfoText">Nossos produtos e serviços nasceram para atender nossa missão: 
                        flexibilizar o acesso ao crédito para quem precisa de verdade. Temos as melhores 
                        parcerias do mercado e desenvolvemos nossos próprios algoritmos de decisões inteligentes 
                        para maximizar a taxa de aprovação.
                    </p>
                    <button>Como funciona?</button>
                </div>

                <div className="EContainer">
                    <div className="EContent">
                        <h2 className="SubTitle">Os nossos empréstimos</h2>
                        <p>
                            Inclusão financeira é uma tarefa difícil, mas não é impossível. Desenhamos produtos 
                            flexíveis para todos, com garantia de celular ou empréstimo pessoal tradicional sem 
                            garantia.
                        </p>
                        <p>
                            Após uma solicitação rápida, seus dados são confirmados e o nosso Super algoritmo gera
                            sua aprovação em segundos. O dinheiro estará na sua conta em até 30 minutos ou você não
                            paga juros. Veja os termos e condições.
                        </p>
                        <p>
                            Todos nossos empréstimos pessoais são 100% online. Você não precisa passar por um processo
                            demorado e burocrático de solicitação.
                        </p>
                        <h3>Conheça nossas modalidades de empréstimo</h3>
                        <button>Com garantia de celular</button>
                        <br/>
                        <button>Sem garantia</button>
                    </div>
                    <img src={EC_img} alt="Pessoa Feliz"/>
                </div>

                <div className="TContainer">
                    <img src={TC_img} alt="Pessoa Sorrindo" />
                    <div className="TContent">
                        <h2 className="SubTitle">Nosso Time</h2>
                        <p>
                            Formamos um time com os melhores profissionais da área para entregar produtos e serviços
                            financeiros com empatia e foco em garantir a maior taxa de aprovação do mercado brasileiro,
                            só assim conseguiremos cumprir a nossa missão dia a dia para democratizar o acesso ao crédito
                            no Brasil.
                        </p>
                        <h3>Quer fazer parte dessa mudança?</h3>
                        <p>Envie seu CV para o nosso banco de talentos!</p>
                        <button>Quero fazer parte do time</button>
                    </div>
                </div>

                <div className="InfoLinks">
                    <img src={logo_yahoo} alt="" />
                    <img src={logo_forbes} alt="" />
                    <img src={logo_estadao} alt="" />
                    <img src={logo_valor_economico} alt="" />
                    <img src={logo_exame} alt="" />
                    <img src={logo_pegn} alt="" />
                </div>

                <div className="InfoFeedback">
                    <h2 className="SubTitle">O que falam da SuperSim</h2>
                    <div className="Feedbacks">
                        <div className="Feedback_1">
                            <p className="FeedbackText">
                                Gostei muito. No início tive medo, porque infelizmente
                                temos muitas pessoas aplicando golpes deste tipo. Mas
                                estou satisfeita e muito feliz. Me ajudou quando eu mais
                                precisei.
                            </p>
                            <img src={FB1_img} alt="" className="FeedbackProfile"/>
                            <p className="FeedbackName">Lorena Ferreira</p>
                        </div>
                        <div className="Feedback_2">
                            <p className="FeedbackText">
                                Ótima experiência!! Ontem fiz contato,uma breve confirmação
                                de dados,instalei o app que e solicitado e o dinheiro na
                                minhs conta antes das 10 da manhã! Fui bem atendida,sem muita
                                burocracia. Super recomendo!
                            </p>
                            <img src={FB2_img} alt="" className="FeedbackProfile"/>
                            <p className="FeedbackName">Fernanda Ap</p>
                        </div>
                        <div className="Feedback_3">
                            <p className="FeedbackText">
                                Eu amei a super sim 😍 Atendeu minha necessidade! E superou
                                minhas expectativas 😍😇✌😎
                            </p>
                            <img src={FB3_img} alt="" className="FeedbackProfile"/>
                            <p className="FeedbackName">Elias Barbaroto</p>
                        </div>
                        <div className="Feedback_4">
                            <p className="FeedbackText">
                                Super atenciosos, estava precisando muito de um empréstimo e
                                consegui!! Realmente são muito confiáveis. Obrigada super SIM 👍
                            </p>
                            <img src={FB4_img} alt="" className="FeedbackProfile"/>
                            <p className="FeedbackName">Juliana Silva</p>
                        </div>
                        <div className="Feedback_5">
                            <p className="FeedbackText">
                                Eu simplesmente amo a Super sim, é o help que nós precisamos com
                                condições sensacionais!
                            </p>
                            <img src={FB5_img} alt="" className="FeedbackProfile"/>
                            <p className="FeedbackName">Brenda luara beltrame</p>
                        </div>
                        <div className="Feedback_6">
                            <p className="FeedbackText">
                                Quero agradecer a Super Sim em 30 minutos fez o depósito na Minha
                                Conta. De última hora tive um Imprevisto em pagar uma conta mas Graças
                                a Deus consegui pela Super Sim.
                            </p>
                            <img src={FB6_img} alt="" className="FeedbackProfile"/>
                            <p className="FeedbackName">Wanderlei Pereira</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Info;