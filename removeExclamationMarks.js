function removeExclamationMarks(s) {
  return s.split('').map( x => x === "!" ? '' : x).join('')
}