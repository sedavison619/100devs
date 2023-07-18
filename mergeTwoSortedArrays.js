function mergeArrays(arr1, arr2) {
  let bigArr = arr1.concat(arr2).sort( (a, b) => a - b)
  return bigArr.filter( (x, i) => bigArr.indexOf(x) === i) 
}