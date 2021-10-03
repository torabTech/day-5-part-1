const mongoose = require('mongoose');
require('../model/gameSchema');


mongoose.connect('mongodb://localhost/gamesDB')
    .then(()=>console.log('Database connection established...'))
    .catch(err=> console.log(err));

