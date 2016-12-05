$(document).ready(function(){

    // Event listener for our tvshows-button
    $('button').on('click', function() {
        var tvshows = $(this).data('tvshows');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+tvshows&api_key=dc6zaTOxFJmzC&tag=tvshows&limit=20";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {

          	// console.log(response)  

        var imageUrl = response.data.image_original_url;	

        var tvshowsImage = $("<img>");

        tvshowsImage.attr("src", imageUrl);
        tvshowsImage.attr("alt", "tvshows image");
        $("images").prepend(tvshowsImage);
});  
           	