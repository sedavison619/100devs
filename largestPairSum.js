function largestPairSum (numbers) {
    let sortedArr = numbers.sort( (a, b) => a - b)
    return sortedArr[sortedArr.length - 2] + sortedArr[sortedArr.length - 1]
  }