let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let blueDiv = document.getElementById("blue");

const squares = document.querySelectorAll(".colourSquares");

// forEach loop
const timesCilcked = { "red": 0, "yellow": 0, "blue": 0 };

squares.forEach((square) => {
  //loop
  square.onclick = () => {
    //event listner
    timesCilcked[square.value] += 1; //value increasing by 1
    square.innerText = timesCilcked[square.value]; // changing inner text
  };

  //   square.onclick = () => console.log(square.value);
});

const clearBtn = document.getElementById("clearButton");

clearBtn.onclick = () => clearSquare();
const clearSquare = () => {
  timesCilcked.red = 0
  timesCilcked.yellow = 0
  timesCilcked.blue = 0
  squares.forEach(square => square.innerText = "")
};

//  *******NOTES******
// redDiv.onclick = () => console.log("red") //for writing multiple lines write in {...} , () -> anonymus function
// yellowDiv.onclick = () => console.log("yellow")
// blueDiv.onclick = () => console.log("blue")
// console.log(squares[2].value) -> bulw
//redDiv.onclick = () => console.log("red")       is same as

// redDiv.onclick = function() {
//     console.log("red")
// }
