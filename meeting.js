function meeting(s) {
    return s.toUpperCase().split(';').map( x => x.split(':').reverse()).sort().map( x => `(${x.join(', ')})`).join('')
}