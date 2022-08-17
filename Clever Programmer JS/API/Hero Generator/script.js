// 5394526210585788 super hero api acess token
//10223569763528853

// += will all

const SUPERHERO_TOKEN = "5394526210585788";
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const heroImageDiv = document.getElementById("heroImage");

const searchButton = document.getElementById("searchButton");
const newHeroButton = document.getElementById("newHeroButton");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  // name 👉 base_url/search/spider-man(multiple results)
  //json.result[0].image.url
  //id 👉 base_url/id
  //json.image.url
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      showHeroInfo(json);
    });
};

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero);

      // heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 weight=200/> ${stats}`;
    });
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♀️",
  power: "🔥",
  combat: "⚔",
};
const showHeroInfo = (character) => {
  const name = ` <h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}" height=200 weight=200/>`;
  // for (stat in character.powerstats) {   // does same as below
  //   console.log(stat)
  //  }
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      //stat = strength,speed etc
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} : ${
        character.powerstats[stat]
      }</p>`;
      // character.powerstats[stat] = value like 83,10,100 etc stat's value
    })
    .join("");

  heroImageDiv.innerHTML = `${name}${img}${stats}`;
  return stats;
};

newHeroButton.onclick = () => getSuperHero(randomHero());
searchButton.onclick = () => getSearchSuperHero(searchInput.value);
const randomHero = () => {
  // this will give random number
  let x = Math.floor(Math.random() * 732) + 1;
  return x;
};

// to attach image to app
//document.querySelector("body").innerHTML += getSuperHero(45)
// this will add besides it instead of replacing

//console.log(Object.keys(character.powerstats))
//this will change all powerstats in "array"->(6) ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat']

//.map() returns array and loops through array
//heroPowerDiv.innerHTML = `Strength : ${hero.powerstats.strength}<P>Intelligence : ${intelligence}</P>`; => Strength : "value", Intelligence : "value"
