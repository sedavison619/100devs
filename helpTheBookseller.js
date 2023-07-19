function stockList(listOfArt, listOfCat){
    if (listOfArt.length === 0 || listOfCat.length === 0){
      return ''
    }
    let bookList = Object.fromEntries(listOfCat.map(e => [e, 0]))
    for (let item of listOfArt){
      let cat = item[0]
      let num = item.split(' ').slice(1)
      if (cat in bookList){
        bookList[cat] += (+num)
      }
    }
    return Object.entries(bookList).map( x => `(${x.join(" : ")})`).join(" - ")
  }