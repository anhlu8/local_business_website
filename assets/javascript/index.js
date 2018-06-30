
$.ajax({
    method: 'get',
    url: 'https://obscure-peak-76264.herokuapp.com/yelp',
    success: function(data){
        console.log(data)
        data.reviews.forEach(element => {
            $('#yelp-review')
            .append(`<div class="col-lg-4">
                        <img class="rounded-circle" src="${element.user.image_url}" alt="Generic placeholder image" width="140" height="140">
                        <h2>${element.rating} Stars!</h2>
                        <p class='card-text'><strong>${element.user.name}</strong> says "${element.text}"</p>
                        <p class='card-text'>${moment(element.time_created).format("MMM Do YY")}</p>
                        <p><a class="btn btn-danger" href="${element.url}" role="button">Read on Yelp!</a></p>
                    </div>`)

        });
    }
});


// Code Starts here
function initMap(){
    // Map Options
    var options = {
        zoom:15,
        center:{lat:39.93136579999999,lng:-75.16971189999998}
    }
    // Map Generator
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Icon
    var image = {
        url: "./assets/images/massageIcon1.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        // origin: new google.maps.Point(0,0), // origin
        // anchor: new google.maps.Point(0, 0) // anchor
    };
                
    //  Add marker
    // var image = 'assets/massageIcon1.png';
    var placeMarker = new google.maps.Marker({
        position:   {lat:39.93136579999999,lng:-75.16971189999998},
        map     :   map,
        // Adding Icon for the marker
        icon:   image
    });

    // Adding Info window on click Effect
    var infoWindow = new google.maps.InfoWindow({
        content: '<h4>1523, S 15th St, Philadelphia, PA 191146</h4>'
    });

    $("#map").addClass("rounded-circle");

    // Adding event Listener 
    $("#map").on("mouseenter", function(){
        infoWindow.open(map, placeMarker);
        console.log("Mouse is Entered");
        $(this).removeClass("rounded-circle");
        // Transformation Effects
        $(this).css({"height": "500px", "width": "100%", "transition-delay": ".003s"});
        // $("#mapDiv").css({"background": "url(https://upload.wikimedia.org/wikipedia/en/thumb/2/23/GoogleMaps.svg/250px-GoogleMaps.svg.png)"});
    });

      $("#map").on("mouseleave", function(){
        infoWindow.close();
        console.log("Mouse is Left");
        $(this).addClass("rounded-circle");
        // Transformation Effects
        $(this).css({"height": "400px", "width": "400px", "transition-delay": ".008s"});
    });
}

// Code Ends Here





