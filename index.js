const root = document.getElementById("root");

function fetchUserInfo() {
  const inputElem = document.getElementById("input");
  const username = inputElem.value;

  const imgEle = document.getElementById("avatarImg");
  const profileName = document.getElementById("profileName");
  const email = document.getElementById("profileEmail");
  const location = document.getElementById("profileLocation");


  const url = "https://api.github.com/users/" + username;
axios
    .get(url)
    .then(function (response) {
      if(response.status === 200)
      {
        const data = response.data;
        imgEle.src = data.avatar_url;
        profileName.innerText = data.name;
        email.innerText = data.company;
      location.innerText = data.location;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
