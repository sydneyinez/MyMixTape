$("#song_submit").click(function(){

        var song = $("#song").val();

        var queryURL = "https://api.spotify.com/v1/search?q=" + song + "&type=track";

        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            if(response.length <1) {
                $("#output").html("Sorry, no song was found : (");
            } else {
                console.log(response);
                var theSong = response.tracks.items[0];
                // $("#output").html("<div class='pretty'><a href=" + the.href + ">More Info</a></div><br>" + "<h4>" + theSong.name + "</h4></div>");
                //console.log(theSong);
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