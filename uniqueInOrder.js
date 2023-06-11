var uniqueInOrder=function(iterable){
    if (iterable.length === 0){
      return []
    }
    if (typeof iterable === "string"){
      const stringArr = []
      for (let i = 0; i < iterable.length - 1; i++){
        if (iterable[i] !== iterable[i + 1]){
          stringArr.push(iterable[i])
        }
      }
      stringArr.push(iterable[iterable.length - 1])
      return stringArr
    }
    else {
      const newArr = []
      for (let i = 0; i < iterable.length - 1; i++){
        if (iterable[i] !== iterable[i + 1]){
          newArr.push(iterable[i])
        }
      }
      newArr.push(iterable[iterable.length - 1])
      return newArr
    }
  }