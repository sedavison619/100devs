function findMultiples(integer, limit) {
    const arr = []
    for (let i = 1; (i*integer) <= limit; i++){
      arr.push(i * integer)
    }
    return arr
  }