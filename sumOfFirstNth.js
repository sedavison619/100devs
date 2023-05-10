function SeriesSum(n){
    if (n === 0){
      return "0.00"
    }
    let j = 1
    let total = 0.00
    for (let i = 0; i < n; i++){
      total += (1 / j)
      j += 3
    }
    return total.toFixed(2).toString()
  }