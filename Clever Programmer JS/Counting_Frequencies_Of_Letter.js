const letterFerquency = (phrase) => {

    console.log(phrase)
        let frequency = {} 
    for (const letter of phrase){
        if ( letter in frequency){
            frequency[letter]  += 1  
        }

        else {
            frequency[letter] = 1
        }
    }   
    return frequency
}

console.log(letterFerquency(prompt("Enter phrase")))

// Qazi Code

// const letterFrequency = (phrase) => {
//   // letterFrequency('haha') 👉 {'h': 2, 'a': 2}
//   console.log(phrase)
//   // make a `frequency` object {}
//   let frequency = {}
//   for (const letter of phrase) {
//     // check if letter exists in frequency
//     if (letter in frequency) {
//       // increment the value by +1
//       frequency[letter] += 1
//       // otherwise, set the value to 1
//     } else {
//       frequency[letter] = 1
//     }
//   }
//   return frequency
// }
