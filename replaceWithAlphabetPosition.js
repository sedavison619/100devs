function alphabetPosition(text) {
    let lowerCaseText = text.toLowerCase()
    let arr = []
    for (let i = 0; i < lowerCaseText.length; i++){
      if (lowerCaseText.charCodeAt(i) <= 122 && lowerCaseText.charCodeAt(i) >= 97){
        arr.push(lowerCaseText.charCodeAt(i)-96)
      }
    }
    return arr.join(' ').toString()
  }