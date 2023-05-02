function positiveSum(arr) {
    let total = 0
    arr.forEach(x => {
      if (x > 0){
        total += x
      }
    })
    return total
  }