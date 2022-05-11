
var x = [];
var y = 1;

function fizzBuzz() {
    
      if ((y % 3) === 0 && (y % 5) === 0){
   
    x.push("FizzBuzz");
  
 }
   
  else if(y % 3 === 0){
   
   x.push("Fizz");
 }
   
  else if (y % 5 === 0){
   
    x.push("Buzz");
  
 }


  else{
   
   x.push(y);
 }
  
    console.log(x);
     y++;
    
 }

//   (15) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']