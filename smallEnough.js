function smallEnough(arr, limit){
  let filteredArr = arr.filter( x => x > limit)
  if (filteredArr.length > 0){
    return false
  }
  return true
}