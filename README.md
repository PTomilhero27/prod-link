<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  Uma API de cadastro de clientes e produtos construída com <a href="http://nodejs.org" target="_blank">Node.js</a> utilizando NestJS, Prisma e MySQL.
</p>

## Descrição

Este repositório é o ponto de partida para criar uma API utilizando o framework NestJS com Prisma ORM para a manipulação de dados de um banco de dados MySQL.

## Instalação

Instale as dependências do projeto com o comando:

```
$ pnpm install
```


## Configuração do Banco de Dados
Certifique-se de criar uma conexão de banco de dados MySQL chamada ProdLink e modificar o arquivo .env com suas credenciais de acesso.

```
DATABASE_URL="mysql://root:SUA_SENHA@localhost:3306/ProdLink"
```

## Executando a Aplicação
Para gerar e aplicar migrações do banco de dados, execute:

```
$ npx prisma generate
$ npx prisma migrate dev

```

Para executar a aplicação em modo de desenvolvimento, use:

```
$ pnpm run start:dev
```










