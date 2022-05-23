$(document).ready(function(event) {


    $('.ajouter').click(function(eventclick) {
      eventclick.preventDefault();
      console.log("cliqued");
      $.ajax({
        url: "/demande-product",
        type: "POST",
        data: $(this).parent("form").attr("prodid"),
        success: function(res) {
          console.log(res.prodid + "lblbllzbl");
        }, error : function (err) {
            console.log(err);
        }
    });
   });


      const modal_select = document.getElementById('staticBackdrop')
      modal_select.addEventListener('show.bs.modal', event => {
          const button = event.relatedTarget
        //  const recipient = button.getAttribute('data-bs-whatever')
          const modalTitle = modal_select.querySelector('.modal-title')
          const modalBodyInput = modal_select.querySelector('.modal-body input')
         // modalTitle.textContent = `New message to ${recipient}`
         // modalBodyInput.value = recipient
      });
  });