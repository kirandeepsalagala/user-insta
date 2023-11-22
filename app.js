let seacrhInputEl = document.getElementById("seacrhInput");

let rootEl = document.getElementById("root");

let imgTagEl = document.getElementById("imgTag");

const loaderEl = document.getElementById("loader");

function fetchApiData(data) {

    let resultContainer = document.createElement("div");
    rootEl.appendChild(resultContainer);

    let userNameEl = document.createElement("h1");
    userNameEl.textContent =  data.data.full_name;
    userNameEl.classList.add("user-name");
    resultContainer.appendChild(userNameEl);

    const bio = data.data.biography;

    let array = bio.split('/[\n,\n\n]/',1);
    console.log(array);


    let bioEl = document.createElement("h1");
    bioEl.textContent = array[0];
    bioEl.classList.add("user-name");
    resultContainer.appendChild(bioEl);

    let profileLink1 = document.createElement("a");
    profileLink1.href = data.data.hd_profile_pic_url_info.url;
    profileLink1.textContent = "1. Click this link for hd quality image";
    profileLink1.target = "_blank";
    profileLink1.classList.add("links-style")
    resultContainer.appendChild(profileLink1);
   

    breakTag = document.createElement("br");
    profileLink1.appendChild(breakTag);

    let profileLink2 = document.createElement("a");
    profileLink2.href = data.data.hd_profile_pic_versions[0].url;
    profileLink2.textContent = "2. Click this link for medium quality image";
    profileLink2.target = "_blank";
    profileLink2.classList.add("links-style");
    resultContainer.appendChild(profileLink2);

    breakTag = document.createElement("br");
    profileLink2.appendChild(breakTag);

    let profileLink3 = document.createElement("a");
    profileLink3.href = data.data.hd_profile_pic_versions[0].url;
    profileLink3.textContent = "3. Click this link for low quality image";
    profileLink3.target = "_blank";
    profileLink3.classList.add("links-style");
    resultContainer.appendChild(profileLink3);


    let profileContainerEl = document.getElementById("profileContainer");

    let profilePicEl = document.createElement("img");
    profilePicEl.src = data.data.hd_profile_pic_url_info.url;
    profilePicEl.classList.add("user-image");
    profileContainerEl.appendChild(profilePicEl);

    // let usernameContainerEl = document.createElement("div");
    // resultContainer.appendChild(usernameContainerEl);

    // let userNameEl = document.createElement("h1");
    // userNameEl.textContent =  data.data.full_name;
    // userNameEl.classList.add("user-name");
    // usernameContainerEl.appendChild(userNameEl);


    const number = data.data.follower_count;
    const formattedNumber = formatNumber(number);
    console.log(formattedNumber);

    const number2 = data.data.media_count;
    const postedNumber = postNumber(number2);
    console.log(postedNumber);

    const number3 = data.data.following_count;
    const followingNumber = followingCount(number3);
    console.log(followingNumber);


    let postsCountEl = document.createElement("h1");
    postsCountEl.textContent = postedNumber;
    postsCountEl.classList.add("posts-count", "text-center");
    profileContainerEl.appendChild(postsCountEl);

    let postEl = document.createElement("h1");
    postEl.textContent = "Posts";
    postEl.classList.add("postname");
    postsCountEl.appendChild(postEl);

    let followersCountEl = document.createElement("h1");
    followersCountEl.textContent = formattedNumber;
    followersCountEl.classList.add("posts-count", "text-center");
    profileContainerEl.appendChild(followersCountEl);

    let followersEl = document.createElement("h1");
    followersEl.textContent = "Followers";
    followersEl.classList.add("postname");
    followersCountEl.appendChild(followersEl);
    
    let followingCountEl = document.createElement("h1");
    followingCountEl.textContent = followingNumber;
    followingCountEl.classList.add("posts-count", "text-center");
    profileContainerEl.appendChild(followingCountEl);

    let followingEl = document.createElement("h1");
    followingEl.textContent = "Following";
    followingEl.classList.add("postname");
    followingCountEl.appendChild(followingEl);

    loaderEl.classList.add("d-none");

}

function formatNumber(number) {
    if (number >= 1000) {
      const suffixes = ["", "k", "M", "B", "T"];
      const suffixNum = Math.floor(("" + number).length / 4);
      let shortValue = parseFloat((suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(2));
      if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
      }
      return shortValue + suffixes[suffixNum];
    }
    return number;
  }
  
function postNumber(number2) {
    if (number2 >= 1000) {
      const suffixes = ["", "k", "M", "B", "T"];
      const suffixNum = Math.floor(("" + number2).length / 3);
      let shortValue = parseFloat((suffixNum !== 0 ? number2 / Math.pow(1000, suffixNum) : number2).toPrecision(2));
      if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
      }
      return shortValue + suffixes[suffixNum];
    }
    return number2;
  }

function followingCount(number3) {
    if (number3 >= 1000) {
      const suffixes = ["", "k", "M", "B", "T"];
      const suffixNum = Math.floor(("" + number3).length / 3);
      let shortValue = parseFloat((suffixNum !== 0 ? number3 / Math.pow(1000, suffixNum) : number3).toPrecision(2));
      if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
      }
      return shortValue + suffixes[suffixNum];
    }
    return number3;
  }

  // Example usage:


function fetchingApi (username_or_id_or_url) {

        let key = '80e004b79fmsh93c81eaada8f74bp107d7bjsn1f7e1d3a6074';
        let url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/info?&url_embed_safe=true&username_or_id_or_url=';

        fetch(url + username_or_id_or_url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
            }
        })

        .then(function(response) {
            return response.json();
            })
        
        .then(function(data){
            console.log(data);
            fetchApiData(data);
            }) 
        loaderEl.classList.add("d-none");
}


function submitButton () {
    if(seacrhInputEl.value === "") {
        return [0];
    }
    else {
        fetchingApi(seacrhInputEl.value);
        seacrhInputEl.value = "";
        loaderEl.classList.remove("d-none");
    }
}