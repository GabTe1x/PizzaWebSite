$(document).ready(function() {

    //Methode ajax
    getFromProductFromAPI("pizza");
//      getFromProductFromAPI("boisson");
    function getFromProductFromAPI(name){
      let div = $("#"+name);
      $.ajax({
          url: "/api/"+name,
          type: "GET",
          success: function(res) {
            res.pizzas.forEach(produit => div.append(`
              <div class="card" style="width: 15rem;">
              <img  src=${produit.url} class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${produit.nom}</h5>
                  <p class="card-text">Pizza à la tomate fait maison.</p>
                  <p class="card-text">Prix ${produit.prix}$</p>
                  <a href="#" class="btn btn-primary">Ajouter </a>
              </div>
              </div>`
            ));
          }, error : function (err) {
              console.log(err);
          }
      });
    }


    let divboisson = $("#boisson");
    //Methode ajax
    $.ajax({
          url: "/api/boisson",
          type: "GET",
          success: function(res) {
            res.boisson.forEach(boisson => divboisson.append(`
              <div class="card" style="width: 15rem;">
              <img  src=${boisson.url} class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${boisson.nom}</h5>
                  <p class="card-text">Pizza à la tomate fait maison.</p>
                  <p class="card-text">Prix ${boisson.prix}$</p>
                  <a href="#" class="btn btn-primary">Ajouter </a>
              </div>
              </div>`
            ));
          }, error : function (err) {
              console.log(err);
          }
      });
  });