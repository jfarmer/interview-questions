const Tuple = (a, b) => {
  const obj = [a, b]
  obj.toString = () => `(${a}, ${b})`;

  return Object.freeze(obj);
}

module.exports = { Tuple };
