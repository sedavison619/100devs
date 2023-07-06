function tribonacci(signature,n){
    if (n === 0){
      return []
    }
    else if (n === 1){
      return [signature[0]]
    }
    else if (n === 2){
      return [signature[0], signature[1]]
    }
    for (let i = 0; signature.length < n; i++){
      let tribNum = (signature[i] + signature[i+1] + signature[i+2])
      signature.push(tribNum)
    }
    return signature
  }