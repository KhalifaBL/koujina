// JS functions
$(document).ready(function () {
    $(".categ-name").mouseenter(function () {
        $(this).find("h4 i").addClass("fa-sort-up");
        $(this).find('.sub-categ').slideDown(500);

    });
    $(".categ-name").mouseleave(function () {
        $(this).find("h4 i").removeClass("fa-sort-up");
        $(this).find('.sub-categ').slideUp(500);
    });


});
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1VAqI4kH2_hjtCIdiu0UbYcrp5svVrjk",
    authDomain: "tunisianrecipes.firebaseapp.com",
    databaseURL: "https://tunisianrecipes.firebaseio.com",
    projectId: "tunisianrecipes",
    storageBucket: "tunisianrecipes.appspot.com",
    messagingSenderId: "710941440627",
    appId: "1:710941440627:web:318ee0359d616dcdf84806",
    measurementId: "G-RRDP07V287"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference recipes collection
var recipesRef = firebase.database().ref('recipes');


function getJson() {
    recipesRef.on('value', gotData, errData);
}

function gotData(data) {
    var recipes = data.val();
    var keys = Object.keys(recipes);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var initials = recipes[k].initials;
        var recName = recipes[k].recName;
        var recDesc = recipes[k].recDesc;
        var recMealType = recipes[k].recMealType;
        var recPrepTime = recipes[k].recPrepTime;
        var recCookTime = recipes[k].recCookTime;
        var recPhotoUrl = recipes[k].recPhotoUrl;

        var e = document.createElement("div");
        e.innerHTML =
            '<div class="search-card row">'
            + '<div class="col-lg-auto rec-photo col-12"><img src="'+recPhotoUrl+'" class="rec-thumb" alt=""></div>'
            + '<div class="col-lg-7 col-12 rec-details ">'
            + '<h3 class="rec-title">' + recName + '</h3>'
            + '<p class="rec-desc">' + recDesc + '</p>'
            + '<p class="rec-infos">Preparation time:' + recPrepTime + ' mins | Cooking time: ' + recCookTime + ' </p>'
            + '</div >'
            + '</div >';

        document.getElementById("search-results").appendChild(e);
    }
}
function errData(err) {
    console.log(err);
}

getJson();