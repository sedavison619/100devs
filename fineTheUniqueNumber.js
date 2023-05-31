function findUniq(arr) {
    let sortedArr = arr.sort( (a, b) => a - b)
    if (sortedArr[0] === sortedArr[1]){
      return sortedArr[sortedArr.length - 1] 
    }
    return sortedArr[0]
  }