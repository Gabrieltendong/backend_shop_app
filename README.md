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
URL : "https://ztrain-shop.herokuapp.com/auth/login/"
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
URL : "https://ztrain-shop.herokuapp.com/user/register"
Headers: {
  "Content-Type": "application/json"
}
Request : {
  "email": "test@test.com",
  "password": "password",
  "adress":"douala bassong",
  "age": 10
}
Reponse: status 201
{
    "user": {
        "createdAt": "2022-02-07T12:59:15.884Z",
        "adress": "douala bassong",
        "age": 10,
        "email": "test@test.com",
        "_id": "62012efe177f015c515b8fc5",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDEyZWZlMTc3ZjAxNWM1MTViOGZjNSIsImlhdCI6MTY0NDI0NDczNCwiZXhwIjoxNjQ0MzMxMTM0fQ.aKH1mHS7tLC0ebxTmMpot6OVfQUUBX3Jkn1l6SdidhQ"
}
```

### Name: create product
```javascript
Method : POST
URL : "https://ztrain-shop.herokuapp.com/product/create"
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZjNGIxNDVmOWIxZWY5YzZhMzZmMiIsImlhdCI6MTY0MzI3NDEzMCwiZXhwIjoxNjQzMzYwNTMwfQ.x5TxNZ-ffPhjy79Uwj7uVTuQkd-cffDZl7xqaY6xvRM"
}
Request : {
  "name": "Samsung Note 9",
  "description": "Samsung Note 9 description",
  "image":"url image",
  "price": 10,
  "isActive": false
}
Reponse: status 201
{
    "createAt": "2022-02-07T12:59:16.049Z",
    "comments": [],
    "price": "10000",
    "image": "qnbn,db,wnxcbn,bsqd,;ndqsd",
    "description": "new description",
    "name": "first product 7",
    "_id": "6201241e177f015c515b8fa7",
    "__v": 0
}
```

### Name: add product to cart
```javascript
Method : POST
URL : "https://ztrain-shop.herokuapp.com/cart/add"
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
URL : "https://ztrain-shop.herokuapp.com/cart/update"
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
URL : "https://ztrain-shop.herokuapp.com/cart/delete"
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
URL : "https://ztrain-shop.herokuapp.com/cart/delete/:user_id"
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
URL : "https://ztrain-shop.herokuapp.com/cart/:user_id"
Request : {
}
Reponse: status 200
[
    {
        "_id": "620126d0177f015c515b8fb6",
        "createdAt": "2022-02-07T12:59:16.057Z",
        "quantity": 4,
        "user_id": "61efc4b145f9b1ef9c6a36f2",
        "product_id": "61f2a5c50c592f3502082ca7",
        "__v": 0
    },
    {
        "_id": "62012da5177f015c515b8fbd",
        "createdAt": "2022-02-07T12:59:16.057Z",
        "quantity": 4,
        "user_id": "61efc4b145f9b1ef9c6a36f2",
        "product_id": "62012d97177f015c515b8fb8",
        "__v": 0
    }
]
```

### Name: add comment to product
```javascript
Method : POST
URL : "https://ztrain-shop.herokuapp.com/product/comments/add"
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
URL : "https://ztrain-shop.herokuapp.com/command/create"
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
	}
}
Reponse: status 201
{
    "message": "Bravo!!! votre commande a été validé"
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
