let seacrhInputEl = document.getElementById("seacrhInput");

let rootEl = document.getElementById("root");

let imgTagEl = document.getElementById("imgTag");

function fetchApiData(data) {

    let resultContainer = document.createElement("div");
    rootEl.appendChild(resultContainer);

    // let userNameEl = document.createElement("h1");
    // userNameEl.textContent = data.data.full_name;
    // userNameEl.classList.add("user-name");
    // resultContainer.appendChild(userNameEl);

    // let breakTag = document.createElement("br");
    // userNameEl.appendChild(breakTag);

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

    // let imageEl = document.createElement("img");
    // imageEl.src = data.data.hd_profile_pic_url_info.url;
    // imageEl.classList.add("image-size","d-flex","flex-row","justify-content-center");
    // resultContainer.appendChild(imageEl);

    let profileContainerEl = document.getElementById("profileContainer");

    let profilePicEl = document.createElement("img");
    profilePicEl.src = data.data.hd_profile_pic_url_info.url;
    profilePicEl.classList.add("user-image");
    profileContainerEl.appendChild(profilePicEl);

    let userNameEl = document.createElement("h1");
    userNameEl.textContent = "Hello !" + "    " + data.data.full_name;
    userNameEl.classList.add("user-name");
    profileContainerEl.appendChild(userNameEl);

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
            console.log(data);
            fetchApiData(data);
            }) 
}


function submitButton () {
    if(seacrhInputEl.value === "") {
        return [0];
    }
    else {
        fetchingApi(seacrhInputEl.value);
        seacrhInputEl.value = "";

    }
}