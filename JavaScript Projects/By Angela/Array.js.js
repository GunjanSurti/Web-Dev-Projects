
// x.includes(name of object contained in x if yes then gives true)


var x = ["Gunjan", "Soham", "Aniket", "Jenil", "Raghav"];  //"Gunjan" -> in qoutes is called string


var y = prompt("What is your name");

var z = x.includes(y)


if (z == true){
    alert("Welcome");
}

else{
    alert("You are not invited");
}
z