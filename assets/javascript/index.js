
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
