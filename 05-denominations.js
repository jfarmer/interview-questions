function denominations(amount, denom=[], acc=0) {
  if (denom.length === 0) {
    return 0
  }

  if (denom.length === 1) {
    return acc + 1
  }
  
  lastDenom = denom[denom.length - 1]

  if (amount - lastDenom > lastDenom) {
    return denominations(amount - lastDenom, denom, acc)
  } else {
    denom.pop()
    return denominations(amount, denom, acc)
  }
}

console.log(denominations(5, []) === 0)
console.log(denominations(5, [10]) === 1)
console.log(denominations(5, [1]) === 1)
console.log(denominations(10, [1, 5]) === 3)
console.log(denominations(10, [1, 2]) === 6)
console.log(denominations(10, [1, 5, 10]) === 4)
