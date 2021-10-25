
# <center>Desafio SuperSim</center>

---

Esse projeto tem como objetivo cumprir as especificações propostas pelo time da [SuperSim](https://www.supersim.com.br/).

> As especificações podem ser encontradas no [Arquivo](https://s3.amazonaws.com/gupy5/production/companies/1954/emails/1634850433167/db7a8510-32b2-11ec-9d31-8f49dbc7bba6/desafio_supersim_estgio_-_jnior.pdf).

## Quem sou eu?

Sou o André Barbosa de Oliveira Silva, na data atual - 22 de outubro de 2021 - tenho 18 anos e com a curiosidade pela programação e desenvolvimento eu sou um dos participantes do processo seletivo da SuperSim.

## O Projeto

Escolhi trabalhar com o próprio site da [SuperSim](https://www.supersim.com.br/) para desenvolver o site clone, motivos?

+ Com o objetivo de trazer dados dinâmicos para a aplicação, a empresa não tem uma API para as informações expostas no Site, dando motivação a construir a própria API para utilização no projeto;
+ O Site da empresa é bem dinâmico e moderno, garantindo um desafio a mais quanto à organização e estética;
+ Sendo a apresentação da empresa, gostaria de apresentar a minha visão e construção em cima do projeto deles.

### Tecnologias

Falando um pouco do que foi usado na construção do projeto:

+ React (**+Typescript**), HTML e CSS foram os escolhidos para a execução do Front-End:

    + Já tenho mais prática com o desenvolvimento de Sites com essas ferramentas, então antes de tentar explorar alguma coisa nova para aprender eu deixei essas como minha zona de conforto.

+ Como já mencionado, o Back-End, responsável pelos dados dinâmicos será construido como uma API própria, em Django ou Flask

    + Com todo o Front-End como uma zona de conforto definida, para o Back-End foi escolhido uma tecnologia com a qual eu nunca mexi, os Frameworks Web do Python, Django e Flask, estou animado para realizar a operações necessárias com eles.

+ A implementação de Testes e a utilização do Docker vão ser avaliadas.

+ O deploy da aplicação vai ser avaliado.

### O que foi feito

A seguintes etapas foram tomadas para a realização do projeto:

- [x] Escolha do Site para *"Clonagem"* ([Site da SuperSim](https://www.supersim.com.br/))
- [x] Seleção de Páginas para construção de funcionalidade (Página Principal, Quem Somos e Entrar - Login e Cadastro)
- [ ] Confecção do Front-End 
    
    + ![progress](https://progress-bar.dev/90/ "progresso")

- [ ] Confecção do Back-End

    + ![progress](https://progress-bar.dev/40/ "progresso")

- [ ] Implementação de Testes - ***Não Realizado!***

- [ ] Utilização do Docker  - ***Não Realizado!***

- [ ] Deploy do projeto (Heroku) - ***Não Realizado!***

### Estratégia

A abordagem inicial do Projeto foi estudar e revisar a Página alvo de clonagem e então começar a levantar os métodos necessários.

+ As 3 páginas escolhidas foram: 

    + Página Principal (Main);
    + Página Entrar (Login + Página SignUp - Novo Login);
    + Página Quem Somos (Info);

> Com essas 3 já seria possível realizar alguns objetivos:

    + Confecção de cards dinamicamente populada - Representados pelos cards de valores na página principal, além de poder criar os cards de Feedback como cards dinamicamente populados;

    + Confecção de Formulário - Presente nas páginas de Login e Novo Login

    + Certa Navegabilidade com algumas páginas - Total de 3 páginas criadas e 1 em desenvolvimento

    + Prática de Utilização de API - Com a utilização em um funcionamento de Login primitivo e população dinâmica de valores em cards

    + Prática com React, HTML e CSS - Tecnologias Obrigatórias no desafio

    + Organização diretórios de projeto

> 

+ A API foi desenvolvida com a utilização do Framework Web Flask da Linguagem Python

> Com o objetivo de aprender uma nova tecnologia durante o projeto, Python foi escolhido como a linguagem responsável pelo Back-End

    + Com a prática de desenvolvimento Back-End em NodeJS, a aplicação dos conceitos foi facilidade

    + A prática mais atual com Python tornou o processo de desenvolvimento bem fácil

    + A utilização da API Flask não difere muito da aaplicação de seu semelhante em Javascript

>

### O que não foi feito

+ A Página Inicial da aplicação estava por último no desenvolvimento e acabou por não ser finalizada

+ A finalização da API e sua aplicação não foram concluidas

+ Sem a finalização da API, o desenvolvimento de testes foi comprometido (não foi escolhido o TDD como metodologia do projeto)

+ A utilização do Docker foi impossibilitada

+ O Deploy da aplicação na plataforma HEROKU não foi realizada

### Problemas

+ A página Inicial foi deixada por último por utilizar a API que até o momento não estava operante, o que fez com que todas as demais páginas fossem deixadas com mais urgência

+ A construção da API Flask completa foi impossibilitada pelo pouco tempo direcionado para o estudo da possibilidade de desenvolvimento e o desenvolvimento em si

+ Os testes de funcionais e os testes de integração foram abandonados pela falta de tempo e primitividade do estado operacional da API e das páginas

+ Não foi direcionado tempo para o estudo da implementação do Docker no projeto

+ Sem tem a aplicação em um bom estado para Deploy esse processo foi abandonado

### Tempo Necessário

+ A Página Inicial completa ainda levaria de algumas horas à um dia

+ A contrução completa e implementação da API não levaria mais de 3 dias

+ O desenvolvimento dos testes poderia ser realizado de 2 à 3 dias

+ O estudo a aplicação do Docker e adaptações poderia levar de 3 à 5 dias

+ O Deploy poderia ser realizadom em 3 dias

Totalizando um período de um pouco mais de uma semana até um máximo de duas semanas para a finalização do Projeto completo e funcional

### Resolução e Como seria feito

+ A Páginal Inicial seria construída com a devida avaliação e comparação entre o *Original* e o *Clone*, e quando finalizada, seria reavaliada a navegabilidade e últimas correções de funcionalidades básicas e acessibilidade, nessa etapa também teria um foco maior na representatividade da responsividade original da Página alvo

+ A API seria finalizada levando em conta as ideias originais de funcionalidades:

    + Um Banco de Dados seria desenvolvido para armazenar algumas informações essenciais, como:

        + Informações Cadastrais, responsáveis pelo Login e manuseio das operações na plataforma, inicialmente planejado com os dados de CPF e senha, conteria informações de logradouro, informações pessoas e outras documentações, informações de contato e dados de garantia (tendo em vista o funcionamento da empresa, seriam informações trazidas pelo aplicativo desenvolvido e seriam responsáveis pelo bloqueio ou não do aparelho)

        + Informações monetárias e outros dados referentes à empresa, para poder ajudar em cálculos internos e correções de valores, podendo até ser usadas facilmente e utilizações de divulgação de dados de funcionamento das operações da empresa

        + Dados de Feedback simples, extraidos de zonas de comentários ou afins, para criação de cards dinâmicos de Feedback e utilização na construção das páginas

    + Funcionalidades e Operações referentes aos processo de utilização do Site, seja a autenticação de login ou a implementação de um sistemas de Alerts internos para o controle de fluxo e operações

+ Os testes de funcionalidade representariam o funcionamento das funções construidas na aplicação, e deveriam retornar as respostas ou comparativos referentes à lógica de cada função, unitariamente

    + Os testes de integração representariam o funcionamento em conjunto das operações durante tarefas simples (Navegação, Login, Verificações) e sendo automatizadas dariam um bom direcionamento da funcionalidade da aplicação como um todo

> Obs.: Com a implementação de funcionalidade, testes e etc., o diretório responsável pelo Back-End seria preenchido com arquivos e reorganizado, até o momento todas as operações construidas estão em um único arquivo

+ Para a implemetação do Docker, seria analisado e estudado a sua funcionalidade e necessidade, para enfim implementar o projeto

+ Antes do Deploy, a organização seria reavaliada para então iniciar o processo de produção, onde todo o projeto seria adaptado para o ambiente final e liberado para a utilização geral e disponibilizado na Internet

> Obs.: Possíveis reavaliações do que foi desenvolvido seriam levantadas para implementar o desenvolvimento

---

## <center>Utilização</center>

### Baixar e Usar

1º Baixe o projeto como um arquivo .ZIP indo no menu *Code*>*Download ZIP* e extraia os arquivos para um pasta de sua escolha

2º Para rodar a aplicação e o server localmente deverá ser aberto 2 terminais no local dos arquivos 

3º Em um terminal, se dirija à pasta Front-End, utilizando o comando:
```
cd Front-End
```
> Obs.: Ou o equivalente em seu Sistema Operacional 

4º Em seguida, será utilizado o comando:
```
yarn start
```
> Obs.: O comando ````npm start``` também pode ser usado se o Yarn não estiver instalado

5º Agora no outro terminal, se dirija ao Back-End:
```
cd Back-End
```

6º Utilize o comando abaixo para instalar todos os módulos necessários para execução do Python:
```
pip install -r requirements.txt
```
> Obs.: Para a execução do Front-End, o npm ou o Yarn já realizam a instalação automática dos módulos utilizados sem a necessidade de qualquer outra preocupação

7º Apos a instalação de todos os módulos, o comando abaixo pode ser usado no mesmo terminal para iniciar o servidor:
```
python .\main.py
```

8º Com tudo executado até o momento, você poderá abrir o navegador e ir para o endereço:
**[localhost](http://localhost:3000)**, espero que aproveite a navegação :D

---

## Conclusão

Esse projeto termina aqui, mas provavelmente no futuro ele será continuado, já que foi bem divertido desenvolver tudo isso, sem contar o aprendizado adquirido no processo.
<br/>
<br/>
E se encontrar qualquer problema durante a execução, ou desejar comunicar alguma coisa, sinta-se a vontade para entrar em contato:

+ `:email:` **andre.os908@gmail.com**

+ `:iphone:` **(11) 97225-2481**
