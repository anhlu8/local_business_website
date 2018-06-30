$(document).ready(function () {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBeEiAJ3obF9UghQNxLKQuOmm05lR6WntI",
        authDomain: "group5project-5e419.firebaseapp.com",
        databaseURL: "https://group5project-5e419.firebaseio.com",
        projectId: "group5project-5e419",
        storageBucket: "group5project-5e419.appspot.com",
        messagingSenderId: "581260995102"
    };
    firebase.initializeApp(config);
    var database = firebase.database();


    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        var firstName = $("#firstName").val().trim();
        var lastName = $("#lastName").val().trim();
        var dateOfBirth = $("#dateOfBirth").val().trim();
        var gender = $("input[name=gender]:checked").val();
        var phoneNumber = $("#phoneNumber").val().trim();
        var emailAdress = $("#emailAdress").val().trim();
        var addressOne = $("#addressOne").val().trim();
        var addressTwo = $("#addressTwo").val().trim();
        var country = $("#country").val().trim();
        var state = $("#state").val().trim();
        var zip = $("#zip").val().trim();

    });

});
var open =  false

$("#terms").click(function(){
    if (open) {
        $("#slide-open").slideUp();
        open = !open
    }else {
        $("#slide-open").slideDown();
        open = !open
    }
})