function duplicateCount(text){
  const letters = {}
  let repeated = 0
  let arr = text.toLowerCase().split('')
  arr.forEach( (x, i) => {
    if (!letters[x]){
      letters[x] = 1
    }
    else if (letters[x] === 1) {
      repeated++
      letters[x]++
    }
  })
  return repeated
}