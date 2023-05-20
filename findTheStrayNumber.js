function stray(numbers) {
    let sorted = numbers.sort( (a, b) => a - b)
    if (sorted[0] === sorted[1]){
      return sorted[sorted.length-1]
    }
    return sorted[0]
  }