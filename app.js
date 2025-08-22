let getDiv = document.getElementById('getDiv');
let getSearch = document.getElementById('news');

let getNews = () => {
  document.getElementById('searchTerm').innerText = getSearch.value;
  getDiv.innerHTML = ''; 
  fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&apiKey=002bb144fc1d438d8c2e29873c547768`)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.articles.length; i++) {
        let article = data.articles[i];
        getDiv.innerHTML += `
          <div class="card m-3" style="width: 18rem;">
            <img src="${article.urlToImage ? article.urlToImage : 'default_image.jpg'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description ? article.description : 'No description available.'}</p>
              <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
          </div>
        `;
      }
    })
    .catch(err => console.log(err)); 
}


