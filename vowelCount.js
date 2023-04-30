function getCount(str) {
    let arr = str.split('')
    let vowels = 0
    arr.forEach(x => {
      if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u'){
        vowels++
      }
    })
    return vowels
  }