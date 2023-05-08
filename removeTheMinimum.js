function removeSmallest(numbers) {
    let min = Math.min(...numbers)
    let newArr = []
    if (numbers.length === 0 || numbers.length === 1){
      return []
    }
    else{
      let count = 0
      for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === min && count === 0){
          count++
        }
        else if (numbers[i] != min || (numbers[i] === min && count > 0)){
          newArr.push(numbers[i])
        }
      }
    }
    return newArr
  }