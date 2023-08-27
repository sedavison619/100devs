function stringClean(s){
    let numStr = '0123456789'
    return s.split('').filter(x => !numStr.includes(x)).join('')
  }