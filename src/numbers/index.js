const isEven = (num) => {
  // write code for numbers.isEven
  num % 2 === 0 ? true : false
}

const sum = (arr) => {
  // write code for numbers.sum
  arr.reduce((initValue, currentValue) => initValue + currentValue, 0)
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
for(let i - 0; i < arr.length; i++){
  for(let j = 0; j < arr.length; j++){
    const total = arr[i] + arr[j]
    console.log(total)
    if(total === sum){
      return true
    }
  }
}
  return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}