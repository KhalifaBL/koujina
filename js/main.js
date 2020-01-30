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

// Get a reference to the database service
var database = firebase.database();
var i = 1;
//Listening on the form
document.getElementById('new-recipe-form').addEventListener('submit', sendRecipe);

function sendRecipe(e) {
    e.preventDefault();
    var recName = document.getElementById('recipe-name').value;
    var recDesc = document.getElementById('recipe-desc').value;
    var recMealType = document.getElementById('recipe-meal-type').value;
    var recPrepTime = document.getElementById('recipe-prep-time').value;
    var recCookTime = document.getElementById('recipe-cook-time').value;
    var recPhotoUrl = document.getElementById('recipe-photo-url').value;
    document.getElementById('new-recipe-form').reset();	
    writeRecipesToFB(recName, recDesc, recMealType, recPrepTime, recCookTime, recPhotoUrl);
    window.alert('Submission Done!');
}
var recipeRef = database.ref('recipes/');
function writeRecipesToFB(recName, recDesc, recMealType, recPrepTime, recCookTime, recPhotoUrl) {
    // Generate a reference to a new location and add some data using push()

    var newRecipeRef = recipeRef.push();
    newRecipeRef.set({
        recName: recName,
        recDesc: recDesc,
        recMealType: recMealType,
        recPrepTime: recPrepTime,
        recCookTime: recCookTime,
        recPhotoUrl: recPhotoUrl

    });
    console.log(newRecipeRef.key);
}

