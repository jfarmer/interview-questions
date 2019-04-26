/*
Below we've defined two classes (ListNode, EmptyListNode) and one
helper function (List). We could use a primitive value like null to
represent an empty list, but you'll find that if you do you'll have
null checks all over the place.

For example, because a list is always an object, we can
destructure it.

  const { first, rest } = new ListNode(1);

If null represented the empty list then this would fail:

  const { first, rest } = null

since we can't destructure null.

In the same way that we have other empty collections like [] and {},
we want an empty list.

The List function — which is a wrapper for the ListNode.from factory
function — lets us create lists without typing 'new' a million times,
e.g.,

  list = List(1, List(2, List(3)))
  list = new ListNode(1, new ListNode(2, new ListNode(3)))

  list = List()
  list new EmptyListNode();
*/

class ListNode {
  static from(first, rest) {
    if (first === undefined) {
      return new EmptyListNode();
    } else {
      return new ListNode(first, rest);
    }
  }

  constructor(first, rest = new EmptyListNode()) {
    if (first === undefined) {
      throw new TypeError('Must pass value to ListNode(...) constructor. Use ListNode.from(...) to create empty lists.');
    }

    if (rest !== null && !(rest instanceof ListNode)) {
      throw new TypeError('ListNode#rest must be a ListNode.');
    }

    this.first = first;
    this.rest = rest;
  }
}

class EmptyListNode extends ListNode {
  constructor() {
    super(null, null);
    // By setting this.rest to "this" we can write
    //
    //   let { first, rest } = list;
    //
    // and guarantee that rest will always be a ListNode.
    this.rest = this;
  }
}

const List = (first, rest) => ListNode.from(first, rest);

module.exports = { List, ListNode, EmptyListNode };
