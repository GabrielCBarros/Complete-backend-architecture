
# API CRUD com Autenticação JWT

API REST desenvolvida em Node.js utilizando Express, Prisma e autenticação JWT.

---

## Sobre o projeto

Esta API permite:

* Cadastro de usuários
* Login com geração de token JWT
* Proteção de rotas privadas
* CRUD de atendimentos

Projeto criado com foco em estudos de backend, autenticação e boas práticas de API.

---

## Tecnologias utilizadas

* Node.js
* Express
* Prisma ORM
* JSON Web Token (JWT)
* Dotenv
* Banco de dados MongoDB

---

## Instalação

Clone o repositório:

git clone https://github.com/GabrielCBarros/Complete-backend-architecture.git

Entre na pasta do projeto:

cd [SEU-REPOSITORIO](https://github.com/GabrielCBarros/Complete-backend-architecture)

Instale as dependências:

npm install

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

DATABASE_URL=
JWT_SECRET=
PORT=3000

---

## Executando o projeto

npm run dev

Servidor disponível em:

http://localhost:3000

---

## Autenticação

Após realizar o login, será retornado um token JWT.

Envie o token nas rotas protegidas utilizando o header:

Authorization: Bearer SEU_TOKEN

---

## Rotas da API

### Autenticação

POST /register
Cria um novo usuário

POST /login
Realiza login e retorna token JWT

### Atendimentos

GET /atendimentos
Lista atendimentos

POST /atendimentos
Cria atendimento

PUT /atendimentos/:id
Atualiza atendimento

DELETE /atendimentos/:id
Remove atendimento

---

## Estrutura do projeto

controller/
middlewares/
routes/
prisma/
server.js

---

## Autor

Gabriel Barros

