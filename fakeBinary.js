function fakeBin(x){
    return (x.split('').map(x => x < 5 ? x = 0 : x = 1).join(''))
  }