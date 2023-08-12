function strCount(str, letter){  
    let count = 0
    str.split('').forEach( x => x === letter ? count++ : count += 0)
    return count
  }