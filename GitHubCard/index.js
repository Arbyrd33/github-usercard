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
  const stretchDiv = document.createElement("div");
  const followersDiv = document.createElement("div");
  const bioButton = document.createElement("button");
  const followersButton = document.createElement("button");



  userCard.classList.add("card");
  info.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  stretchDiv.classList.add("hidden")
  bioButton.classList.add("button");
  followersButton.classList.add("button");


  
  pfp.src = object[`avatar_url`]
  name.textContent= object.name;
  userName.textContent = object.login;
  location.textContent = object.location;
  gHLink.href = object[`html_url`];
  gHLink.textContent = object[`html_url`];
  followers.textContent = `Followers: ${object.followers}`;
  following.textContent = `Following: ${object.following}`;
  bio.textContent = object.bio;
  bioButton.textContent = `View Bio`;
  followersButton.textContent = `See Followers`;
  followersDiv.textContent = `GitHub users following ${object.login}: `




  userCard.appendChild(pfp);
  userCard.appendChild(info);
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(gHLink);
  profile.appendChild(followers);
  profile.appendChild(following);
  profile.appendChild(bioButton)
  profile.appendChild(followersButton);
  profile.appendChild(stretchDiv);
  stretchDiv.appendChild(bio);
  profile.appendChild(followersDiv);
  
  bioButton.addEventListener("click", ()=>{
    console.log(`${object.name}'s bio opened`);
    stretchDiv.classList.toggle("hidden");
  })

  followersButton.addEventListener("click", () => {
    followersDiv.classList.toggle("hidden");
  })

  entryPoint.appendChild(userCard);
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
function getFollowers(url){
  console.log(`followers:   `, url)
  axios.get(url)
    .then(res => {
      // console.log(`getFollowers data:   `, res.data);
      const data = res.data;
      for(let i  = 0; i < data.length; i++){
        // console.log(data[i].login)
        const follower = data[i].login


        if (data.length <= 1){
          console.log(`This user isn't super popular... yet.`)
        } else if (data.length > 0){
          console.log(`follower: `, follower)
        }
      }
    })
}

function getUser(user){
  axios.get(`https://api.github.com/users/${user}`)
    .then(res => {

      const data = res.data
      const followers = res.data.followers_url
      cardMaker(data);
      getFollowers(followers)
      
    })
    .catch(err => {
      console.log(err);
    })
}




const usersArray = [`Arbyrd33`, `reddest13`, `chance10113`, `CRHarding`, `bigknell`, `tetondan`, `dustinmyers`, `justsml`, `luishrd`, ];

usersArray.forEach(user => {
  console.log(user);
  getUser(user);

})