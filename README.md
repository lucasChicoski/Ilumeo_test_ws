# Projeto/ Desafio Autoglass
###### Instalção e execução do projeto
```
#instala as dependencias
yarn

#inicia o serviço
yarn start

```
---

###### lista de rotas

+ /products/getbyid
+ /products/getlistproducts
+ /products/insertproducts
+ /products/updateproducts
+ /products/deleteproducts

**Para conseguir acessar o banco remoto, criar um arquivo .env na raiz do projeto e adicionar a seguinte variavel de ambiente com a url de conexão, deixarei disponivel juntamente com o email**

`DATABASE_URL = ''`

---

###### Alguns MOCKS para teste de rota

###### Filtros

```js
{
	"CNPJProvider":"05.535.060/0001-22",
	"statusProduct":false
}

#Otros parâmentros para filtro

	"productDescription":null,
	"statusProduct":true,
	"manufacturingDate":null,
	"expirationDate":null,
	"idProvider":null,
	"descriptionProvider":null,

```

###### Inserção de dados

```js

{
    "description":"Teclado mecanico Logitec G Pro X",
    "statusProduct":true,
    "expirationDate":"1996-11-23",
    "manufacturingDate":"1996-01-23",
    "idProvider":"123123918",
    "descriptionProvider":"Logitech Perifericos",
    "CNPJProvider":"52.048.918/0001-04"
}

```

###### Atualização de dados

```js

{
    "id": 3,
    "description":"Teclado mecanico HyperX",
    "statusProduct":true,
    "expirationDate":"1996-01-23",
    "manufacturingDate":"1996-11-23",
    "idProvider":"9319239",
    "descriptionProvider":"Kingston Brasil",
    "CNPJProvider":"42.575.523/0001-06"
}

```
###### Deleção e Obtenção de produto

```js

{
	"id":4
}

```

[url do projeto em produção](desafioautoglass.turingcode.com.br/teste)
`desafioautoglass.turingcode.com.br/teste`