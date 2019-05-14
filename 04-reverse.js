function reverse(input) {
  let result = []
  for (let i = input.length - 1; i >= 0; i--) {
    result.push(input[i])
  }
  return result
}

const input = [1, 2, 3]
const reversedInput = reverse(input)

console.log(reversedInput[0] === 3)
console.log(reversedInput[1] === 2)
console.log(reversedInput[2] === 1)
