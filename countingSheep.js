function countSheeps(arrayOfSheep) {
    let total = 0
    arrayOfSheep.forEach( x => {
      if (x === true){
      total++}
    })
    return total
  }