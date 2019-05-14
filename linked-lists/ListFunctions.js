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
  const { first, rest } = list

  if (isEmpty(rest)) {
    return fn(first, acc)
  }

  return fn(first, foldRight(fn, acc, rest))
}

function foldLeft(fn, acc, list) {
  const { first, rest } = list

  if (isEmpty(rest)) {
    return fn(acc, first)
  }

  return foldLeft(fn, fn(acc, first), rest)
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

function map(fn, list) {
  return foldRight((x, y) => List(fn(x), y), new EmptyListNode(), list)
}

function filter(fn, list) {
  return foldRight((x, y) => fn(x) ? List(x, y) : y, new EmptyListNode(), list)
}

function maxBy(fn, list) {

}

function minBy(fn, list) {

}

function any(fn, list) {
  return foldRight((x, y) => fn(x) || y, false, list)
}

function all(fn, list) {
  return foldRight((x, y) => fn(x) && y, true, list)
}

function reverse(list) {
  //return foldRight((x, y) => x != null ? append(x, y) : y, new EmptyListNode(), list) 
}

function sum(list) {
  return foldRight((x, y) =>  x + y, 0, list)
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
