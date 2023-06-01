<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## All Api end point

### Name: login user

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/auth/login/"
Headers: {
  "Content-Type": "application/json"
}
Request : {
	"email": "test@test.com",
	"password": "12345678"
}
Reponse: status 201
{
  "user": {
        "_id": "61efc4b145f9b1ef9c6a36f2",
        "createdAt": "2022-01-25T09:35:45.546Z",
        "adress": "Douala",
        "age": 10,
        "email": "test@test.com",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0NDI0MDU3MiwiZXhwIjoxNjQ0MzI2OTcyfQ.Nh0u-vo7t4nafVFTksC9siVbjV_mFP1BZEL-atEU4Bs"
}
```

### Name: register user

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/user/register"
Headers: {
  "Content-Type": "application/json"
}
Request : {
  "email": "test@test.com",
  "password": "password",
}
Reponse: status 201
{
    "user": {
        "createdAt": "2022-02-07T12:59:15.884Z",
        "email": "test@test.com",
        "_id": "62012efe177f015c515b8fc5",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDEyZWZlMTc3ZjAxNWM1MTViOGZjNSIsImlhdCI6MTY0NDI0NDczNCwiZXhwIjoxNjQ0MzMxMTM0fQ.aKH1mHS7tLC0ebxTmMpot6OVfQUUBX3Jkn1l6SdidhQ"
}
```

### Name: create category

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/category/create"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
	"name": "Smartphone",
	"description": "some description"
}
Reponse: status 201
{
    "createdAt": "2022-04-18T11:29:17.103Z",
    "name": "Smartphone",
    "description": "some description",
    "_id": "625d70ef3f538325fe268e56"
}
```

### Name: get all category

```javascript
Method : GET
URL : "https://app-ztrain.herokuapp.com/category/"
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Reponse: status 200
[
    {
        "_id": "625d70ef3f538325fe268e56",
        "createdAt": "2022-04-18T11:29:17.103Z",
        "name": "Smartphone",
         "description": "some description",
        "__v": 0
    }
]
```

### Name: create product

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/product/create"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
  "name": "Samsung Note 9jlsjsdqsdcaaabbb",
  "description": " Samsung Note 9 description, Samsung Note 9 description Samsung Note 9 description Samsung Note 9 description",
  "image":["https://image.png", "https://image.png", "https://image.png"],
  "price": 10,
  "isActive": false,
  "category": "625d70ef3f538325fe268e56",
  "promotion": "6283b33d0effaba5dd6a94fc",
  "attributs": {
      "colors": ["green"],
      "height": ["M", "L"]
  }
}
Reponse: status 201
{
    "name": "Samsung Note 9jlsjsdqsdcaaabbb",
    "description": " Samsung Note 9 description, Samsung Note 9 description Samsung Note 9 description Samsung Note 9 description",
    "image": [
        "https://image.png",
        "https://image.png",
        "https://image.png"
    ],
    "price": 10,
    "comments": [],
    "isActive": false,
    "category": "625d70ef3f538325fe268e56",
    "promotion": "6283b33d0effaba5dd6a94fc",
    "attributs": {
        "colors": [
            "green"
        ],
        "height": [
            "M",
            "L"
        ],
        "_id": "628b65fca140eee8ddc868fd"
    },
    "createAt": "2022-05-23T10:24:09.063Z",
    "_id": "628b65fca140eee8ddc868fc",
    "__v": 0,
    "id": "628b65fca140eee8ddc868fc"
}
```

### Name: add product to cart

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/cart/add"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
  "product": "djhdjhzeazbxsge",
  "user_id": "sjhazhgqzudd",
  "quantity": 2
}
Reponse: status 201
{
  "message": "Votre panier à été mis à jour"
}
```

### Name: update quantity product to cart

```javascript
Method : PUT
URL : "https://app-ztrain.herokuapp.com/cart/update"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
  "product": "djhdjhzeazbxsge",
  "user_id": "sjhazhgqzudd",
  "quantity": 2
}
Reponse: status 201
{
  "message": "Votre panier à été mis à jour"
}
```

### Name: delete specific product to cart

```javascript
Method : DELETE
URL : "https://app-ztrain.herokuapp.com/cart/delete"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
  "product": "djhdjhzeazbxsge",
  "user_id": "sjhazhgqzudd"
}
Reponse: status 200
{
    "message": "product remove cart successfully"
}
```

### Name: delete all product user to cart

```javascript
Method : DELETE
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
URL : "https://app-ztrain.herokuapp.com/cart/delete/:user_id"
Request : {
}
Reponse: status 200
{
    "message": "remove all product cart successfully"
}
```

### Name: get all product user to cart

```javascript
Method : GET
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
URL : "https://app-ztrain.herokuapp.com/cart/:user_id"
Request : {
}
Reponse: status 200
[
    {
        "_id": "62261e1da5182ded9f5112c9",
        "createdAt": "2022-03-07T15:00:22.580Z",
        "quantity": 2,
        "user_id": "620f561ae826bc0b18331a6e",
        "product": {
            "comments": [],
            "_id": "61efb02b4e23dc71cab1331b",
            "createAt": "2022-01-25T07:58:07.046Z",
            "price": 10000,
            "image": "https://i.pinimg.com/236x/0e/13/11/0e1311cbe34a3e7079880496e040d4b9.jpg",
            "description": "new description",
            "name": "new title otot otootooore",
            "__v": 0
        },
        "__v": 0
    }
]
```

### Name: add comment to product

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/product/comments/add"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
  "product_id": "djhdjhzeazbxsge",
  "user_id": "sjhazhgqzudd",
  "message": "some message"
}
Reponse: status 201
{
    "createAt": "2022-02-07T13:49:50.148Z",
    "user_id": "61efc4b145f9b1ef9c6a36f2",
    "product_id": "61f2a5c50c592f3502082ca7",
    "message": "un nouveau commentaire",
    "_id": "6201270f91b6a3b1ee4b3b26",
    "__v": 0
}
```

### Name: submit command

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/command/create"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
	"user_id": "61efc4b145f9b1ef9c6a36f2",
	"address": "douala makepe",
	"card": {
	      "number": 42424242424242,
	      "exp_month": 1,
	      "exp_year": 2023,
	      "cvc": "314"
	},
  "products": [{
    quantity: 2,
    product: "object produit avec tout les attributs"
  }]
  "shipping_method": "627ce1b06ba58352b9229552"
}
Reponse: status 201
{
    "message": "Bravo!!! votre commande a été validé"
}
```

### Name: add product to favorite

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/favorites/add"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
	"user": "is user id",
	"product": "is product id",
}
Reponse: status 201
{
    "product": "61efb02b4e23dc71cab1331b",
    "user": "620f561ae826bc0b18331a6e",
    "_id": "625ff0da254b4f472e7d3a8e",
    "__v": 0
}
```

### Name: get all products favorites of user

```javascript
Method : GET
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
URL : "https://app-ztrain.herokuapp.com/favorites/:user_id"
Reponse: status 200
[
    {
        "_id": "625ff0da254b4f472e7d3a8e",
        "product": {
            "comments": [],
            "_id": "61efb02b4e23dc71cab1331b",
            "createAt": "2022-01-25T07:58:07.046Z",
            "price": 30.99,
            "image": "https://www.pngmart.com/files/15/Floor-Lamp-Tripod-PNG.png",
            "description": "Ampoule Vecteur Incandescent Lampe Ampoule Filament Icône 3d Illustration  Transparente Réaliste, Clipart De Lampe, Ampoule, Lumière Fichier PNG et  PSD pour le téléchargement libreAmpoule Vecteur Incandescent",
            "name": "Ampoule Vecteur Incandescent",
            "__v": 0,
            "isActive": true
        },
        "user": "620f561ae826bc0b18331a6e",
        "__v": 0
    }
]
```

### Name: create shipping method

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/shipping-method/create"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
    "designation": "Livraison à domicile",
    "description": "la livraison ce fera à l'addresse fourni",
    "price": 0
}
Reponse: status 201
{
    "designation": "Livraison à domicile",
    "description": "la livraison ce fera à l'addresse fourni",
    "price": 0,
    "isActive": false,
    "createdAt": "2022-05-12T10:28:19.264Z",
    "_id": "627ce1b06ba58352b9229552",
    "__v": 0
}
```

### Name: get all shipping method

```javascript
Method : GET
URL : "https://app-ztrain.herokuapp.com/shipping-method/"
Reponse: status 200
[
    {
        "_id": "627cd09ad3baa39f455afa5e",
        "designation": "Livraison à domicile",
        "description": "la livraison ce fera à l'addresse fourni",
        "price": 0,
        "createdAt": "2022-05-12T09:17:06.844Z",
        "__v": 0
    }
]
```

### Name: update shipping method

```javascript
Method : PATCH
URL : "https://app-ztrain.herokuapp.com/shipping-method/update/:id_shipping_method"
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
    "designation": "Livraison à domicile",
    "description": "la livraison ce fera à l'addresse fourni",
    "price": 0.3
}
Reponse: status 200
{
    "_id": "628b509a7765a3a1bf4cf618",
    "designation": "Livraison à domicile",
    "description": "la livraison ce fera à l'addresse fourni",
    "price": 0.3,
    "isActive": false,
    "createdAt": "2022-05-23T08:54:37.669Z",
    "__v": 0
}
```

### Name: delete shipping method

```javascript
Method : DELETE
URL : "https://app-ztrain.herokuapp.com/shipping-method/delete/:id_shipping_method"
Headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Reponse: status 200
{
    "message": "suppression réussi"
}
```

### Name: create promo code

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/promo-code/create"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
    "code": "toto12",
    "reduction": 10,
    "expired_date": "2022-05-29"
}
Reponse: status 201
{
    "code": "toto13",
    "reduction": 10,
    "createdAt": "2022-05-23T09:32:09.819Z",
    "_id": "628b54dfb0d26c97a3dd6354",
    "__v": 0
}
```

### Name: get all promo code

```javascript
Method : GET
URL : "https://app-ztrain.herokuapp.com/promo-code/"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Reponse: status 200
[
    {
        "_id": "628227e76335ce77210ec327",
        "code": "toto12",
        "reduction": 10,
        "createdAt": "2022-05-16T10:30:10.476Z",
        "__v": 0
    },
    {
        "_id": "628b54dfb0d26c97a3dd6354",
        "code": "toto13",
        "reduction": 10,
        "createdAt": "2022-05-23T09:32:09.819Z",
        "__v": 0
    }
]
```

### Name: get specific promo code

```javascript
Method : GET
URL : "https://app-ztrain.herokuapp.com/promo-code/:code"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Reponse: status 200
{
    "_id": "628b54dfb0d26c97a3dd6354",
    "code": "toto13",
    "reduction": 10,
    "createdAt": "2022-05-23T09:32:09.819Z",
    "__v": 0
}
```

### Name: create promotion

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/promotion/create"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
    "reduction": 10,
    "isActive": true
}
Reponse: status 201
{
    "reduction": 10,
    "createdAt": "2022-05-23T10:21:31.351Z",
    "isActive": true,
    "_id": "628b60743294589d4836c0f7",
    "__v": 0
}
```

### Name: update promotion

```javascript
Method : PATCH
URL : "https://app-ztrain.herokuapp.com/promotion/update/:promotion_id"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
    "reduction": 10,
    "isActive": true
}
Reponse: status 200
{
    "_id": "628b60743294589d4836c0f7",
    "reduction": 10,
    "createdAt": "2022-05-23T10:21:31.351Z",
    "isActive": false,
    "__v": 0
}
```

### Name: get all promotion

```javascript
Method : GET
URL : "https://app-ztrain.herokuapp.com/promotion/"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Reponse: status 200
[
    {
        "_id": "6283b33d0effaba5dd6a94fc",
        "reduction": 10,
        "createdAt": "2022-05-17T14:36:08.364Z",
        "isActive": true,
        "__v": 0
    },
    {
        "_id": "628b60743294589d4836c0f7",
        "reduction": 10,
        "createdAt": "2022-05-23T10:21:31.351Z",
        "isActive": false,
        "__v": 0
    }
]
```

### Name: get specific promotion

```javascript
Method : GET
URL : "https://app-ztrain.herokuapp.com/promotion/:promotion_id"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Reponse: status 200
{
  "_id": "6283b33d0effaba5dd6a94fc",
  "reduction": 10,
  "createdAt": "2022-05-17T14:36:08.364Z",
  "isActive": true,
  "__v": 0
}
```

### Name: add rating to product

```javascript
Method : POST
URL : "https://app-ztrain.herokuapp.com/rating/"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
    "user": "user_id",
    "product": "product_id",
    "note": 3
}
Reponse: status 201
{
    "user": "620f561ae826bc0b18331a6e",
    "product": "620f561ae826bc0b18331a6e",
    "note": 3,
    "createdAt": "2022-05-23T10:24:09.062Z",
    "_id": "628b63e1a140eee8ddc868f6",
    "__v": 0
}
```

### Name: get all the products that the user rated

```javascript
Method : GET
URL : "https://app-ztrain.herokuapp.com/rating/:user_id"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Reponse: status 201
[
    {
        "_id": "628213593802e479480aba17",
        "user": "620f561ae826bc0b18331a6e",
        "product": {
            "_id": "6201241e177f015c515b8fa7",
            "createAt": "2022-02-07T12:59:16.049Z",
            "comments": [],
            "price": 9.99,
            "image": [
                "https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_500/img/yucca-artificiel-pot-noir-1000-13-10-190209_1.jpg"
            ],
            "description": "Type d'unité: lot (20 pièces / lot) poids du colis: 0,010 kg (. 0.02lb) Taille Package: 10cm x 10cm x 10cm (3.94in x 3.94in x 3.94in) Période pleine floraison: Été Type : Plantes Blooming de applicable Constellation: Poissons Flowerpot: plantées en Pot Cultiva",
            "name": "Yucca Elephantipes",
            "__v": 0,
            "isActive": true,
            "category": "6267bb40774b917c18ef6a5d",
            "id": "6201241e177f015c515b8fa7"
        },
        "note": 3,
        "createdAt": "2022-05-16T09:03:07.702Z",
        "__v": 0
    }
]
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
