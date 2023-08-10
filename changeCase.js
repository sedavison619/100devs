function solve(s){
    let upperCount = 0
    s.split('').forEach( x => x.toUpperCase() === x ? upperCount++ : upperCount += 0)
    if (upperCount > (s.length / 2)){
      return s.toUpperCase()
    }
    else {
    return s.toLowerCase()
    }
  }