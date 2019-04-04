// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

    $("#search-button").click(function(){
      var value = $("input").val();
      var img_url = "https://api.giphy.com/v1/gifs/search?q=" + value + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: img_url,
      method: "GET",
      success: function(response) {
      var url = response.data[0].images.original.url;
    $('body').append('<img src=' + url + '>');
    },
    });
    });