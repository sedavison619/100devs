function howMuchILoveYou(num) {
    console.log (num)
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    if (num > 6){
      num = num % 6
      if (num > 0){
        return arr[num - 1]
      }
      return arr[5]
    }
    return arr[num - 1]
  }
  