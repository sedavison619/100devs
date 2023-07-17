function noBoringZeros(n) {
    if (n === 0){
      return n
    }
    let lastZero = n.toString().lastIndexOf('0')
    if (lastZero < (n.toString().length - 1)){
      return n
    }
    else {
      return noBoringZeros(Math.floor(n / 10))
    }
  }