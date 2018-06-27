let api = "https://api.giphy.com/v1/gifs/search?q=";
let input = document.querySelector(".text_search");
let form = document.querySelector("form");
let q = 'gif';
let apiKey = "&api_key=nDEwBcpLAfP6yUebMJO2rWWrm53Jdnoc";
let photoContainer = document.querySelector('.photos');

// let finalApi = `${api}${q}${apiKey}`;

let getImg = (e) => {
  photoContainer.innerHTML = '';
  input.value = '';
  let request = new XMLHttpRequest();
  request.open('GET', "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=nDEwBcpLAfP6yUebMJO2rWWrm53Jdnoc", true);
  request.onload = function() {
    let data = JSON.parse(this.response);
    console.log(data);
    for(let i = 0; i < data.data.length; i++){
      let img = document.createElement('img');
      img.src = data.data[i].images.original.url;
      photoContainer.appendChild(img);
    }
  }
  request.send();
}

getImg();


form.addEventListener('submit', (e) => {
  e.preventDefault();
  q = input.value;
  getImg();
  console.log(input.value);
})
