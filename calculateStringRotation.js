function shiftedDiff(first,second){
  const shift = second.indexOf(first[0])
  const secondSorted = []
  const secondArr = second.split('')
  for (let i = shift; i < second.length; i++){
    secondSorted.push(secondArr[i])
  }
  for (let i = 0; i < shift; i++){
    secondSorted.push(secondArr[i])
  }
  for (let i = 0; i < first.length; i++){
   if (first[i] != secondSorted[i]){
      return -1
    }
  }
  return shift
}