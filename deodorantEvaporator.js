function evaporator(content, evap_per_day, threshold){ 
    let days = 0
    let lowestAmount = content * (threshold / 100)
    do{
      content -= content * (evap_per_day / 100)
      days++
    }
    while (content > lowestAmount)
    return days
  }