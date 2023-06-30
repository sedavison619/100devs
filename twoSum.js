function twoSum(numbers, target) {
    let indexes = []
    for (let i = 0; i < numbers.length; i++){
      for (let j = 0; j < numbers.length; j++){
        if (numbers[i] + numbers[j] === target && i !== j){
          return [i, j]
        }
      }
    }
  }