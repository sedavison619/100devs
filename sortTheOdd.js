function sortArray(array) {
    console.log(array)
    let swaps = 0
    let oddHolder = 0
    let indexHolder = 0
    //loop over array and re-order the odd items
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 !== 0 && oddHolder !== 0){
        if (array[i] < oddHolder){
          array[indexHolder] = array[i]
          array[i] = oddHolder
          indexHolder = i
          swaps++
        }
        else {
          oddHolder = array[i]
          indexHolder = i
        }
      }
      else if (array[i] % 2 !== 0 && oddHolder === 0){
        oddHolder = array[i]
        indexHolder = i
      }
    }
    if (swaps > 0){
        sortArray(array)
    }
    return array
  }