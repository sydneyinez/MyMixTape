$("#playlist_submit").click(function(){

        var song = $("#playlist").val();

        var queryURL = "https://api.spotify.com/v1/search?q=" + playlist + "&type=playlist";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            if(response.length <1) {
                $("#output").html("Sorry, no song was found : (");
            } else {
                console.log(response);
                var thePlaylist = response.playlist.items[0];
                //$("#output").html("<div class='pretty'><a href=" + the.href + ">More Info</a></div><br>" + "<h4>" + thePlaylist.name + "</h4></div>");
                //console.log(thePlaylist);
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
        })
         });