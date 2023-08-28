function expressionMatter(a, b, c) {
    console.log(a, b, c)
    let highestTotal = 0
    if (a*b*c > highestTotal){
      highestTotal = a*b*c
      console.log('a', highestTotal)
    }
    if (((a + b) * c) > highestTotal){
      highestTotal = (a + b) * c
      console.log('b', highestTotal)
    }
    if ((a * (b + c)) > highestTotal){
      highestTotal = a * (b + c)
      console.log('c', highestTotal)
    }
    if ((a + b + c) > highestTotal){
      highestTotal = a + b + c
      console.log('d', highestTotal)
    }
    console.log('e', highestTotal)
    return highestTotal
  }