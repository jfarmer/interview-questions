module.exports = class Stack {
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
}
