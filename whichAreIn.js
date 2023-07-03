function inArray(array1,array2){
  //declare r array
  let r = []
  let matches = []
  //loop array1 to determine substrings
  for (let i = 0; i < array1.length; i++){
    for (let j = 0; j < array2.length; j++){
      if (array2[j].includes(array1[i])){
        matches.push(array1[i])
      }
    }
  }
  for (let i = matches.length-1; i >= 0; i--){
    if (matches[i] !== matches[i-1]){
      r.push(matches[i])
    }
  }
  return r.sort()
}