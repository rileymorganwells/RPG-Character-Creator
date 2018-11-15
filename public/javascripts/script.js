$(document).ready(function(){
  $("#deleteCharacters").click(function() {
      var url = "characters";
      $.ajax({
          url:url,
          type: "DELETE",
          success: function(data) {
              console.log("In deletion success");
          }
      })
  })
});