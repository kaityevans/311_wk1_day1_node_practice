const split = (str, delim) => {
  // write code for strings.split
let splitStr = str.split(delim)
return splitStr
}

const pairs = (str) => {
  // write code for strings.pairs
  let pairedStrings = []
  for(let i = 0; i < str.length; i+=2) {
    let endIndex = i + 2
    pairedStrings.push(str.substring(i, endIndex))
  }
  return pairedStrings
}

const reverse = (str) => {
  // write code for strings.reverse
  // return str.split('').reverse().join("")
  // let reversed = "";
  // for (let i = 0; i < str.length; i--) {
  //   reversed 
  }
}

module.exports = {
  split,
  pairs,
  reverse
}