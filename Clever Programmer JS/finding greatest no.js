const max = (numbers) =>{
    let result = numbers[0];
    
    //loop
    for (const number of numbers) {
        if (number > result ){
            result = number;
        }
    }
    return { result }
}

console.log(max([55,1,6,88,1,100,55,69,92,52]))        //max( [...] )