$("#spotify_submit").click(function(){

        var playlist = $("#playlist").val();

        var queryURL = "https://api.spotify.com/v1/search?q=" + playlist + "&type=playlist";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            if(response.length <1) {
                $("#output").html("Sorry, no playlist was found : (");
            } else {
                $("output").html(JSON.stringify(response));
            }
            var playlistContainer = $('<div class="playlist_Container">');
            $(".pretty_playlist_output").append(playlistContainer);

            for(var prop in response) {
                var element;
                if (prop == "Playlist" && response[prop] != "N/A") {
                    element = $("<img class='Playlist'>").attr("src", response[prop]);
                } else {
                    element = $("<h3 class='Playlist'>").text(prop + ": " + response[prop]);
                }
     
                playlistContainer.append(element);
            }
        });
    });