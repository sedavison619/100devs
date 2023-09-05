function rot13(message){
    let str = ''
    for (let i = 0; i < message.length; i++){
      let charCode = message.charCodeAt(i)
      if ((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)){
        charCode += 13
        str += String.fromCharCode(charCode)
      }
      else if ((charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122)){
        charCode -= 13
        str += String.fromCharCode(charCode)
      }
      else {
        str += String.fromCharCode(charCode)
      }
    }
    return str
  }