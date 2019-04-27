const Benchmark = require('benchmark');
const suite = Benchmark.Suite();

const { Tuple } = require('./Tuple');
const { List, ListNode } = require('./List');
const { listToString, zip, zipFoldRight, zipIterative } = require('./ListFunctions');

ListNode.prototype.toString = function() {
  return listToString(this);
};

function *range(start, end){
  for(let i = start;i < end;i++) {
    yield i;
  }
}

const print = (...args) => console.log(...args.map(x => x.toString()));
const ListOf = (...values) => values.reduceRight((xs, x) => List(x, xs), List());

// const left = ListOf(...range(0, 1000));
// const right = ListOf(...range(1000, 2000));

const left = ListOf(...range(1,5));
const right = ListOf(...range(30,35));

suite
  .add('zip (recursive)', () => {
    zip(left, right);
  })
  .add('zip (foldRight)', () => {
    zipFoldRight(left, right);
  })
  .add('zip (iterative)', () => {
    zipIterative(left, right);
  })
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(suite);
    console.log('Fastest is ' + suite.filter('fastest').map('name'));
  })
  .run();

// print('left:         ', left);
// print('right:        ', left);
// print('zip:          ', zip(left, right));
// print('zipFoldRight: ', zipFoldRight(left, right));
// print('zipIterative: ', zipIterative(left, right));
