'use strict'

module.exports = function(app){
     let homeCtrl = require('./routes/home/home.mjs');

     app.route('/')
        .get(homeCtrl.get)
}