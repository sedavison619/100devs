function titleCase(title, minorWords) {
    if (!title){
      return '';
    }
    else if (!minorWords){
      return title.split(' ').map( x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(' ')
    }
   else {
     return title.split(' ').map( ( x, i ) => {
       if (minorWords.toLowerCase().split(' ').includes(x.toLowerCase()) && i != 0) {
         return x.toLowerCase();
       } 
       return x[0].toUpperCase() + x.slice(1).toLowerCase();
     }).join(' ');
   }
 }
 