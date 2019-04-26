const { List, ListNode, EmptyListNode } = require('./List');

function isEmpty(list) {
  return list === null || list instanceof EmptyListNode;
}

/**
 * Imporant thing to note about foldRight is that the arguments to fn
 * are reversed from foldLeft.
 *
 * foldLeft wants a function that receives the accumulator first and
 * current item second:
 *     (acc, item) => { ... }
 *
 * foldRight wants a function that receives the current item first
 * and the accumulator second:
 *     (item, acc) => { ... }
 *
 */
function foldRight(fn, acc, list) {

}

function foldLeft(fn, acc, list) {

}

/*
  * We've written append and prepend to illustrate why foldRight
  * is more natural for linked lists. Writing this as a call to foldLeft
  * is tedious. Don't spend time doing it.
  */
function append(value, list) {
  return foldRight((x, xs) => List(x, xs), List(value), list);
  // Or even shorter. Do you see why these are the same?
  // return foldRight(List, List(value), list);
}

// prepend(value, list) {
//   // Notice how prepend and the constructor are the same function!
//   // We comment this out because there's no reason to call
//   // prepend(first, rest) — just call List(first, rest)!
//   return List(value, list);
// }

function map(fn, list) {

}

function filter(fn, list) {

}

function maxBy(fn, list) {

}

function minBy(fn, list) {

}

function any(fn, list) {

}

function all(fn, list) {

}

function reverse(list) {

}

function sum(list) {

}

module.exports = {
  isEmpty,
  foldRight,
  foldLeft,
  append,
  map,
  filter,
  maxBy,
  minBy,
  any,
  all,
  reverse,
  sum,
}
