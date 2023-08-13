function reverseLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return str.split('').reverse().filter( x => alphabet.includes(x.toLowerCase())).join('')
}