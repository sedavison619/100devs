function rentalCarCost(d) {
    let cost = 0
    for (let i = 0; i < d; i++){
      cost += 40
    }
    if (d > 6){
      return cost - 50
    }
    if (d > 2){
      return cost - 20
    }
    return cost
  }