function oddOrEven(array) {
    if (array.reduce( (total, current) => total += current, 0) % 2 === 0){
      return 'even'
    }
   return 'odd'
 }