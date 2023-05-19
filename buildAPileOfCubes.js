function findNb(m) {
    let sum = 0
    for (let i = 1; i < (Math.cbrt(m)); i++){
      sum += i**3
      if (sum === m){
        return i
      }
    }
    return (-1);
  }