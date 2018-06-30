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
    var selections = {
}

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
        var questionOne = $("input[name=question1]:checked").val();
        var questionTwo = $("input[name=question2]:checked").val();
        var questionThree = $("input[name=question3]:checked").val();
        var questionFour = $("input[name=question4]:checked").val();
        var questionFive = $("input[name=question5]:checked").val();
        var questionSix = $("input[name=question6]:checked").val();
        var textAreaQ1 = $("#question1text").val().trim();
        var textAreaQ2 = $("#question2text").val().trim();
        var textAreaQ3 = $("#question3text").val().trim();
        var textAreaQ4 = $("#question4text").val().trim();
        var textAreaQ5 = $("#question5text").val().trim();
        var textAreaQ6 = $("#question6text").val().trim();
        var textAreaOtherConditions = $("#otherConditionsText").val().trim();
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