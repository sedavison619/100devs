function shortcut (string) {
    let vowels = 'aeiou'
    return string.split('').filter( x => !vowels.includes(x)).join('')
  }