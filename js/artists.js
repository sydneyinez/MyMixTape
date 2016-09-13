$("#artist_submit").click(function(){

        var artist = $("#artist").val();

        var queryURL = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            if(response.length <1) {
                $("#output").html("Sorry, no artist was found : (");
            } else {
                var theArtist = response.artists.items[0];
                $("#output").html("<div class='pretty'><a href=" + theArtist.href + ">More Info on Prince</a></div><br>" + "<h4>" + theArtist.name + "</h4></div>");
                console.log(theArtist);
            }
            // var artistContainer = $('<div class="artist_Container">');
            // $(".pretty_artist_output").append(artistContainer);

            // for(var prop in response) {
            //     var element;
            //     if (prop == "Artist" && response[prop] != "N/A") {
            //         element = $("<img class='artist'>").attr("src", response[prop]);
            //     } else {
            //         element = $("<h3 class='artist'>").text(prop + ": " + response[prop]);
            //     }
     
            //     artistContainer.append(element);
            // }
        });
    });
        



