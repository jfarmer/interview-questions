class Stack {
  constructor() {
    this._stack = []
  }
  
  push(val) {
    this._stack.push(val)
  }

  pop() {
    return this._stack.pop()
  }

  peek() {
    return this._stack[this._stack.length - 1]
  }

  length() {
    return this._stack.length
  }

  isEmpty() {
    return this.length() === 0
  }
}

class Queue {
  constructor() {
    this._stack = new Stack()
    this._auxStack = new Stack()
  }
  
  enqueue(val) {
    while (!this._stack.isEmpty()) {
      this._auxStack.push(this._stack.pop())
    }

    this._stack.push(val)

    while(!this._auxStack.isEmpty()) {
      this._stack.push(this._auxStack.pop())
    }
  }

  dequeue() {
    return this._stack.pop()
  }

  length() {
    return this._stack.length()
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(5)
queue.enqueue(2)

console.log(queue)
console.log(queue.length() === 3)
console.log(queue.dequeue() === 1)
console.log(queue.length() === 2)