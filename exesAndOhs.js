function XO(str) {
    let arr = str.toLowerCase().split('')
    let x = 0
    let o = 0
    arr.forEach(item => {
      if (item === 'x'){
        x++
      }
      else if (item === 'o'){
        o++
      }
    })
  if (x === o){
      return true
  }
  return false
}