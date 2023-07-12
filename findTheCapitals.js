var capitals = function (word) {
	let indices = []
  word.split('').forEach( ( x, i ) => x.toUpperCase() === x ? indices.push(i) : 'continue')
  return indices
};