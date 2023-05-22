function solution(str, ending){
    let j = 1
    for (let i = (ending.length - 1); i >= 0; i--){
      if (ending[i] != str[str.length - j]){
        return false
      }
      j++
    }
    return true
  }