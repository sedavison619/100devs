function twoSort(s) {
    let arr = s.sort( (a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    return arr[0].split("").join('***')
  }