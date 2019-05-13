const { 
  DoublyList,
  insertAfter,
  insertBefore,
  append,
  prepend,
  remove,
} = require('./doubly-linked-lists/DoublyLinkedList')

let list = DoublyList(3)
list = append(20, list)
list = remove(list)

console.log(list)
//console.log('-------')
//console.log('-------')
//console.log(list.next)