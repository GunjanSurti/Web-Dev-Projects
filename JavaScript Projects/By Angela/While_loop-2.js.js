var x = [];


function beer() {
    var y = 99;

  while (y >= 0 ){
    if (y > 0 ){
     console.log(y + " bottles of beer on the wall," + y + " bottles of beer, Take one down and pass it around," + (y - 1) + " bottles of beer on the wall" )
              
    }
    else {
     console.log("No more bottles of beer on the wall," + " no more bottles of beer, Go to the store and buy some more ," + "99 bottles of beer on the wall" )
      
      }
      y--;
  }
}