const { List } = require('./List');
const { foldRight, maxBy } = require('./ListFunctions');

const ListOf = (...values) => values.reduceRight(List, List());

const list = ListOf(1,2,3,4,5);
