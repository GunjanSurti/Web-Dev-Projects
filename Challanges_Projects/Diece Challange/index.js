function main() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

  var randomImage1 = "images/dice" + randomNumber1 + ".png"; // selects dice1.png - dice6.png

  document.querySelectorAll("img")[0].src = randomImage1;// inserts randomImage1 in src

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].src = randomImage2;

  if (randomImage1 > randomImage2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins";
  } 
  else if (randomImage2 > randomImage1) {
    document.querySelector("h1").innerHTML = " Player 2 Wins 🎉";
  } 
  else if ((randomImage1 = randomImage2)) {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

// // x = player1  y = player2

// // main();

// function main() {
//   random();
//   function random() {
//     var x = Math.floor(Math.random() * 6) + 1;
//     var y = Math.floor(Math.random() * 6) + 1;

//     console.log(x, y);

//     if (x == 1) {
//       document.getElementById("img1").src = "images/dice1.png";
//     }
//     if (x == 2) {
//       document.getElementById("img1").src = "images/dice2.png";
//     }
//     if (x == 3) {
//       document.getElementById("img1").src = "images/dice3.png";
//     }
//     if (x == 4) {
//       document.getElementById("img1").src = "images/dice4.png";
//     }
//     if (x == 5) {
//       document.getElementById("img1").src = "images/dice5.png";
//     }
//     if (x == 6) {
//       document.getElementById("img1").src = "images/dice6.png";
//     }
//     if (y == 1) {
//       document.getElementById("img2").src = "images/dice1.png";
//     }
//     if (y == 2) {
//       document.getElementById("img2").src = "images/dice2.png";
//     }
//     if (y == 3) {
//       document.getElementById("img2").src = "images/dice3.png";
//     }
//     if (y == 4) {
//       document.getElementById("img2").src = "images/dice4.png";
//     }
//     if (y == 5) {
//       document.getElementById("img2").src = "images/dice5.png";
//     }
//     if (y == 6) {
//       document.getElementById("img2").src = "images/dice6.png";
//     }

//     if (x < y) {
//       result2();
//     } else if (x > y) {
//       result1();
//     } else if ((x = y)) {
//       result3();
//     }
//   }

//   function result1() {
//     document.querySelector("h1").innerHTML = "Player 1 Wins";
//   }

//   function result2() {
//     document.querySelector("h1").innerHTML = "Player 2 Wins";
//   }

//   function result3() {
//     document.querySelector("h1").innerHTML = "Draw";
//   }
// }
