# RankNumbers

Create a ranking from an array. It will sort an array, remove duplicates handle when values are equal in the array...

## How to use

Install the module

```
npm install rank-numbers
``` 

Require the module :

```JavaScript 
const {createRanking,getRank} = require('rank-numbers');
```

Create a ranking first : 

```JavaScript 
const myRanking = createRanking([1, 9, 10, 9, 7, 1, 1];
// myRanking === {"1": 4,"7": 3,"9": 2,"10": 1}
```

Get the rannking in a secondtime :

```JavaScript
const theRanking = getRank(10,myRanking);
// theRanking === 1
```

## run the tests

``` 
npm run test
```