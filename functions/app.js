const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send("Hello from Firebase!");

})

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
