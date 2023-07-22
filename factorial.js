function factorial(num){
    console.log(num)
    if (num < 0 || num > 12){
      throw RangeError();
    }
    else {
      let factorial = 1;
      for (let i = num; i > 0; i--){
        factorial *= i
      }
      return factorial
    }
  }