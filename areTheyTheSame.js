function comp(arr1, arr2){
    if (arr1 == null || arr2 == null || arr1.length != arr2.length){
      return false
    }
    else if (arr1.length === 0 && arr2.length === 0){
      return true
    }
    else{
      let arr1Sqrd = arr1.map( x => x * x)
      let count = 0
      arr2.forEach(x => arr1Sqrd.includes(x) ? count++ : false)
      if (count === arr1.length){
        let num1 = arr2.reduce((total, current) => total + current, 0)
        let num2 = arr1Sqrd.reduce((total, current) => total + current, 0)
        if (num1 === num2){
          return true
        }
      }
      return false
    }
  }