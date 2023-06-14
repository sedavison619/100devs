function openOrSenior(data){
  return data.map( x => x[0] > 54 && x[1] > 7 ? 'Senior' : "Open")
}