function removeUrlAnchor(url){
  if (url.includes("#")){
    return url.split('').slice(0, url.indexOf("#")).join('')
  }
  return url
}