$( document ).ready(function() {

  $( "body" ).on( "click", function() {
    
    $(".trash-item").each(function(index) {

      $(this).css({

        "margin-left": Math.floor(Math.random() * 50) + "%"

      });

    });


  });


});