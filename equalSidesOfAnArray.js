function findEvenIndex(arr){
    if (arr.length === 0 || arr.reduce (( total, current) => total += current, 0) - arr[0] === 0){
      return 0
    }
    else if (arr.reduce (( total, current) => total += current, 0) - arr[arr.length-1] === 0){
      return arr.length - 1
    }
    let sumLeft = 0
    for (let i = 0; i < arr.length; i++){
      let sumRight = 0
      sumLeft += arr[i]
      for (let j = arr.length - 1; j >= 0; j--){
        sumRight += arr[j]
        if (sumLeft === sumRight && i + 2 === j){
          return i+1
        }
      }
    }
    return -1
  }