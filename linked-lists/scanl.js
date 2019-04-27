const { List, ListNode, EmptyListNode } = require('./List');
const { listToString, scanl } = require('./ListFunctions');

ListNode.prototype.toString = function() {
  return listToString(this);
};

const add = (x, y) => x + y;

const print = (...args) => console.log(...args.map(x => x.toString()));
const ListOf = (...values) => values.reduceRight((xs, x) => List(x, xs), List());

const list = ListOf(1, 2, 3, 4);
print('list:                ', list);
print('scanl(add, 0, list): ', scanl(add, 0, list));
