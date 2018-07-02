$(document).ready(function () {
    $("#customFirst").hide();
    $("#customLast").hide();
    $('#customDOB').hide();
    $('#phone').hide();
    $('#email').hide();

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
    var selections = {}


    $("#submitBtn").on("click", function (event) {
        event.preventDefault();
        var firstName = $("#firstName").val().trim() // ?  $("#firstName").val().trim() : null;
        if (firstName === '') {
            $('#customFirst').show();
        }
        var lastName = $("#lastName").val().trim() // ? $("#lastName").val().trim() : null;
        if (lastName === '') {
            $('#customLast').show();
        }
        var dateOfBirth = $("#dateOfBirth").val().trim() //? $("#dateOfBirth").val().trim() : null;
        if (dateOfBirth === '') {
            $('#customDOB').show();
        }
        var gender = $("input[name=gender]:checked").val() //? $("input[name=gender]:checked").val().trim() : null;
        var phoneNumber = $("#phoneNumber").val().trim() //? $("#phoneNumber").val().trim() : null;
        if (phoneNumber === '') {
            $('#phone').show();
        }

        var emailAdress = $("#emailAdress").val().trim() //? $("#emailAdress").val().trim() : null;
        if (emailAdress === '') {
            $('#email').show();
        }
        var addressOne = $("#addressOne").val().trim() ? $("#addressOne").val().trim() : null;
        var addressTwo = $("#addressTwo").val().trim() ? $("#addressTwo").val().trim() : null;
        var country = $("#country").val().trim() ? $("#country").val().trim() : null;
        var state = $("#state").val().trim() ? $("#state").val().trim() : null;
        var zip = $("#zip").val().trim() ? $("#zip").val().trim() : null;
        var questionOne = $("input[name=question1]:checked").val() ? $("input[name=question1]:checked").val() : null;
        var questionTwo = $("input[name=question2]:checked").val() ? $("input[name=question2]:checked").val() : null;
        var questionThree = $("input[name=question3]:checked").val() ? $("input[name=question3]:checked").val() : null;
        var questionFour = $("input[name=question4]:checked").val() ? $("input[name=question4]:checked").val() : null;
        var questionFive = $("input[name=question5]:checked").val() ? $("input[name=question5]:checked").val() : null;
        var questionSix = $("input[name=question6]:checked").val() ? $("input[name=question6]:checked").val() : null;
        var textAreaQ1 = $("#question1text").val().trim() ? $("#question1text").val().trim() : null;
        var textAreaQ2 = $("#question2text").val().trim() ? $("#question2text").val().trim() : null;
        var textAreaQ3 = $("#question3text").val().trim() ? $("#question3text").val().trim() : null;
        var textAreaQ4 = $("#question4text").val().trim() ? $("#question4text").val().trim() : null;
        var textAreaQ5 = $("#question5text").val().trim() ? $("#question5text").val().trim() : null;
        var textAreaQ6 = $("#question6text").val().trim() ? $("#question6text").val().trim() : null;
        var textAreaOtherConditions = $("#otherConditionsText").val().trim() ? $("#otherConditionsText").val().trim() : null;
        selections.allergies = $("#selAllergies")[0].checked;
        selections.arthritis = $("#selArthritis")[0].checked;
        selections.bloodclots = $("#selBloodClots")[0].checked;
        selections.cancertumors = $("#selCancerTumors")[0].checked;
        selections.heartfailure = $("#selHeartFailure")[0].checked;
        selections.diabetes = $("#selDiabetes")[0].checked;
        selections.fibromyalgia = $("#selHeartAttack")[0].checked;
        selections.highbloodpressure = $("#selHighBloodPressure")[0].checked;
        selections.immunesystem = $("#selImmuneSystem")[0].checked;
        selections.infectiousdisease = $("#selInfectiousDisease")[0].checked;
        selections.kidneyproblem = $("#selKidneyUrinary")[0].checked;
        selections.numbnesstingling = $("#selNumbnessTingling")[0].checked;
        selections.osteoporosis = $("#selOsteoporosis")[0].checked;
        selections.othercardiovascular = $("#selOthercardiovascular")[0].checked;
        selections.respiratory = $("#selRespiratory")[0].checked;
        selections.skinconditions = $("#selSkinConditions")[0].checked;
        selections.stroke = $("#selStroke")[0].checked;
        selections.otherconditions = $("#selOthers")[0].checked;


        var newClient = {
            FirstName: firstName,
            LastName: lastName,
            DateofBirth: dateOfBirth,
            Gender: gender,
            PhoneNumber: phoneNumber,
            Email: emailAdress,
            Address: addressOne,
            Address2: addressTwo,
            Country: country,
            State: state,
            Zip: zip,
            QuestionOne: questionOne,
            QuestionTwo: questionTwo,
            QuestionThree: questionThree,
            QuestionFour: questionFour,
            QuestionFive: questionFive,
            QuestionSix: questionSix,
            TextAreaOne: textAreaQ1,
            TextAreaTwo: textAreaQ2,
            TextAreaThree: textAreaQ3,
            TextAreaFour: textAreaQ4,
            TextAreaFive: textAreaQ5,
            TextAreaSix: textAreaQ6,
            TextAreaOtherConditions: textAreaOtherConditions,
            Selections: selections
        }

        database.ref().push(newClient);

    });

});