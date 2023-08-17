function sumDigits(number) {
    let num = Math.abs(number)
    return num.toString().split('').reduce( (total, current) => total += (+current), 0)
  }