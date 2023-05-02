function sumArray(arr) {
    if (arr === null || arr === undefined || arr.length < 2){
      return 0
    }
    arr.sort((a, b) => a - b)
    arr.pop()
    arr.shift()
    return arr.reduce((total, current) => total + current, 0)
    
  }
