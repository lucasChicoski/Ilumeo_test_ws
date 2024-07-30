# Projeto Web service desafio Ilumeo 

Este projeto contempla o desafio proposto para vaga de dev fullstack

## Índice

- O projeto tentou seguir os princípios SOLID juntamente com design partner DDD
- Projeto desenvolvido em node.js, typeScript

## Como rodar o projeto localmente

```js
    npm i
    yarn start:dev
```

## Variáveis de ambiente

Url para conexão com o banco de dados.
```Js
DATABASE_URL=""
```
Url do projeto publicado

[Projeto Publicado](https://ilumeo-test-ws.onrender.com)

Existe uma rota para verificação se a api está rodando

```js
    '/teste'
```

## Rotas

```js

    '/get-list-time' //Obter a lista e quantidade de horas trabalhadas
    /**
     * @code_user código do usuário para realizar a busca
     */

    '/set-time' //Inicia ou para um período de trabalho
    /**
     * @code_user
     * @hash_time
     * @status
     * @time
     */
    
    '/auth-user' //Simula a autenticação
    /**
     * @user_code //código do usuário
     */ 

```


