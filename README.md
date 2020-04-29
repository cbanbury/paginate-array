[![Build Status](https://semaphoreci.com/api/v1/netanel7799/paginate-array/branches/master/badge.svg)](https://semaphoreci.com/netanel7799/paginate-array)

# Array pagination

Simple pagination for arrays in javascript
## Installation
```js
npm install paginate-array
```

## Usage

```js

const paginate = require("paginate-array");
const collection = [...];

const paginateCollection = paginate(collection[,pageNumber, numItemsPerPage]);

console.log(paginateCollection)

{
    currentPage: 1,
    perPage: 10,
    total: 20,
    totalPages: 2,
    data: [...]
}
```
## Override default labels

```js

const paginate = require("paginate-array");
const collection = [...];

const labels = {
    currentPage: 'current_page',
    perPage: 'per_page',
    data: 'docs'
}

const paginateCollection = paginate(collection[,pageNumber, numItemsPerPage, labels]);

console.log(paginateCollection)

{
    current_page: 1,
    per_page: 10,
    total: 20,
    totalPages: 2,
    docs: [...]
}
```
