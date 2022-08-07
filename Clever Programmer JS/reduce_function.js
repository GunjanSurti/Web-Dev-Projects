// The reduce() method returns a single value: the function's accumulated result.

// array.reduce(function(), initialValue)

const actors = [
  { name: 'johnny', netWorth: 2000000 },
  { name: 'amber', netWorth: 10 },
  { name: 'matt', netWorth: 170000000 },
  { name: 'brad', netWorth: 300000000 },
  { name: 'leonardo', netWorth: 10000000 },
]

let result = actors.filter(actor => actor.netWorth > 10)
console.log(result)
let names = result.map(actor => actor.name).join(', ')
console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))
console.log(names)
