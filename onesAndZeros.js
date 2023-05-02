const binaryArrayToNumber = arr => {
  let binary = arr.join('')
  return parseInt(binary, 2)
};