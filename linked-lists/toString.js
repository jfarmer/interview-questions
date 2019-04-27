const { List, ListNode, EmptyListNode } = require('./List');
const { listToString, reverse, map, filter, any, all, sum, product, max, min } = require('./ListFunctions');

ListNode.prototype.toString = function() {
  return listToString(this);
};

const square = x => x * x;
const double = x => 2 * x;
const isEven = x => x % 2 === 0;

const allC = fn => list => all(fn, list);
const anyC = fn => list => any(fn, list);

const anyEven = anyC(isEven)
const allEven = allC(isEven);

const print = (...args) => console.log(...args.map(x => x.toString()));
const ListOf = (...values) => values.reduceRight((xs, x) => List(x, xs), List());

const list = ListOf(10, 21, 32, 43, 54);

print('list:    ', list);
print('reverse: ', reverse(list));
print('doubles: ', map(double, list));
print('squares: ', map(square, list));
print('evens:   ', filter(isEven, list));
print('anyEven: ', anyEven(list));
print('allEven: ', allEven(list));
print('sum:     ', sum(list));
print('product: ', product(list));
print('max:     ', max(list));
print('min:     ', min(list));
