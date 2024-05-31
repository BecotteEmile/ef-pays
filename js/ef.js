(function () {
  let lien_categorie = document.querySelectorAll('.smth');
  console.log(lien_categorie);
  for (const elm of lien_categorie) {
    elm.addEventListener('mousedown', function() {
     const id = elm.id;
      console.log(id);
      // let categorie = id;
      let url = `https://gftnth00.mywhc.ca/tim09/wp-json/wp/v2/posts?categories=${id}`;
      mon_fetch(url);
    })
  }
  
  // Effectuer la requête HTTP en utilisant fetch()
  function mon_fetch (url) {
    fetch(url)
    .then(function (response) {
      // Vérifier si la réponse est OK (statut HTTP 200)
      if (!response.ok) {
        throw new Error(
          "La requête a échoué avec le statut " + response.status
        );
      }

      // Analyser la réponse JSON
      return response.json();
      // console.log(response.json());
    })
    .then(function (data) {
	  let restapi = document.querySelector(".contenu__pays__restapi");
        restapi.innerHTML = "";
        data.forEach(function (article) {
          console.log(article);
          let titre = article.title.rendered;
          let contenu = article.excerpt.rendered.substring(0, 200);
          console.log("test");
          let carte = document.createElement("div");
          carte.classList.add("restapi__carte");
          
        carte.innerHTML = `
        <h2>${titre}</h2>
        <p>${contenu}</p>
        `;
       restapi.appendChild(carte);
       console.log("restApi " + restapi + " innerHTML " + restapi.innerHTML);
      });
    })
    .catch(function (error) {
    })};

})();



 