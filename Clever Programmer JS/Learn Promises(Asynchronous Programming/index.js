// const waitingForSoup = () =>{
//     console.log("Soup")
// }
// Ternary Operators
// condition ? runs if true : runs if false

// setTimeout(waitingForSoup,2000) // 2000 is 2000ms = 2s wait ,after 2s code will run

// promise class is created
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("✅Soup is ready") : reject("❌No soup today");
  }, 1000);
});

// console.log(
//   promise1
//     .then((sucess) => console.log({ sucess })) // resolve will be caught here
//     .catch((error) => console.log({ error })) // reject will be caught here in "catch"
// );

const getSoup = async () => {
  // null / undefined
  const data = {rating :null, tip :null,pay:null, review:null}
  try {
    const soup = await promise1;
    console.log(soup);
    data.rating = 5
    data.tip = .2
    data.pay = 10 
    data.review = 5
    return data
    } catch(error) {  //reject will caught here 
    console.log(error);
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 2
    return data 
  }
};
getSoup().then(value => console.log(value))

// fetch("...") //promise
// .then(response =>response.json()) //promise
// .then(data =>console.log(data)) //data can be anything

//Asynchronous programming is used when we have to deal with other website or server or api request,database...

// api request , fetch request , post request  👉 async function

// Rules for using async / await
// 1. You must creat a function
// 2. You must use the keyword aync
// 3. Use the word await

// const getDog = async () =>{  // async tells that this function is asynchronous
//   const url = "https://dog.ceo/api/breeds/image/random"
//   const response = await fetch(url)   // await ==> .then(response => response.json())
//   const data = await response.json()  // now this "data" can be used anywhere in this function, response.json() is stored in data
//   console.log(data.message)

// }
// console.log(getDog());
