# Koujina | Best Savory Tunisian Food Recipes App
[Click to see the website](https://khalifabl.github.io/koujina/recipes.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

What things you need to install the software and how to install them

```
* A valid account at https://firebase.google.com/
* Create a new project at https://firebase.google.com/
* Click on Database (from the Left Menu), then look for "Real Time Database"
* Create a new Database and make sure to choose test mode.
* Copy the configuration generated by firebase into your html page before any other script.

```
### Import Firebase CDN links to your HTML pages
```

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

  <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>

  <!-- Add Firebase products that you want to use -->
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-database.js"></script>

```

### Writing Data to Firebase Realtime Database
In order to write data to your Firebase Realtime Database, you need to add your firebase configuration to your JS file.
You can find it at
```
Project Overview> Project Parameters> General Parameters> Firebase SDK snippet > Config
```
```
It should look like this:
const firebaseConfig = {
  apiKey: "AIzasasdasdadsdasd_this_is_an_example",
  authDomain: "yourproject.firebaseapp.com",
  databaseURL: "https://yourproject.firebaseio.com",
  projectId: "yourproject",
  storageBucket: "yourproject.appspot.com",
  messagingSenderId: "222222227",
  appId: "1:12312312312:web:1231231231",
  measurementId: "G-GGGGGGG"
};
```

