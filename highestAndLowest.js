function highAndLow(numbers){
    let arr = numbers.split(' ')
    let newArr = arr.map(x => x = Number(x))
    let max = Math.max(...newArr) 
    let min = Math.min(...newArr)
    return `${max} ${min}`
  }