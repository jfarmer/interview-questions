const { Tuple } = require('./Tuple');
const { List } = require('./List');

function isEmpty(list) {
  return (list === null) || list.isEmpty();
}

function listToString(list) {
  if (isEmpty(list)) {
    return '()';
  }

  return foldRight1((val, acc) => `${val} -> ${acc}`, list);
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
  if (isEmpty(list)) {
    return acc;
  }

  return fn(list.first, foldRight(fn, acc, list.rest));
}

function foldRight1(fn, list) {
  if (isEmpty(list.rest)) {
    return list.first;
  }

  return fn(list.first, foldRight1(fn, list.rest));
}

function foldLeft(fn, acc, { first, rest }) {
  if (isEmpty(first)) {
    return acc;
  }

  return foldLeft(fn, fn(acc, first), rest);
}

function foldLeft1(fn, { first, rest }) {
  return foldLeft(fn, first, rest);
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
  return foldRight(
    (x, xs) => List(fn(x), xs),
    List(),
    list
  );
}

function filter(fn, list) {
  return foldRight(
    (x, xs) => fn(x) ? List(x, xs) : xs,
    List(),
    list
  );
}

/*
foldr :: 	(a -> b -> b) -> b -> [a] -> b
          (a,b) -> b
          b
          [a]
          b
zip xs ys = foldr step constF(List()) xs ys
*/

const print = (...args) => console.log(...args.map(x => x.toString()));

const done = () => List();
const step = (x, f) => list => {
  if (isEmpty(list)) {
    return [];
  }

  return List(Tuple(x, list.first), f(list.rest));
}

function zipFoldRight(xs, ys) {
  return foldRight(step, done, xs)(ys);
}

function zip(left, right) {
  if (isEmpty(left) || isEmpty(right)) {
    return List();
  }
  return List(Tuple(left.first, right.first), zip(left.rest, right.rest));
}

function zipIterative(left, right) {
  let leftHead = left;
  let rightHead = right;

  if (isEmpty(left) || isEmpty(right)) {
    return List();
  }

  let resultHead = List(Tuple(leftHead.first, rightHead.first));
  let currentHead = resultHead;
  let prevHead = null;

  leftHead = leftHead.rest;
  rightHead = rightHead.rest;

  while(!isEmpty(leftHead) && !isEmpty(rightHead)) {
    prevHead = currentHead;
    currentHead = List(Tuple(leftHead.first, rightHead.first));

    if (prevHead) {
      prevHead.rest = currentHead;
    }

    leftHead = leftHead.rest;
    rightHead = rightHead.rest;
  }

  return resultHead;
}

/*
suml :: [a] -> a
suml xs = suml' xs 0
  where suml' [] n = n   -- auxiliary function
        suml' (x:xs) n = suml' xs (n+x)

suml [1,2,3] = suml' [1,2,3] 0

suml' [1,2,3] 0 = suml' [2,3] (0+1)
                = suml' [3] ((0+1)+2)3)
                = suml' [] ((0+1)+2)+3)
                = ((0+1)+2)+3)

zip2 xs ys = foldr step done xs ys
  where done ys = []
        step x zipsfn []     = []
        step x zipsfn (y:ys) = (x, y) : (zipsfn ys)


myzip = foldr step (const []) :: [a] -> [b] -> [(a,b)]
    where step a f (b:bs) = (a,b):(f bs)
          step a f [] = []

function zip(xs, ys) {
  const done = x => [];
  const step = (x, f) => ({first, rest}) => {
    if (isEmpty(first)) {
      return [];
    }

    return List(Tuple(x, first), f(rest));
  }

  return foldRight(step, done, xs)(ys);
}

function step (a, f, list) {
  if (isEmpty(list)) {
    return List();
  }

  return List(Tuple(a, b.first), f(b.rest));
}

step()
*/

const max2 = (x, y) => x > y ? x : y;
const min2 = (x, y) => x < y ? x : y;

const maxBy2 = (fn, x, y) => (console.log(fn), fn(x) > fn(y) ? x : y);
const minBy2 = (fn, x, y) => fn(x) < fn(y) ? x : y

const partial = (fn, ...args) => (...restArgs) => fn(...args, ...restArgs);

function max(list) {
  return foldRight1(max2, list);
}

function min(list) {
  return foldRight1(min2, list);
}

function maxBy(fn, list) {
  return foldRight1(partial(maxBy2, fn), list);
}

function minBy(fn, list) {
  return foldRight1(partial(minBy2, fn), list);
}

function any(fn, list) {
  return foldRight(
    (val, acc) => fn(val) || acc,
    false,
    list
  );
}

function scanLeft(fn, acc, { first, rest }) {
  if (isEmpty(first)) {
    return List(acc);
  }

  return List(acc, scanLeft(fn, fn(acc, first), rest));
}

/*
scanLeft(add, 0, [1,2,3])
[0, add(0, 1), add(add(0,1), 2)]
*/
function all(fn, list) {
  return foldRight(
    (val, acc) => fn(val) && acc,
    false,
    list
  );
}

function reverse(list) {
  return foldLeft(
    (xs, x) => List(x, xs),
    List(),
    list
  );
}

const add = (x, y) => x + y;

function sum(list) {
  return foldRight(add, 0, list);
}

const mul = (x, y) => x * y;

function product(list) {
  return foldRight(mul, 1, list);
}

module.exports = {
  listToString,
  isEmpty,
  foldRight,
  foldRight1,
  foldLeft,
  foldLeft1,
  append,
  map,
  filter,
  max,
  min,
  maxBy,
  minBy,
  any,
  all,
  reverse,
  sum,
  product,
  scanLeft,
  zip,
  zipFoldRight,
  zipIterative,
}
