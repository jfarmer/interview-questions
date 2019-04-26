# Linked Lists

Linked lists are surprisingly simple and natural once you've used them a bit.

With arrays, we're trained to think in terms of indexes.  What's at index `0`?  What's at index `1`?

With linked lists, it's more natural to think in terms of "the first item in the list" and "the rest of the list."

## Getting Familiar

A good way to get familiar with linked lists is to implement the "standard" collection methods on the linked list (`filter`, `map`, `reduce`, `max`, `min`, etc.).

We recommend writing non-destructive versions of these methods.  That is, make these functions work like `array.concat(value)` or `array.map(fn)`, which returns new arrays without modifying the original array.

We have a basic linked list implementation in [List.js](List.js) and a list of functions to impleent in [ListFunctions.js](ListFunctions.js).

## reduce vs reduceRight

The `reduce` you know and love is an instance of a more general pattern called a [fold](wikipedia-fold).  Specifically, it's a "left fold" and is sometimes written `foldl` or `foldLeft`.

As you might suspect given that `reduce` is a _left_ fold, there's also a _right_ fold. It exists in Javascript: [Array.prototype.reduceRight](mdn-array-reduceright).  It's sometimes written `foldr` or `foldRight`.

From here on we will write `foldLeft` and `foldRight` instead of `reduce` and `reduceRight`.

You'll discover than `foldRight` is more natural than `foldLeft` when dealing with linked lists.

What is `foldRight`?

If it's clear to you that `foldLeft` works from left to right then understanding `foldRight` is easy: it works from right to left.  If this seems redundant, that's not surprising.  Everything that can be written using `foldLeft` can also be written using `foldRight` and vice versa.

The fact that `foldLeft` works left-to-right and `foldRight` works right-to-left is what makes them more suited for operations on arrays and linked lists, respectively.  It mirror the fact that for arrays, appending is cheap and prepending is expensive, while for linked lists appending is expensive and prepending is cheap.

Like we said before, anything that can be written using `foldLeft` can also be written using `foldRight` and vice versa, so try writing versions of each method using both `foldLeft` and `foldRight` and see which is more natural.

### Left-to-right vs. Right-to-left

If the left-to-right behavior of `foldLeft` isn't clear, let's revisit how `foldLeft` works.

If we have a function `add` that adds two numbers and a list of numbers `[2,4,6]` then `foldLeft` works by "folding" the `add` operation over the list from  left to right, like so:

```javascript
const add = (x, y) => x + y;
foldLeft(add, 0, [2, 4, 6]) === add(add(add(0, 2), 4), 6);
                          === ((0 + 2) + 4) + 6);
```

As the name suggested, `foldRight` works from right to left:

```javascript
foldRight(add, 0, [2, 4, 6]) === add(2, add(4, add(6, 0)));
                             === (2 + (4 + (6 + 0)))
```

Because addition is [associative](wikipedia-associative-property), there's no difference between `foldLeft` and `foldRight` when we use it with the `add` function.  There would be a difference for a non-associative operation like subtraction.

That is, in general:

```javascript
const sub = (x, y) = x - y;
const [a, b, c] = [2, 4, 6];

sub(a, sub(b, c)) !== sub(sub(a, b), c);
(a - (b - c)) !== ((a - b) - c)
```

[wikipedia-fold]: https://en.wikipedia.org/wiki/Fold_(higher-order_function)
[mdn-array-reduceright]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
[wikipedia-associative-property]: https://en.wikipedia.org/wiki/Associative_property
