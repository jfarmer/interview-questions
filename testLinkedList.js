const { List } = require('./linked-lists/List')
const { 
  append,
  foldRight,
  foldLeft,
  map,
  filter,
  maxBy,
  minBy,
  any,
  all,
  reverse,
  sum,
} = require('./linked-lists/ListFunctions')

let list = List(2)
list = append(2, list)
list = append(3, list)
list = append(5, list)
list = append(7, list)

const add = (x, y) => x + y

function testFoldRight() {
  console.log('Testing FoldRight')
  console.log(foldRight(add, 0, list) === 19)
}

function testFoldLeft() {
  console.log('Testing FoldLeft')
  console.log(foldLeft(add, 0, list) === 19)  
}

function testMap() {
  console.log('Testing Map')
  const doubleAll = x => x * 2  
  doubleLinkedList = map(doubleAll, list)  
  const { first } = doubleLinkedList
  console.log(first === 4)
  console.log(foldRight(add, 0, doubleLinkedList) === 38)  
}

function testFilter() {
  console.log('Testing Filter')
  const filterTwos = x => x === 2
  filteredLinkedList = filter(filterTwos, list)
  const { first } = filteredLinkedList
  console.log(first === 2)
  console.log(foldRight(add, 0, filteredLinkedList) === 4)
}

function testMaxBy() {
  console.log('Testing Max By')
  console.log(foldRight(add, 0, filteredLinkedList) === 4)
}

function testAny() {
  console.log('Testing any')
  const anyIsThree = x => x === 3
  const anyIsTen = x => x === 10

  console.log(any(anyIsThree, list) === true)
  console.log(any(anyIsTen, list) === false)
}

function testAll() {
  console.log('Testing all')
  const allIsThree = x => x === 3
  const allIsNotNaN = x => !x.isNaN 

  console.log(all(allIsThree, list) === false)
  console.log(all(allIsNotNaN, list) === true)
}

function testReverse() {
  console.log('Testing reverse')
  const reverseLinkedList = reverse(list)

  const { first } = reverseLinkedList

  console.log(reverseLinkedList)
  console.log(first === 7)
}

testFoldRight()
testFoldLeft()
testMap()
testFilter()
testAny()
testAll()
//testReverse()
