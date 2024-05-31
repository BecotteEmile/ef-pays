(function () {
  montrerParDefaut();
  let lien_categorie = document.querySelectorAll('.smth');
  console.log(lien_categorie);
  for (const elm of lien_categorie) {
    elm.addEventListener('mousedown', function() {
      const id = elm.id;
      let url = `https://gftnth00.mywhc.ca/tim09/wp-json/wp/v2/posts?search=${id}`;
      mon_fetch(url);
    })
  }

  function montrerParDefaut() {
    let url = `https://gftnth00.mywhc.ca/tim09/wp-json/wp/v2/posts?search=France`;
    fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(
          "La requête a échoué avec le statut " + response.status
        );
      }
      return response.json();
    })
    .then(function (data) {
	    let restapi = document.querySelector(".contenu__pays__restapi");
        restapi.innerHTML = "";
        data.forEach(function (article) {
          let titre = article.title.rendered;
          let contenu = article.excerpt.rendered.substring(0, 200);
          let carte = document.createElement("div");
          carte.classList.add("restapi__carte");
          
        carte.innerHTML = `
        <h3>${titre}</h3>
        <div class="contenu_destination_pays">
          <img src="https://via.placeholder.com/150" alt="">
          <p>${contenu}</p>
        </div>
        `;
       restapi.appendChild(carte);
      });
    })
  }
  
  function mon_fetch (url) {
    fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(
          "La requête a échoué avec le statut " + response.status
        );
      }
      return response.json();
    })
    .then(function (data) {
	  let restapi = document.querySelector(".contenu__pays__restapi");
        restapi.innerHTML = "";
        data.forEach(function (article) {
          let titre = article.title.rendered;
          let contenu = article.excerpt.rendered.substring(0, 200);
          let carte = document.createElement("div");
          carte.classList.add("restapi__carte");
          
        carte.innerHTML = `
        <h3>${titre}</h3>
        <div class="contenu_destination_pays">
          <img src="https://via.placeholder.com/150" alt="">
          <p>${contenu}</p>
        </div>
        `;
        // <p>${contenu}</p>
       restapi.appendChild(carte);
      });
    })
    .catch(function (error) {
    })};

})();



 