let seacrhInputEl = document.getElementById("seacrhInput");

let rootEl = document.getElementById("root");

let imgTagEl = document.getElementById("imgTag");

const loaderEl = document.getElementById("loader");

function fetchApiData(data) {

    const resultContainer = document.createElement("div");
    resultContainer.setAttribute("id", "result-Container")
    rootEl.appendChild(resultContainer);

    let userNameEl = document.createElement("h1");
    userNameEl.textContent =  data.data.full_name;
    userNameEl.classList.add("user-name");
    resultContainer.appendChild(userNameEl);

    const bio = data.data.biography;

    let array = bio.split('/[\n,\n\n]/',1);
    // console.log(array);


    let bioEl = document.createElement("h1");
    bioEl.textContent = array[0];
    bioEl.classList.add("user-name");
    resultContainer.appendChild(bioEl);

    // let storyImageUrl = document.createElement("img");
    // storyImageUrl.src = data.data.items[0].thumbnail_url;
    // storyImageUrl.classList.add("user-image");
    // resultContainer.appendChild(storyImageUrl);

    let profileLink1 = document.createElement("a");
    profileLink1.href = data.data.hd_profile_pic_url_info.url;
    profileLink1.textContent = "Click this link for hd quality image";
    profileLink1.target = "_blank";
    profileLink1.classList.add("links-style")
    resultContainer.appendChild(profileLink1);
   

    breakTag = document.createElement("br");
    profileLink1.appendChild(breakTag);

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
    // console.log(formattedNumber);

    const number2 = data.data.media_count;
    const postedNumber = postNumber(number2);
    // console.log(postedNumber);

    const number3 = data.data.following_count;
    const followingNumber = followingCount(number3);
    // console.log(followingNumber);


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

    fetchStoryData(resultContainer);
}

function fetchStoryData(data){

    let videoContainerEl = document.getElementById("videoContainer");

    if (
            data &&
            data.data &&
            data.data.items &&
            Array.isArray(data.data.items) &&
            data.data.items.length > 0
          ) 
          {
            const thumbnails = data.data.items.map((item) => item.video_url);

            const thumbnailsContainer = document.createElement("div");
            videoContainerEl.appendChild(thumbnailsContainer);
            if (thumbnailsContainer) {
              thumbnails.forEach((thumbnailUrl) => {
                const video = document.createElement('video');
                video.classList.add("thumbnail");
                video.controls = true;
                video.src = thumbnailUrl;
                // console.log(thumbnailUrl);
                // Append the image to the 'thumbnailsContainer' in your UI
                thumbnailsContainer.appendChild(video);
              });
            } 
            else {
              console.error('thumbnailsContainer element not found');
            }
          } 
          // else {
          //   console.error('Invalid data format received from the API or no items found');
          // }
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
            // console.log(data);
            fetchApiData(data);
            }); 


      const rapidAPIKey = '80e004b79fmsh93c81eaada8f74bp107d7bjsn1f7e1d3a6074';
      const apiUrl = `https://instagram-scraper-api2.p.rapidapi.com/v1/posts?&url_embed_safe=true&username_or_id_or_url=`;

      fetch(apiUrl + username_or_id_or_url,{
        method: 'GET',
        headers: {
          'x-rapidapi-key': rapidAPIKey,
          'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Received data:', data); // Log the received data to inspect its structure
          fetchStoryData(data)
          // Check the structure of 'data' and adjust the code accordingly
          // if (
          //   data &&
          //   data.data &&
          //   data.data.items &&
          //   Array.isArray(data.data.items) &&
          //   data.data.items.length > 0
          // ) 
          // {
          //   const thumbnails = data.data.items.map((item) => item.video_url);

          //   const thumbnailsContainer = document.createElement("div");
          //   rootEl.appendChild(thumbnailsContainer);
          //   if (thumbnailsContainer) {
          //     thumbnails.forEach((thumbnailUrl) => {
          //       const video = document.createElement('video');
          //       video.classList.add("thumbnail");
          //       video.controls = true;
          //       video.src = thumbnailUrl;
          //       // console.log(thumbnailUrl);
          //       // Append the image to the 'thumbnailsContainer' in your UI
          //       thumbnailsContainer.appendChild(video);
          //     });
          //   } 
          //   else {
          //     console.error('thumbnailsContainer element not found');
          //   }
          // } else {
          //   console.error('Invalid data format received from the API or no items found');
          // }
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

