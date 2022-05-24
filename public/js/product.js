$(document).ready(function(event) {

  const modal_select = document.getElementById('staticBackdrop');

  /* AJOUTER MODAL */ 
    $('.ajouter').click(function(eventclick) {
      eventclick.preventDefault();
      console.log("LALALALAL" + $(this).parent().children()[1].value);

      let id = $(this).parent().children()[1].value;
      
      $.ajax({
        url: "demande-product",
        type: "POST",
        data: id,
        success: function(res) {
          $(".modal-body").empty();
          $(".modal-body").append("ID : " + res);
          $(".panierclass").attr("value", res);
          $(".paniertype").attr("value", "pizza");
        }, error : function (err) {
            console.log(err + "erreur");
        }
    });
   });
  /* AJOUTER MODAL */ 

    $('.ajouter_panier').click(function(eventclick) {
      eventclick.preventDefault();
      console.log( $(this).parent().children()[1].value );
      console.log( $(this).parent().children()[2].value );

      let panierclass = $(this).parent().children()[1].value;  
      let paniertype = $(this).parent().children()[2].value;

      $.ajax({
        url: "panier-add",
        type: "POST",
        data: {
          panierid: (panierclass),
          paniertype: (paniertype)
        },
          success: function(res) {
          $(".offcanvas-body").append("ID : " + res);
        }, error : function (err) {
            console.log(err + "erreur");
        }
    });
  });

   /* PANIER */ 
   

 $('.retirer_panier').click(function(eventclick) {
  eventclick.preventDefault();
  console.log(($(this).parent()).children(".productclass") + " lalalala");
    $.ajax({
      url: "panier-delete",
      type: "POST",
      data: ($(this).parent()).children(".productclass"),
      success: function(res) {
        $(".modal-body").empty();
        $(".modal-body").append("oui" + res);
        console.log("super " + res);
      }, error : function (err) {
          console.log(err + "erreur");
      }
  });
});
   /* PANIER */ 



      modal_select.addEventListener('show.bs.modal', event => {
          const button = event.relatedTarget
        //  const recipient = button.getAttribute('data-bs-whatever')
          const modalTitle = modal_select.querySelector('.modal-title')
          const modalBodyInput = modal_select.querySelector('.modal-body input')
         // modalTitle.textContent = `New message to ${recipient}`
         // modalBodyInput.value = recipient
      });
  });