function calculateYears(principal, interest, tax, desired) {
  if (principal === desired){
    return 0
  }
    for (let i = 1; i >= 0; i++){
      principal += principal * interest - tax * principal * interest
      if (principal >= desired){
        return i
      }
    }
}