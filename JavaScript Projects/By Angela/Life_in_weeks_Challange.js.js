
// x = days , y = weeks , z = months

  var age  = prompt("Enter your Age : ");
    lifeInWeeks( age);

function lifeInWeeks(age) {
    
    var x = (90 - age ) *  (52 * 7 + 1);
    
    var y = (90 - age) * 52 ;
    
    var z = (90 - age ) * 12;
  console.log("You have "+ x + " days " + y + " weeks " + z + " months left .");

}






