import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios.get(`https://api.github.com/users/Arbyrd33`)
//   .then(res => {
//     console.log(res.data);
//     const data = res.data;
//     cardMaker(data);
//   })
//   .catch(err=>{
//     console.log(`Attempt unsuccessful.`)
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log(`Get request resolved!`)
//   })


  const entryPoint = document.querySelector(".cards");
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const testObject = {
  avatar_url: `https://stickerly.pstatic.net/sticker_pack/X7LRrK6qM5Snm4H8rtpSA/B8S0JS/31/7f463146-816d-4382-8e34-765651476a7d.png`,
  followers: 0,
  following: 1,
  html_url: `www.haha.wow`,
  location: `Hell`,
  login: `purrfection`,
  name: `cheesewiz`,
  bio: `aaaaaaaaaaaaAAAAAAAAAAAAAAAAOOOoooOooOOOOHHhhhhh`

}
function cardMaker(object){
const userCard = document.createElement("div");
const pfp = document.createElement("img");
const info = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
    const gHLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  userCard.classList.add("card");
  info.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  
  pfp.src = object[`avatar_url`]
  name.textContent= object.name;
  userName.textContent = object.login;
  location.textContent = object.location;
  gHLink.href = object[`html_url`];
  gHLink.textContent = object[`html_url`];
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = object.bio;


  userCard.appendChild(pfp);
  userCard.appendChild(info);
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(gHLink);
  profile.appendChild(followers);
  profile.appendChild(following);
  profile.appendChild(bio);
  
  entryPoint.appendChild(userCard);
  console.log(userCard);
  return userCard;
}

cardMaker(testObject);
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function getUser(user){
  axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
      console.log(res.data);
      const data = res.data;
      cardMaker(data);
    })
}

getUser(`bigknell`)
const usersArray = [`Arbyrd33`, `reddest13`, `chance10113`, `tetondan`, `dustinmyers`, `justsml`, `luishrd`, ];

usersArray.forEach(user => {
  console.log(user);
  getUser(user);

})