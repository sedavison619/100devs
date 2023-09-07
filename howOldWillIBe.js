function  calculateAge(birthYear, countYear) {
    let difference = countYear - birthYear
    if (difference === 0){
      return `You were born this very year!`
    }
    else if (difference === 1){
      return `You are 1 year old.`
    }
    else if (difference > 0){
      return `You are ${difference} years old.`
    }
    else if (difference === -1){
      return `You will be born in 1 year.`
    }
    else {
      return `You will be born in ${Math.abs(difference)} years.`
    }
  }