
var x = prompt("What is your name : ");

 var y = x.slice(0,1);
y = y.toUpperCase();

var z = x.slice(1,x.length);

z = z.toLowerCase();

alert("Hello " + y + z );