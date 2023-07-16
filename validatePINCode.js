function validatePIN (pin) {
  let nums = '0123456789'
  if (pin.length !== 4 && pin.length !== 6){
    return false
  }
  for (let i = 0; i < pin.length; i++){
    if (!nums.includes(pin[i])){
      return false
    }
  }
  return true
}