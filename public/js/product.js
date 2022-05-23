$(document).ready(function(event) {
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
                    <input type="submit" class="ajouter btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" value="Ajouter">
                    <input name="prodid" type="hidden" class="productclass" value="${produit.id}">
                  </form> 
              </div>`
              ));
          }, error : function (err) {
              console.log(err);
          }
      });
    }

    $(".ajouter").click(function (e) {
      e.preventDefault();
      console.log($(this).attr("prodid") + " TEST");
    });

   /*  $(".ajouter").click(function(event) {
      console.log($(this).attr("prodid") + " TEST");
     event.preventDefault();
        $.ajax({
          url: "/demande-product",
          type: "POST",
          data: $(this).attr("prodid"),
          success: function(res) {
            alert(res.prodid + "lblbllzbl");
          }, error : function (err) {
          console.log(data);
          }
        });
      });*/

    function getFromProductByIdFromAPI(id){
      let div = $("#staticBackdrop");
     // document.getElementById("#staticBackdrop").remove();
      $.ajax({
          url: "/api/pizza",
          type: "GET",
          success: function(res) {
            res.pizzas.filter(produit => produit.id == id).forEach(produit => div.append(`

              <div class="card" style="width: 15rem;">
              <img  src=${produit.url} class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${produit.nom}</h5>
                  <p class="card-text">Pizza à la tomate fait maison.</p>
                  <p class="card-text">Prix ${produit.prix}$</p>
                  <form action="/demande-product" method="post">
                    <input type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Ajouter </input>
                    <input id="${produit.id}" name="prodId" type="hidden" value="product">
                  </form> 
              </div>
              </div>`
              ));
          }, error : function (err) {
              console.log(err);
          }
      });
    }

/*
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
              <input id="${produit.id}" name="prodId" type="hidden" value="prix">
              </div>`
            ));
          }, error : function (err) {
              console.log(err);
          }
      });
      */

      const modal_select = document.getElementById('staticBackdrop')
      modal_select.addEventListener('show.bs.modal', event => {
        document.getElementById('menu');
          getFromProductByIdFromAPI()
          const button = event.relatedTarget
        //  const recipient = button.getAttribute('data-bs-whatever')
          const modalTitle = modal_select.querySelector('.modal-title')
          const modalBodyInput = modal_select.querySelector('.modal-body input')
         // modalTitle.textContent = `New message to ${recipient}`
         // modalBodyInput.value = recipient
      });
  });