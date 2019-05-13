class DoublyListNode {
  static from(value, prev, next) {
    if (value === undefined) {
      return new EmptyDoublyListNode();
    } else {
      return new DoublyListNode(value, prev, next);
    }
  }

  constructor(value, prev=new EmptyDoublyListNode(), next=new EmptyDoublyListNode()) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

class EmptyDoublyListNode extends DoublyListNode {
  constructor() {
    super(null, null, null);
    // By setting this.rest to "this" we can write
    //
    //   let { first, rest } = list;
    //
    // and guarantee that rest will always be a ListNode.
    this.prev = this
    this.next = this;
  }
}

function isEmpty(list) {
  return list === null || list instanceof EmptyDoublyListNode;
}

function insertAfter(value, list) {
  if (isEmpty(list)) {
    list.next = DoublyList(value, list)
    return list
  }
  
  const currentNext = list.next
  list.next = DoublyList(value, list, currentNext)
  return list
}

function insertBefore(value, list) {
  if (isEmpty(list)) {
    return DoublyList(value)
  }

  const newList = DoublyList(value, list.prev, list)
  newList.next.prev = newList
  
  return newList
}

function foldRight(fn, acc, list) {
  const { value, next } = list 
  if (isEmpty(next)) {
    return fn(value, acc)
  }
  return fn(value, foldRight(fn, acc, next))
}

function append(val, list) {
  return foldRight(insertBefore, DoublyList(val), list)
}

function prepend(val, list) {
  return foldRight(insertAfter, DoublyList(val), list)
}

function insert() {

}

function remove(list) {

}

function find() {

}

function traverse() {

}

const DoublyList = (value, prev, next) => DoublyListNode.from(value, prev, next)

module.exports = {
  DoublyList,
  EmptyDoublyListNode,
  insertAfter,
  insertBefore,
  append,
  prepend,
  remove,
}
