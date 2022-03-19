const functions = require('firebase-functions');
const app = require('express')();
const {runTokenGatingFunction} = require('./api/tokenGating');
const {getAllGms, createGm} = require('./api/gms');

app.get('/tokenGatingRoute', runTokenGatingFunction);
app.get('/gms', getAllGms);
app.post('/gms', createGm);
exports.api = functions.https.onRequest(app);