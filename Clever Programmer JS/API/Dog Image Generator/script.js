// Can be written in same line
// This will find random dog image and we dont have to create our own database

//  .then is promise means after fetching what will code do next
// this will lead to asynchronous programming means code will not executed line wise

// fetch takes time to execute so the code which takes less time will execute first

const dogImageDiv = document.getElementById("dogImage");
const dogImgGenerator = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      dogImageDiv.innerHTML = `<img src ="${json.message}" height=300 weight=300/>`;
    });
};
dogImgGenerator();

document.getElementById("btn").onclick = () => {
  dogImgGenerator();
};
