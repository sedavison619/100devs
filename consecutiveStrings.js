function longestConsec(strarr, k) {
  if (strarr.length === 0 || strarr.length < k || k <= 0){
    return ''
  }
  console.log(strarr, k)
  let strHolder = ''
  let longest = ''
  for (let i = 0; i <= strarr.length - k; i++){
    for (let j = 0; j < k; j++){
      strHolder += strarr[i + j]
    }
    if (strHolder.length > longest.length){
      longest = strHolder
      strHolder = ''
    }
    else {
      strHolder = ''
    }
  }
  return longest
}