//takes in a string, no special chars
//returns coded string

//examples given
//split string into array of words
//loop through array and perform decoding operations
//join and return new string

function decipherThis(str) {
    //split string
    let arr = str.split(' ')
    let codedArr = []
    //loop and decode
    for (let i = 0; i < arr.length; i++){
      let word = arr[i].split('').filter( x => x.charCodeAt(0) > 57)
      let charCode = String.fromCharCode(arr[i].split('').filter( x => x.charCodeAt(0) < 58).join(''))
      let valueHolder = word[0]
      word[0] = word[[word.length -1]]
      word[[word.length -1]] = valueHolder
      codedArr.push(`${charCode}${word.join('')}`)
    }
    return codedArr.join(' ')
  }; 