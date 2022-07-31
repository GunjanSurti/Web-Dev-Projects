const wordFrequency = (phrase) => {
    let frequency = {}
    const words = phrase.split(" ")  //this will seperate words having "space"
    for (word of words){
        if (word in frequency){
            frequency[word] += 1
        }
        else {
            frequency[word] = 1
        }
    }

    return frequency
}
console.log("lol what lol")
console.log(wordFrequency("lol what lol"))

