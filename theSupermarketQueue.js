function queueTime(customers, n) {
    //make an array of tills
    let tills = []
    for (let i = 0; i < n; i++){
      tills.push(0)
    }
    //loop through customers to add customers to till with the lowest number
    for (let i = 0; i < customers.length; i++){
      let min = Math.min(...tills)
      for (let j = 0; j < tills.length; j++){
        if (tills[j] === min){
          tills[j] += customers[i]
          break
        }
      }
    }
    //return max value till
    return Math.max(...tills)
  }