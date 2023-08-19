function points(games) {
    let points = 0
    games.forEach( x => x[0] > x[2] ? points += 3 : x[0] < x[2] ? points += 0 : points++)
    return points
  }