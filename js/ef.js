(function () {
  // console.log("rest API");
  
  // URL de l'API REST de WordPress
  // let url = "https://gftnth00.mywhc.ca/tim09/wp-json/wp/v2/posts?categories=3";
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

  function montrerParDefaut(params) {
    let url = `https://gftnth00.mywhc.ca/tim09/wp-json/wp/v2/posts?search=France`;
    fetch(url)
    .then(function (data) {
      // La variable "data" contient la réponse JSON
      // console.log(data);
	    let restapi = document.querySelector(".contenu__pays__restapi");
      // Maintenant, vous pouvez traiter les données comme vous le souhaitez
      // Par exemple, extraire les titres des articles comme dans l'exemple précédent
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
  }
  
  // Effectuer la requête HTTP en utilisant fetch()
  function mon_fetch (url) {
    fetch(url)
    // .then(function (response) {
    //   // Vérifier si la réponse est OK (statut HTTP 200)
    //   if (!response.ok) {
    //     throw new Error(
    //       "La requête a échoué avec le statut " + response.status
    //     );
    //   }

    //   // Analyser la réponse JSON
    //   return response.json();
    //   // console.log(response.json());
    // })
    .then(function (data) {
      // La variable "data" contient la réponse JSON
      // console.log(data);
	  let restapi = document.querySelector(".contenu__pays__restapi");
      // Maintenant, vous pouvez traiter les données comme vous le souhaitez
      // Par exemple, extraire les titres des articles comme dans l'exemple précédent
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


  // function fetchArticle(url){
  //     fetch(url)
  //     .then(function (response) {
  //       // Vérifier si la réponse est OK (statut HTTP 200)
  //       if (!response.ok) {
  //         throw new Error(
  //           "La requête a échoué avec le statut " + response.status
  //         )
  //         return response.json();
  //       } 
  //     })
  //     .then(function (data) {
	//       console.log(data);
  //     })
  //     .catch(function (error) {
  // })};

})();



 