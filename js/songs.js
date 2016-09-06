$("#spotify_submit").click(function(){

        var artist = $("#song").val();

        var queryURL = "https://api.spotify.com/v1/search?q=" + song + "&type=song";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            if(response.length <1) {
                $("#output").html("Sorry, no song was found : (");
            } else {
                $("output").html(JSON.stringify(response));
            }
            var songContainer = $('<div class="song_Container">');
            $(".pretty_song_output").append(songContainer);

            for(var prop in response) {
                var element;
                if (prop == "Song" && response[prop] != "N/A") {
                    element = $("<img class='song'>").attr("src", response[prop]);
                } else {
                    element = $("<h3 class='song'>").text(prop + ": " + response[prop]);
                }
     
                songContainer.append(element);
            }
        });
    });
        
