function digPow(n, p){
  //convert n to an array of numbers
  let arr = n.toString().split('')
  //provide storage for a new array
  let newArr = []
  //iterate through the original array and multiply each item by p ascending
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i] ** p)
    //increment p
    p++
  }
  //turn the array back into an integer
  let num = +newArr.reduce( (total, current) => total + current, 0 )
  //check if the integer can be divided by the original number with no remainder
  if (num % n === 0){
    //if yes, return the quotient
    return num / n
  }
  //else return -1
  return -1
}