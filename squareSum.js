function squareSum(numbers){
    return numbers.map(x => x*x).reduce((total, current) => total + current, 0)
  }